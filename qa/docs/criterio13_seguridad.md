# Criterio 13 — Pruebas de seguridad

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

## 1. Resumen

Las pruebas de seguridad se organizaron **por integrante y por requisito**, como en Athletia, siguiendo las categorías del **OWASP Top 10 (2021)**.

| Tipo de prueba | Herramienta | Resultado |
|---|---|---|
| **Dinámica** (ataques contra la aplicación en ejecución) | Cypress 13.17, un archivo por integrante en `qa/cypress/e2e/seguridad/` | **25 de 25 pruebas aprobadas**: los ataques de control de acceso, inyección SQL, XSS, autenticación y asignación masiva fallan |
| Estática (código) | Brakeman 8.0.5, el analizador de seguridad de Rails que trae Chatwoot | 40 advertencias; las 6 que tocan los RF se validaron y resultaron **falsos positivos** |
| Dependencias | `bundle-audit` (gemas de Ruby) y `pnpm audit` (paquetes de JavaScript) | 49 avisos únicos en gemas (1 crítico, 5 altos) y 53 en paquetes de producción (1 crítico, 27 altos) |

Se confirmaron **5 hallazgos** (S-01 a S-05): dos de severidad alta por dependencias desactualizadas, uno medio por falta de Content-Security-Policy y dos bajos. Ninguno se pudo explotar contra los 15 requisitos, porque Chatwoot tiene controles que los mitigan.

SonarQube lo ejecuta el pipeline de Jenkins del criterio 9. Este criterio no usó SonarQube.

## 2. Dónde está cada cosa

| Elemento | Ubicación |
|---|---|
| Pruebas de Luisa (RF-01 a RF-05) | `qa/cypress/e2e/seguridad/luisa.cy.js` |
| Pruebas de Daniel (RF-06 a RF-10) | `qa/cypress/e2e/seguridad/daniel.cy.js` |
| Pruebas de Juan Pablo (RF-11 a RF-15) | `qa/cypress/e2e/seguridad/juanpablo.cy.js` |
| Comando | `cd qa && npm run cy:seguridad` |
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

### 3.4 Resultado de la ejecución

```
  │ ✔  daniel.cy.js         7 de 7
  │ ✔  juanpablo.cy.js      9 de 9
  │ ✔  luisa.cy.js          9 de 9
    ✔  All specs passed!   25 de 25
```

## 4. Análisis estático con Brakeman

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

### 6.1 Controles que funcionan bien

- **Aislamiento entre cuentas:** ningún recurso de una cuenta se puede leer ni modificar con el token de otra (401 en las 4 peticiones hechas con el token de la otra cuenta).
- **Roles:** los agentes no pueden crear etiquetas, atributos, reglas, equipos ni ver reportes, y una macro global de un agente se guarda como personal.
- **Inyección SQL:** las columnas de los filtros se validan contra una lista permitida y los valores van como parámetros.
- **XSS:** las 6 pantallas probadas muestran el HTML como texto.
- **Autenticación:** mismo mensaje para un correo existente y uno inexistente, y tokens inválidos rechazados.
- **SSRF:** los webhooks salen por `SafeFetch`, que bloquea redes privadas.

### 6.2 Límites

- El entorno E2E desactiva Rack::Attack (`qa/docker-compose.e2e.yaml`) para que Cypress no sea bloqueado. Por eso no se evaluó la limitación de intentos de inicio de sesión (A07).
- Los avisos de dependencias se validaron por versión, no explotándolos.
- SonarQube no se usó en este criterio; lo ejecuta el pipeline de Jenkins (criterio 9).
