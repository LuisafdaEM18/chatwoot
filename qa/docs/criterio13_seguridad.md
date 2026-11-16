# Criterio 13 — Pruebas de seguridad

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

## 1. Resumen

Las pruebas de seguridad se organizaron **por integrante y por requisito**, como en Athletia, siguiendo las categorías del **OWASP Top 10 (2021)**.

| Tipo de prueba | Herramienta | Resultado |
|---|---|---|
| **Dinámica** (ataques contra la aplicación en ejecución) | Cypress 13.17, un archivo por integrante en `qa/cypress/e2e/seguridad/` más la prueba de fuerza bruta del equipo | **28 de 28 pruebas aprobadas**: los ataques de control de acceso, inyección SQL, XSS, autenticación, fuerza bruta y asignación masiva fallan |
| Estática (código) | **Brakeman 8.0.5** (analizador de Rails) y **SonarQube 26.9** | Brakeman: 40 advertencias; las 6 que tocan los RF son **falsos positivos**. SonarQube: **0 vulnerabilidades** en el código de los 15 RF (Quality Gate OK); 3 críticas en el widget, fuera del alcance (hallazgo S-06) |
| Dependencias | `bundle-audit` (gemas de Ruby) y `pnpm audit` (paquetes de JavaScript) | 49 avisos únicos en gemas (1 crítico, 5 altos) y 53 en paquetes de producción (1 crítico, 27 altos) |

Se confirmaron **6 hallazgos** (S-01 a S-06): dos de severidad alta por dependencias desactualizadas, dos medios (falta de Content-Security-Policy y el `postMessage` del widget sin validar origen) y dos bajos. Ninguno se pudo explotar contra los 15 requisitos, porque Chatwoot tiene controles que los mitigan.

SonarQube (el mismo del pipeline de Jenkins del criterio 9) se usó también aquí como segundo analizador estático; la sección 4.2 tiene el detalle.

## 2. Dónde está cada cosa

| Elemento | Ubicación |
|---|---|
| Pruebas de Luisa (RF-01 a RF-05) | `qa/cypress/e2e/seguridad/luisa.cy.js` |
| Pruebas de Daniel (RF-06 a RF-10) | `qa/cypress/e2e/seguridad/daniel.cy.js` |
| Pruebas de Juan Pablo (RF-11 a RF-15) | `qa/cypress/e2e/seguridad/juanpablo.cy.js` |
| Fuerza bruta (equipo, A07) | `qa/cypress/e2e/seguridad/fuerza_bruta.cy.js` |
| Comandos | `cd qa && npm run cy:seguridad`; con Rack::Attack activo, `npm run cy:seguridad:rack` (sección 3.4) |
| Evidencias | `qa/evidencias/seguridad/`: salidas de Cypress, log de Rails del bloqueo, cabeceras HTTP, Brakeman (`.txt` y `.json`), `bundle_audit.txt`, `pnpm_audit_prod.txt` y los resultados de SonarQube (`sonarqube_*.json`) |
| Usuarios atacantes | `agent` (agente de la cuenta), `agent2` (agente sin acceso a la bandeja) y `other` (administrador de **otra** cuenta), creados con `qa/scripts/create_qa_data.rb` |

## 3. Pruebas dinámicas por integrante

Cada prueba hace el ataque contra la aplicación en ejecución y comprueba que falla.

En las de XSS se guarda por la API el texto `<img src=x onerror="window.__xss=1">` y se abre la pantalla. La prueba verifica tres cosas:
- el texto `onerror` aparece en pantalla, es decir, el ataque sí llegó a la interfaz;
- no se creó ninguna imagen;
- la variable `window.__xss` sigue sin definir, es decir, no se ejecutó código.

### 3.1 Luisa — Conversaciones (9 pruebas)

| OWASP | RF | Ataque | Resultado esperado y obtenido |
|---|---|---|---|
| A01 Control de acceso | RF-01 | Un administrador de otra cuenta cambia el estado de una conversación | 401 y la conversación sigue abierta |
| A01 | RF-02, RF-03 | Un agente sin acceso a la bandeja lee y escribe en la conversación | 401 en ambos casos |
| A01 | RF-04 | Un agente crea una etiqueta (acción de administrador) | 401 |
| A07 Autenticación | — | Petición sin token y con un token falso | 401 e "Invalid Access Token" |
| A07 | — | Inicio de sesión con un correo existente y con uno inexistente; inyección SQL en correo y contraseña | Mismo código y mismo mensaje en los dos casos (no se pueden enumerar usuarios); la inyección responde 401 |
| A03 Inyección | RF-03 | Nota privada con HTML y JavaScript | Se muestra como texto y no se ejecuta |
| A03 | RF-04 | Descripción de etiqueta con HTML | Se muestra como texto y no se ejecuta |
| A03 | RF-05 | Inyección SQL en la búsqueda (`' OR 1=1--`, `'; DROP TABLE conversations;--`) | 200 con resultados vacíos, sin error del servidor |
| A05 Configuración | — | Revisión de cabeceras HTTP | `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` presentes; no se expone `X-Powered-By` |

### 3.2 Daniel — Contactos (7 pruebas)

| OWASP | RF | Ataque | Resultado esperado y obtenido |
|---|---|---|---|
| A01 | RF-06, RF-08 | Un administrador de otra cuenta lee un contacto y sus notas | 401 en ambos casos |
| A01 | RF-09 | Un agente crea un atributo personalizado | 401 |
| A01 | RF-10 | Un agente abre o lista el filtro guardado de otro usuario | 404 y el filtro no aparece en su lista |
| A03 | RF-06 | Nombre de contacto con HTML | Se muestra como texto y no se ejecuta |
| A03 | RF-08 | Nota de contacto con HTML | Se muestra como texto y no se ejecuta |
| A03 | RF-10 | Filtro con una columna inyectada (`name; DROP TABLE contacts;--`) y con un valor `' OR '1'='1` | 422 ("Invalid attribute key") para la columna; 200 sin resultados para el valor |
| A04 Diseño inseguro | RF-06 | Editar un contacto enviando `account_id` de otra cuenta (asignación masiva) | El contacto sigue en su cuenta y la otra cuenta no lo ve (404) |

### 3.3 Juan Pablo — Productividad (9 pruebas)

| OWASP | RF | Ataque | Resultado esperado y obtenido |
|---|---|---|---|
| A01 | RF-12 | Un agente crea una macro **global** | Se guarda como **personal**: el agente no puede publicar macros para toda la cuenta |
| A01 | RF-12 | Un administrador de otra cuenta lista las macros | 401 |
| A01 | RF-13, RF-14 | Un agente crea una regla de automatización y un equipo | 401 en ambos casos |
| A01 | RF-14 | Agregar a un equipo un usuario de otra cuenta | 401 ("Invalid User IDs") y el equipo sigue vacío |
| A01 | RF-15 | Un agente consulta los reportes de la cuenta | 401 |
| A03 | RF-11 | Respuesta predefinida con HTML | Se muestra como texto y no se ejecuta |
| A03 | RF-12 | Nombre de macro con HTML | Se muestra como texto y no se ejecuta |
| A03 | RF-15 | Métrica maliciosa en reportes (`metric=destroy`, `metric=instance_eval`, `group_by=destroy`) | 200 con `{}` y 422: no se ejecuta ningún método (valida un falso positivo de Brakeman, sección 4) |
| A10 SSRF | RF-13 | Regla con un webhook a `http://169.254.169.254/latest/meta-data/` (metadatos de la nube) | Se **acepta** al guardar: es el hallazgo S-04. La prueba documenta el comportamiento actual |

### 3.4 Equipo — Fuerza bruta con Rack::Attack activo (3 pruebas)

El entorno E2E desactiva Rack::Attack para que Cypress pueda iniciar sesión muchas veces. Para evaluar A07 sin esa excepción, `qa/cypress/e2e/seguridad/fuerza_bruta.cy.js` corre aparte, con Rails reiniciado con `QA_ENABLE_RACK_ATTACK=true`. Sin `--env rackAttack=true` las pruebas quedan omitidas, así `npm run cy:seguridad` no falla.

| OWASP | Ataque | Resultado esperado y obtenido |
|---|---|---|
| A07 | Seis inicios de sesión seguidos con contraseña incorrecta desde la misma IP | Intentos 1 a 5: **401**; intento 6: **429**. El log de Rails registra `[Rack::Attack][Blocked] ... matched_rule: "login/ip"` |
| A07 | Durante el bloqueo, iniciar sesión con la contraseña **correcta** del administrador | **429**: el bloqueo es por IP y no deja adivinar si la contraseña era buena |
| A07 | Seis solicitudes seguidas de restablecer contraseña | Bloqueo **429** en la sexta, regla `reset_password/ip` |

```
QA_ENABLE_RACK_ATTACK=true docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml up -d rails
cd qa && npm run cy:seguridad:rack
docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml up -d rails   # vuelve a desactivarlo
```

### 3.5 Resultado de la ejecución (16 de noviembre de 2026)

Con Rack::Attack desactivado (`npm run cy:seguridad`, salida completa en `qa/evidencias/seguridad/cypress_seguridad.txt`):

```
  │ ✔  daniel.cy.js         00:10    7 de 7
  │ ✔  fuerza_bruta.cy.js   66ms     3 omitidas (necesita Rack::Attack)
  │ ✔  juanpablo.cy.js      00:07    9 de 9
  │ ✔  luisa.cy.js          00:14    9 de 9
    ✔  All specs passed!   00:33   25 aprobadas, 3 omitidas
```

Con Rack::Attack activo (`npm run cy:seguridad:rack`, salida en `qa/evidencias/seguridad/cypress_fuerza_bruta.txt` y log de Rails en `rails_log_fuerza_bruta.txt`):

```
  │ ✔  fuerza_bruta.cy.js   418ms    3 de 3
```

En total: **28 de 28 pruebas dinámicas aprobadas**.

## 4. Análisis estático del código

Se usaron dos analizadores estáticos: **Brakeman** (específico de Rails, lo trae Chatwoot) y **SonarQube** (el mismo del pipeline del criterio 9).

### 4.1 Brakeman

Brakeman 8.0.5 revisó 224 controladores, 111 modelos y 195 plantillas con 79 tipos de chequeo. Encontró **40 advertencias**: 14 de confianza alta, 22 media y 4 débil. La mayoría está en el módulo `enterprise/` (Captain, SLA) o en controladores fuera del alcance. Las seis que tocan los 15 requisitos se validaron una por una:

| Advertencia de Brakeman | Archivo | RF | Validación | Conclusión |
|---|---|---|---|---|
| Dangerous Send (alta): `send(params[:metric])` | `app/builders/v2/report_builder.rb:19` | RF-15 | El código comprueba la métrica con `metric_valid?` (lista blanca). La prueba con `metric=destroy` e `instance_eval` devuelve `{}` | Falso positivo |
| Dangerous Send (alta): `send("build_by_#{params[:group_by]}")` | `app/builders/v2/reports/outgoing_messages_count_builder.rb:11` | RF-15 | `group_by=destroy` responde 422 | Falso positivo |
| SQL Injection (débil) | `app/services/filter_service.rb:189` | RF-10 | La columna se valida contra una lista permitida (422 con columna inyectada) y los valores van como parámetros (200 sin datos con `' OR '1'='1`) | Falso positivo |
| SQL Injection (débil) | `app/services/search_service.rb:189-190` | RF-05 | La columna interpolada es interna, no viene del usuario; la búsqueda con inyección devuelve vacío | Falso positivo |
| Mass Assignment (media): `params.permit!` | `app/controllers/api/v1/accounts/contacts_controller.rb:47, 63` | RF-06, RF-10 | Solo alimenta la exportación y el filtro, que validan cada llave; un PATCH con `account_id` ajeno no mueve el contacto | Falso positivo |
| Mass Assignment (media): `params.permit!` | `app/controllers/api/v1/accounts/conversations_controller.rb:53` | RF-01 | Solo alimenta el filtro de conversaciones, que valida las llaves igual que el de contactos | Falso positivo |

Brakeman también reportó **Unmaintained Dependency (alta)**: Rails 7.2.3.1 dejó de recibir soporte el 9 de agosto de 2026. Esa advertencia sí se confirma y es parte de S-01.

### 4.2 SonarQube

SonarQube 26.9 (Community) analizó el código con el mismo `sonar-project.properties` del criterio 9. Se corrió de dos maneras:

1. **Sobre el código de los 15 requisitos** (proyecto `Chatwoot-Seguridad`, 6 339 líneas): **0 vulnerabilidades, 0 security hotspots**, calificación de seguridad **A** y Quality Gate **OK**. Evidencia en `qa/evidencias/seguridad/sonarqube_medidas.json` y `sonarqube_quality_gate.json`. Esto confirma, con una herramienta distinta de Brakeman, que el código que el equipo probó y corrigió no tiene vulnerabilidades marcadas.
2. **Sobre todo `app/` y `lib/` del lado del navegador** (proyecto `Chatwoot-Seguridad-Amplio`, 57 324 líneas), para no dejar puntos ciegos fuera del alcance. Aquí SonarQube marcó **3 vulnerabilidades críticas** del tipo `javascript:S2819` (comunicación insegura entre ventanas), todas en el **widget de chat embebible**, no en los 15 requisitos:

| Archivo y línea | Regla | Mensaje | Validación |
|---|---|---|---|
| `app/javascript/sdk/IFrameHelper.js:95` | javascript:S2819 | `postMessage` a `'*'` (no fija el origen de destino) | Confirmado por revisión: `sendMessage` envía a `'*'` |
| `app/javascript/sdk/IFrameHelper.js:101` | javascript:S2819 | `window.onmessage` no verifica `e.origin` | Confirmado: el `onmessage` solo revisa el prefijo `chatwoot-widget:`, nunca `e.origin` |
| `app/javascript/widget/helpers/utils.js:9` | javascript:S2819 | `window.parent.postMessage` a `'*'` | Confirmado por revisión |

Estas tres advertencias son el **hallazgo S-06** (sección 6). El widget corre en el sitio web del cliente, fuera de los 15 requisitos, pero se reporta porque lo detectó el análisis estático pedido por el criterio. Evidencia en `qa/evidencias/seguridad/sonarqube_amplio_vulnerabilidades.json`.

## 5. Revisión de dependencias

### 5.1 Gemas de Ruby (`bundle-audit check --update`)

49 avisos únicos en 13 gemas: **1 crítico, 5 altos**, 25 medios, 6 bajos y 12 sin clasificar. Los relevantes:

| Gema y versión | Severidad | Aviso | Corrección |
|---|---|---|---|
| activestorage 7.2.3.1 | **Crítica** | GHSA-f3w6-w445-fwh9: posible escritura y lectura arbitraria de archivos en el análisis de imágenes | Rails ≥ 8.0.5.2 |
| activestorage 7.2.3.1 | Alta | GHSA-v924-7rp8-4mxh: lectura de archivos y ejecución remota en vistas previas de video e imágenes | Rails ≥ 8.0.5.2 |
| actionpack 7.2.3.1 | Alta | GHSA-wm3x-v3qw-4jh3: posible evasión de Strong Parameters en `Parameters#each_key` | Rails ≥ 8.0.5.2 |
| activesupport 7.2.3.1 | Alta | GHSA-8474-xrp6-wh69: posible DoS en `safe_constantize` | Rails ≥ 8.0.5.2 |
| rack 3.2.6 | Alta | GHSA-5v64-555j-wjxm: DoS por memoria en el analizador multipart | rack ≥ 3.2.8 |
| msgpack 1.8.3 | Alta | GHSA-73v3-wf97-vpgj: consumo de memoria (solo en JRuby; Chatwoot usa MRI) | msgpack ≥ 1.8.7 |
| actionview, loofah, rails-html-sanitizer, nokogiri | Media | Varias posibles XSS en los sanitizadores de HTML | Versiones indicadas por el aviso |

### 5.2 Paquetes de JavaScript (`pnpm audit --prod`)

En las dependencias de producción hay 53 avisos: **1 crítico, 27 altos**, 17 medios y 8 bajos. Con las de desarrollo el total sube a 109; esas no llegan al navegador del usuario. Varios de los "de producción" son herramientas de compilación (tailwind, glob, vite) y tampoco llegan al navegador. Los que sí afectan la aplicación:

| Paquete y versión | Severidad | Aviso | Corrección |
|---|---|---|---|
| dompurify 3.4.16 | **Crítica** | Evasión de `SAFE_FOR_TEMPLATES` y manejadores de eventos que quedan activos en modo `IN_PLACE` | ≥ 3.4.17 |
| prosemirror-view 1.34.1 | Alta | CVE-2026-104847: XSS al pegar contenido en el editor | ≥ 1.42.3 |
| vue-i18n 9.14.5 | Alta | CVE-2026-118257: `escapeParameter` no evita XSS mediante `srcdoc` | Sin versión corregida en la rama 9 |
| js-cookie 3.0.5 | Alta | CVE-2026-46625: inyección de atributos de cookie | ≥ 3.0.7 |
| @xmldom/xmldom 0.8.13 (vía video.js) | Alta | Inyección de nombres de elementos y atributos; ReDoS | ≥ 0.8.15 |

## 6. Hallazgos confirmados

| ID | OWASP | Hallazgo | Validación | Severidad | Recomendación |
|---|---|---|---|---|---|
| S-01 | A06 Componentes vulnerables y desactualizados | Rails 7.2.3.1 sin soporte desde agosto de 2026, con 1 aviso crítico y 3 altos (Active Storage, Action Pack, Active Support), más rack y los sanitizadores | Brakeman y bundle-audit coinciden; las versiones están en `Gemfile.lock`. No se intentó explotarlo | **Alta** | Actualizar a Rails 8.0.5.2 o superior, y rack, loofah, nokogiri y rails-html-sanitizer a las versiones corregidas |
| S-02 | A06 | DOMPurify (crítico), ProseMirror y vue-i18n (XSS) desactualizados en el frontend | `pnpm audit --prod`; los paquetes están en `package.json`/`pnpm-lock.yaml` y se usan en el editor y en los mensajes | **Alta** | Actualizar dompurify, prosemirror-view y js-cookie; evaluar vue-i18n 10 |
| S-03 | A05 Configuración de seguridad incorrecta | No se envía la cabecera **Content-Security-Policy** | `curl` y la prueba de cabeceras: están `X-Frame-Options`, `nosniff` y `Referrer-Policy`, pero no CSP | Media | Definir una CSP (`script-src 'self'`), para que un XSS futuro no pueda ejecutar código aunque falle el escape |
| S-04 | A10 SSRF | Una regla de automatización acepta un webhook a una dirección interna (`169.254.169.254`) sin validarla al guardar | Prueba dinámica (200 al guardar). Al disparar la regla, Sidekiq registró "Hostname '169.254.169.254' has no public ip addresses": `SafeFetch` (`lib/safe_fetch`) bloquea la petición al ejecutarla | Baja | Validar la URL al guardar con el mismo `SafeFetch`, para avisar al administrador de inmediato |
| S-05 | A03 Inyección | La API guarda el HTML tal cual en nombres de contacto, notas, respuestas predefinidas, macros y etiquetas; la protección depende de que cada pantalla lo escape | Se guardó `<img onerror>` en los cinco campos (200). Las 6 pantallas probadas lo escapan correctamente | Baja | Mantener el escape en el frontend y sumar la CSP (S-03); sanear o escapar también en correos, exportaciones y el widget |
| S-06 | A08 Fallas de integridad de software y datos | El SDK del widget (`IFrameHelper.js`) escucha `window.onmessage` sin verificar `e.origin` y envía mensajes con `postMessage(..., '*')`. Un iframe de otro origen dentro del sitio del cliente podría enviarle eventos (`loaded`, `popoutChatWindow`) | SonarQube (3 vulnerabilidades críticas `javascript:S2819`) y revisión del código. Fuera de los 15 requisitos; no se desarrolló un exploit | Media | Verificar `event.origin` contra el `baseUrl` esperado en el `onmessage` y enviar `postMessage` con el origen de destino en lugar de `'*'` |

### 6.1 Controles que funcionan bien

- **Aislamiento entre cuentas:** ningún recurso de una cuenta se puede leer ni modificar con el token de otra (401 en las 4 peticiones hechas con el token de la otra cuenta).
- **Roles:** los agentes no pueden crear etiquetas, atributos, reglas, equipos ni ver reportes, y una macro global de un agente se guarda como personal.
- **Inyección SQL:** las columnas de los filtros se validan contra una lista permitida y los valores van como parámetros.
- **XSS:** las 6 pantallas probadas muestran el HTML como texto.
- **Autenticación:** mismo mensaje para un correo existente y uno inexistente, tokens inválidos rechazados y bloqueo 429 tras 5 intentos fallidos de inicio de sesión o de restablecimiento de contraseña por IP (Rack::Attack).
- **SSRF:** los webhooks salen por `SafeFetch`, que bloquea redes privadas.

### 6.2 Límites

- El entorno E2E desactiva Rack::Attack (`qa/docker-compose.e2e.yaml`) para que Cypress no sea bloqueado; la limitación de intentos (A07) se evaluó aparte, reactivándolo (sección 3.4). En producción conviene revisar que Rack::Attack quede activo (es el valor por defecto) y que el proxy pase la IP real del cliente, porque la regla `login/ip` cuenta por IP.
- Los avisos de dependencias se validaron por versión, no explotándolos.
- SonarQube Community no trae análisis DAST ni IAST; su aporte aquí es estático (SAST). Los ataques en ejecución se cubrieron con Cypress.
- El hallazgo S-06 (widget) se confirmó con análisis estático y revisión de código, no con un exploit funcional, porque el widget queda fuera de los 15 requisitos del alcance.
