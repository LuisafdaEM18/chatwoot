# Criterio 11 — Pruebas de accesibilidad

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

## 1. Resumen

Se evaluaron las pantallas de los 15 requisitos con dos métodos:

1. **Herramienta automática:** axe-core 4.10 con `cypress-axe`, con las reglas de WCAG 2.0 y 2.1, niveles A y AA. Es la misma combinación que el equipo usó en Athletia. Hay un archivo por integrante.
2. **Comprobaciones manuales** en el navegador: teclado, foco, etiquetas, mensajes, contraste y adaptación visual (reflow a 320 px, espaciado de texto y modo oscuro).

| Integrante | Pantallas revisadas con axe | Pruebas | Resultado |
|---|---|---|---|
| Luisa | Inicio de sesión, conversación (RF-01 a RF-03), nueva etiqueta (RF-04), búsqueda (RF-05) | 4 | 4 aprobadas |
| Daniel | Lista de contactos y ficha (RF-06), importar (RF-07), notas (RF-08), nuevo atributo (RF-09), filtros (RF-10) | 5 | 5 aprobadas |
| Juan Pablo | Respuestas predefinidas (RF-11), macros (RF-12), automatizaciones (RF-13), equipos (RF-14), reportes (RF-15) | 5 | 5 aprobadas |
| **Total** | **14 pantallas** | **14** | **14 de 14 aprobadas** |

En total se encontraron **19 barreras**: 11 con axe y 8 con las comprobaciones manuales. 14 son de nivel A y 5 de nivel AA. Las más graves son tres: el zoom bloqueado en móviles, los botones de icono sin nombre y sin foco visible, y los mensajes de error que no se anuncian.

### Por qué las pruebas pasan si hay barreras

En Athletia las pruebas exigían cero violaciones, porque la aplicación era del equipo y se corregía. Chatwoot es un proyecto de terceros con barreras ya existentes. Por eso cada prueba declara las barreras **conocidas** de su pantalla (las de la tabla de la sección 5) y falla si axe encuentra **una barrera nueva**.

Así las pruebas cumplen dos funciones:

- Documentan en el código qué barreras tiene cada pantalla.
- Funcionan como prueba de regresión de accesibilidad: un cambio que agregue un problema nuevo rompe la prueba.

Cada prueba imprime en la terminal el detalle de todas las violaciones encontradas (regla, impacto, criterio WCAG, cantidad de elementos y selectores), igual que el helper de Athletia.

## 2. Dónde está cada cosa

| Elemento | Ubicación |
|---|---|
| Helper de axe (reglas, barreras comunes, reporte en terminal) | `qa/cypress/support/accesibilidad.js` |
| Pruebas por integrante | `qa/cypress/e2e/accesibilidad/{luisa,daniel,juanpablo}.cy.js` |
| Tarea `log` para imprimir en la terminal | `qa/cypress.config.js` |
| Comando | `cd qa && npm run cy:accesibilidad` |

Jenkins las ejecuta con la opción `todos`, porque están dentro de `cypress/e2e/`.

## 3. Entorno y herramientas

| Elemento | Valor |
|---|---|
| Aplicación | Imagen `chatwoot/chatwoot:v4.19.1` con `qa/docker-compose.e2e.yaml`, el mismo entorno de Cypress |
| Automática | axe-core 4.10.2, cypress-axe 1.5.0, Cypress 13.17 con Electron, ventana de 1366 × 768 |
| Reglas | Etiquetas `wcag2a`, `wcag2aa`, `wcag21a` y `wcag21aa` |
| Manual | Navegador Chromium. Navegación solo con teclado (Tab, Shift+Tab, Enter, Escape y los atajos de Chatwoot); inspección del árbol de accesibilidad y de los estilos de foco; ventana de 320 × 640 para reflow; hoja de estilos de WCAG 1.4.12 para espaciado; modo oscuro |
| Usuario | Administrador de pruebas `qa.admin@chatwoot.test`, creado con `qa/scripts/create_qa_data.rb` |

## 4. Criterios WCAG 2.1 evaluados

| Criterio | Nivel | Cómo se evaluó | Resultado |
|---|---|---|---|
| 1.1.1 Contenido no textual | A | axe (`image-alt`, `role-img-alt`) | No cumple: B-03, B-06 |
| 1.3.1 Información y relaciones | A | axe (`list`, `listitem`) y revisión de etiquetas | No cumple: B-08, B-14 |
| 1.3.5 Identificar el propósito de la entrada | AA | Manual (atributo `autocomplete`) | No cumple: B-14 |
| 1.4.3 Contraste mínimo | AA | axe (`color-contrast`) y cálculo manual en modo claro y oscuro | No cumple: B-05 |
| 1.4.4 Cambio de tamaño del texto | AA | axe (`meta-viewport`) | No cumple: B-02 |
| 1.4.10 Reflow | AA | Manual, ventana de 320 px | Cumple con observaciones: B-19 |
| 1.4.12 Espaciado del texto | AA | Manual, hoja de estilos de prueba | Cumple: no se pierde ni se superpone texto |
| 2.1.1 Teclado | A | Manual y axe (`scrollable-region-focusable`) | No cumple: B-10, B-16 |
| 2.1.2 Sin trampas de teclado | A | Manual | Cumple: Escape cierra las ventanas y siempre se puede salir con Tab |
| 2.4.1 Evitar bloques | A | Manual (regiones `aside`, `nav`, `main` y un `h1`) | Cumple con las regiones; no hay enlace para saltar al contenido |
| 2.4.2 Titulado de páginas | A | Manual | No cumple: B-18 |
| 2.4.3 Orden del foco | A | Manual | No cumple: B-13, B-17 |
| 2.4.4 Propósito de los enlaces | A | axe (`link-name`) | No cumple: B-07 |
| 2.4.7 Foco visible | AA | Manual (`:focus-visible` y estilos calculados) | No cumple: B-12 |
| 3.1.1 Idioma de la página | A | axe (`html-has-lang`) | No cumple: B-01 |
| 3.3.1 Identificación de errores | A | Manual | Cumple en parte: el texto del error se ve, pero no queda asociado al campo (B-15) |
| 3.3.2 Etiquetas o instrucciones | A | axe (`label`) y manual | No cumple: B-09, B-14 |
| 4.1.2 Nombre, función, valor | A | axe (`button-name`, `label`, `nested-interactive`) y manual | No cumple: B-04, B-09, B-11, B-17 |
| 4.1.3 Mensajes de estado | AA | Manual (regiones `aria-live` y `role="alert"`) | No cumple: B-15 |

## 5. Barreras encontradas

Severidad: **crítica** (impide la tarea a un grupo de usuarios), **alta** (la dificulta mucho), **media** y **baja**.

### 5.1 Encontradas con axe

| ID | Barrera | WCAG | Severidad | Dónde | Recomendación |
|---|---|---|---|---|---|
| B-01 | El elemento `<html>` no tiene `lang`. Los lectores de pantalla no saben en qué idioma leer. | 3.1.1 (A) | Alta | Todas las pantallas | En `app/views/layouts/vueapp.html.erb`, usar `<html lang="<%= I18n.locale %>">` y actualizarlo cuando el usuario cambie de idioma. |
| B-02 | `<meta name="viewport" ... user-scalable=0>` bloquea el zoom en móviles. | 1.4.4 (AA) | Crítica | Todas las pantallas | Quitar `user-scalable=0` del mismo archivo. |
| B-03 | El logo de la barra lateral (`/brand-assets/logo_thumbnail.svg`) no tiene `alt`. | 1.1.1 (A) | Media | Panel | Agregar `alt="Chatwoot"`, o `alt=""` si es decorativo. |
| B-04 | Botones que solo tienen un icono y no tienen nombre accesible: 57 en una conversación, 49 en etiquetas, 39 en macros y equipos, 29 en respuestas predefinidas. Incluye el botón de plegar la barra lateral y los de editar y borrar de cada fila. | 4.1.2 (A) | Crítica | Todas las pantallas del panel | Usar como `aria-label` el texto que ya muestra el tooltip (`v-tooltip`) en el componente `Button`. |
| B-05 | Contraste insuficiente en dos casos. El texto secundario `text-n-slate-10` (#80838d sobre blanco, **3,78:1**) aparece en "Search..." y en los títulos de sección de la barra lateral. El texto blanco de los botones principales sobre el azul de marca también da **3,78:1** (Login, Import, Message, Update contact). En modo oscuro "Search..." baja a 3,32:1. | 1.4.3 (AA) | Alta | Todas las pantallas | Oscurecer el token `slate-10` y el azul de los botones hasta 4,5:1 o más. |
| B-06 | Los avatares (`span role="img"`) no tienen nombre accesible. | 1.1.1 (A) | Media | Conversación, contactos, macros | Agregar `aria-label` con el nombre del contacto o del agente, o quitar `role="img"` cuando el nombre ya está escrito al lado. |
| B-07 | Enlaces sin texto: el lápiz de editar en macros y equipos (19 por pantalla) y el enlace al contacto en la conversación. | 2.4.4 y 4.1.2 (A) | Alta | Macros, equipos, conversación | Agregar `aria-label` ("Editar macro X", "Ver contacto X"). |
| B-08 | Listas mal formadas en la barra lateral: `<ul>` con `<div>` como hijos directos y `<li>` sin lista padre. | 1.3.1 (A) | Baja | Conversación, contactos | Envolver los elementos en `<li>`, o usar `role="list"` y `role="listitem"` de forma consistente. |
| B-09 | Casillas sin etiqueta: "Show label on sidebar" en el formulario de etiqueta, y la casilla del formulario de atributo personalizado. | 4.1.2 y 3.3.2 (A) | Media | Nueva etiqueta (RF-04), nuevo atributo (RF-09) | Asociar el texto visible con `<label for>` o `aria-labelledby`. |
| B-10 | La lista de conversaciones tiene scroll pero no puede recibir foco. Con teclado no se puede desplazar. Aparece según la cantidad de conversaciones. | 2.1.1 (A) | Media | Conversación | Agregar `tabindex="0"` y un `aria-label` al contenedor con scroll. |
| B-11 | Las gráficas del reporte son `svg` con `aria-label` y tienen elementos interactivos dentro. | 4.1.2 (A) | Media | Reportes (RF-15) | Quitar el foco de los elementos internos, o dar a la gráfica un resumen en tabla accesible. |

### 5.2 Encontradas con las comprobaciones manuales

| ID | Barrera | WCAG | Severidad | Cómo se encontró | Recomendación |
|---|---|---|---|---|---|
| B-12 | **Foco no visible.** Con Tab, el botón "Login", el de mostrar contraseña y la mayoría de los botones de icono del panel quedan con `outline` transparente y sin sombra, aunque tengan `:focus-visible`. No se sabe dónde está el foco. Los campos de texto y el enlace "Forgot your password?" sí lo muestran. | 2.4.7 (AA) | Crítica | Se recorrió el login y una conversación con Tab, registrando el estilo de cada elemento enfocado | Definir en el componente `Button` un anillo para `:focus-visible` (por ejemplo `outline: 2px solid` con contraste de 3:1). |
| B-13 | **Orden del foco del login distinto del visual.** En pantalla el orden es correo → "Forgot your password?" → contraseña → ojo → Login. Con Tab es correo → contraseña → Login → "Forgot" → ojo. | 2.4.3 (A) | Baja | Recorrido con Tab | Reordenar el DOM para que siga el orden visual. |
| B-14 | **Campos del login sin `<label>` asociado.** El texto "Email" no está vinculado al campo, y el nombre accesible sale del placeholder ("example@companyname.com"). Tampoco tienen `autocomplete`. | 1.3.1, 3.3.2 (A) y 1.3.5 (AA) | Alta | Inspección de `input.labels` y atributos | Vincular `<label for>` y agregar `autocomplete="email"` y `autocomplete="current-password"`. |
| B-15 | **Los mensajes de error no se anuncian.** "Invalid login credentials. Please try again." y el aviso "Title is invalid" de etiquetas aparecen en pantalla sin `aria-live` ni `role="alert"`. El campo no recibe `aria-invalid` ni `aria-describedby`, y el foco no se mueve hacia el error. El aviso de etiquetas además desaparece solo a los pocos segundos. | 4.1.3 (AA) y 3.3.1 (A) | Alta | Se enviaron credenciales incorrectas y una etiqueta inválida con el teclado | Poner el contenedor de avisos en `role="status"` o `aria-live="polite"` (`role="alert"` para errores), y marcar el campo con `aria-invalid` y `aria-describedby`. |
| B-16 | **Las tarjetas de conversación no se alcanzan con Tab.** Son `div` sin `tabindex`, sin rol y sin enlace. Solo se puede cambiar de conversación con los atajos Alt+J y Alt+K, que no se anuncian. | 2.1.1 (A) | Alta (mitigada por los atajos) | Recorrido con Tab e inspección del DOM; se comprobó que Alt+J abre la siguiente conversación | Convertir cada tarjeta en un enlace o un botón, o darles `tabindex="0"`, `role="link"` y activación con Enter. |
| B-17 | **Ventanas modales sin semántica de diálogo.** La de nueva etiqueta se abre con Enter y se cierra con Escape, pero no tiene `role="dialog"` ni `aria-modal`. El foco se queda en el botón "Add label" del fondo, y Tab recorre los elementos de detrás de la ventana. | 2.4.3 y 4.1.2 (A) | Alta | Se abrió con el teclado y se siguió el foco con Tab | Usar `<dialog>` con `showModal()` o `role="dialog"` + `aria-modal="true"` + `aria-labelledby`; mover el foco al primer campo y devolverlo al cerrar. |
| B-18 | **El título de la página es siempre "Chatwoot"** en conversación, contactos, configuración y reportes. | 2.4.2 (A) | Media | Se revisó `document.title` al navegar | Actualizar el título en cada ruta (por ejemplo "Etiquetas · Configuración · Chatwoot"). |
| B-19 | **Reflow a 320 px con observaciones.** No hay scroll horizontal y el menú pasa a un botón flotante, pero ese botón tapa parte del contenido. En la tabla de etiquetas, la descripción y los botones de editar y borrar quedan fuera de la vista y solo se ven desplazando la tabla de lado (las tablas de datos están exentas de 1.4.10). | 1.4.10 (AA) | Baja | Ventana de 320 × 640 | Dejar espacio inferior para el botón flotante y, en pantallas angostas, mostrar las acciones de cada fila en un menú. |

### 5.3 Lo que sí cumple

- **Teclado:** las ventanas modales se abren con Enter y se cierran con Escape. No hay trampas de teclado (2.1.2). Chatwoot tiene atajos (Alt+J y Alt+K para cambiar de conversación, y ⌘ + / para ver la lista de atajos).
- **Estructura:** hay regiones `aside`, `nav` y `main`, y un `h1` por pantalla. Esto permite saltar bloques con un lector de pantalla (2.4.1).
- **Etiquetas:** los campos de nombre y descripción del formulario de etiqueta sí tienen `<label>` asociado. El botón de mostrar contraseña tiene `aria-label="Show password"`.
- **Adaptación visual:** a 320 px no hay scroll horizontal en la página (1.4.10). Con el espaciado de texto de 1.4.12 no se pierde ni se superpone texto.
- **Foco en campos:** los campos de texto y los enlaces sí muestran un borde de foco visible.

## 6. Resultado de las pruebas automáticas

```
  [Luisa Espinal] Accesibilidad automática con axe
    √ el inicio de sesión no agrega barreras a las conocidas
    √ RF-01 a RF-03: la vista de una conversación no agrega barreras a las conocidas
    √ RF-04: el formulario de nueva etiqueta no agrega barreras a las conocidas
    √ RF-05: la búsqueda con resultados no agrega barreras a las conocidas

  [Daniel Ortiz] Accesibilidad automática con axe
    √ RF-06: la lista de contactos no agrega barreras a las conocidas
    √ RF-06 y RF-08: la ficha de un contacto con sus notas no agrega barreras a las conocidas
    √ RF-07: la ventana de importar contactos no agrega barreras a las conocidas
    √ RF-09: el formulario de atributo personalizado no agrega barreras a las conocidas
    √ RF-10: el panel de filtros de contactos no agrega barreras a las conocidas

  [Juan Pablo Berrío] Accesibilidad automática con axe
    √ RF-11: la lista de respuestas predefinidas no agrega barreras a las conocidas
    √ RF-12: la lista de macros no agrega barreras a las conocidas
    √ RF-13: la lista de automatizaciones no agrega barreras a las conocidas
    √ RF-14: la lista de equipos no agrega barreras a las conocidas
    √ RF-15: el reporte de conversaciones no agrega barreras a las conocidas

  14 passing
```

Ejemplo del detalle que imprime cada prueba (pantalla de macros):

```
[axe] macros: 7 tipo(s) de violación
  - [critical] button-name (wcag412): Buttons must have discernible text (39 elemento/s)
  - [serious] link-name (wcag244, wcag412): Links must have discernible text (19 elemento/s)
  - [serious] role-img-alt (wcag111): [role="img"] elements must have an alternative text (39 elemento/s)
  ...
```

## 7. Recomendaciones priorizadas

1. **Quitar `user-scalable=0` y agregar `lang`** (B-01, B-02). Es un cambio de dos líneas en `vueapp.html.erb` que afecta a todas las pantallas.
2. **Nombre y foco visible en los botones de icono** (B-04, B-07, B-12). Se corrige en el componente compartido `Button`: `aria-label` a partir del tooltip y un anillo de `:focus-visible`.
3. **Anunciar los mensajes** (B-15). Hacer que el contenedor de avisos sea una región `aria-live` y asociar los errores a sus campos.
4. **Contraste** (B-05). Ajustar los tokens `slate-10` y el azul de marca del sistema de diseño.
5. **Diálogos y lista de conversaciones** (B-16, B-17). Usar `<dialog>` con manejo de foco y volver enfocables las tarjetas de conversación.
6. Lo demás (B-03, B-06, B-08 a B-11, B-13, B-14, B-18, B-19), en el orden de severidad de la tabla.

Cuando se corrija una barrera, se quita de la lista de conocidas de la prueba correspondiente. Desde ese momento la prueba exige que la barrera no vuelva a aparecer.
