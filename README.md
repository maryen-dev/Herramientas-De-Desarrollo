# 🛍️ Joyería Online - E-commerce  

 **Joyeria Marly** - Nuestro proyecto consiste en el desarrollo de una app web para Marly Handmade Jewelry, con el objetivo de modernizar la gestión de ventas y administración, además de mejorar la experiencia del cliente. 
Esta plataforma permitirá optimizar procesos, que ayudará a la joyería a crecer en el mundo digital y llegar a más personas


### Requerimientos funcionales
El aplicativo web debe permitir al usuario 
-	poder registrarse e ingresar a su cuenta
-	visualizar el catálogo de productos
-	visualizar los términos y condiciones
-	realizar un reclamo
-	tener acceso al carrito de compras
-	realizar una compra
-	descargar la boleta de su compra
- El aplicativo web debe permitir al administrador 
-	eliminar/agregar/editar productos
-	eliminar/editar clientes
-	editar estado del reclamo
-	Visualizar listado de clientes/productos/compras/reclamos

 ### Requerimientos no funcionales
-	Usabilidad → que sea intuitiva y fácil de usar.
-	Compatibilidad → adaptable a distintos dispositivos.
-	Seguridad → protección de datos y transacciones.
-	Rendimiento → páginas que carguen rápido.
-	Escalabilidad → lista para crecer con nuevas funciones.

---

## 🚀 Tecnologías utilizadas  

### Backend  
- **Spring Boot** (Java) – Framework principal para la lógica de negocio y APIs REST.  
- **IntelliJ IDEA** – IDE de desarrollo.  
- **MySQL** – Base de datos relacional para almacenamiento de información.  

### Frontend  
- **Vite + React** – Framework moderno para el desarrollo de la interfaz de usuario.  
- **CSS/Tailwind** – Estilos y diseño responsivo.  

---

## 📦 Instalación y ejecución  

### Backend (Spring Boot)  
```bash
# Clonar repositorio
git clone https://github.com/MaryenAguilar/Herramientas-De-Desarrollo.git

# Entrar al proyecto backend
cd backend

# Compilar y ejecutar
./mvnw spring-boot:run
```

### Frontend (React + Vite)
```bash
# Entrar al proyecto frontend
cd Herramientas-De-Desarrollo

# Instalar dependencias
npm install

# Ejecutar en entorno local
npm run dev
```

### Base de datos (MySQL)
- Crear una base de datos llamada joyeriaBD.
- Ejecutar el script SQL de creación de tablas (disponible en /db).
- Configurar credenciales en application.properties de Spring Boot.

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/joyeriaBD
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
```

## 👥 Roles y Créditos
| Nombre | Rol | Funciones |
|--------|-----|-----------|
| Edson | Dev FullStack | Productos |
| Giancarlo | Dev FullStack | Login y Registro |
| Maryen | Git Master y Dev FullStack | Control de versiones |
| Nayeli | Dev FullStack | Reclamos |
| Anthony | Dev FullStack | Base de Datos |

## 👥 Roles del sistema  

### Cliente  
- Registrar un usuario nuevo
- Ver productos disponibles
- Agregar/quitar productos del carrito
- Visualizar el total de compra
- Realizar una compra
- Descargar la boleta de compra
- Realizar un reclamo.
- Visualizar los términos y condiciones

### Administrador  
- Gestionar clientes (visualizar, editar, eliminar, buscar por DNI).  
- Gestionar productos (visualizar, agregar, modificar, eliminar, buscar por código).  
- Visualizar ventas realizadas y acceder a boletas.  
- Visualizar y editar productos.  
- Consultar pedidos por cliente (DNI o código de venta).   

---

## 📂 Arquitectura  

El proyecto sigue el **patrón de diseño MVC (Modelo - Vista - Controlador)**:  
- **Modelo**: Entidades como Producto, Pedido, Venta, Usuario, etc.  
- **Vista**: Interfaz desarrollada con React + Vite.  
- **Controlador**: Endpoints REST con Spring Boot.  

---

## 🗄️ Base de datos  

Se implementó en **MySQL**, con tablas principales como:  
- `Usuario`, `Roles`  , `Usuario_Rol`  
- `Producto`, `CategoriaProducto`, `Material`, `Coleccion`  
- `Pedido`, `DetallePedido`, `EstadoPedido`  
- `Venta`, `Boleta`

---

## 🔄 Flujo de Trabajo en Git
### Estructura de ramas: 
Rama feature: 
Se usa cuando necesitas desarrollar una nueva funcionalidad para el proyecto.\
Rama fix: Se usa cuando detectas un bug o error en el código existente y necesitas solucionarlo.
### Comandos en Git:
- Con `git init` se inicia un nuevo repositorio, luego con `git clone <url-del-repositorio>` se copia un proyecto existente en la máquina local, y finalmente con `git config user.name "Tu Nombre"` y `git config user.email "tu_email@example.com"` se define la identidad del programador que quedará registrada en los commits del proyecto.
  ```bash
  git init
  git clone "Link del proyecto"
  git config --global user.name "Nombre"
  git config --global user.email "Correo"
<p align="center">
  <img src="./screenshots/GitClone.jpeg" alt="Descripción"/>
</p>

- Se implementó touch/mkdir para crear los archivos que contengan el LICENSE, .gitignore, README y la carpeta de screenshots. 
  ```bash
  touch .gitignore
  touch LICENSE
  touch README.MD
  mkdir "NombreCarpeta"
<p align="center">
  <img src="./screenshots/Touch.jpeg" alt="Descripción"/>
  <img src="./screenshots/MkDir.jpeg" alt="Descripción"/>
</p>

- Se usó el comando add para seleccionar los cambios realizados y mandarlos a Stage, para posteriormente realizar un commit. También, podemos modificar los commits realizados o visualizar todo el listado de commits previos. Finalmente, usamos status para mostrar el estado del repositorio: archivos modificados, en Stage y sin seguimiento.
  ```bash
  git add .
  git commit -m "Mensaje"
  git commit --amend -m "Mensaje"
  git log --oneline
  git status
<p align="center">
  <img src="./screenshots/gitAdd.jpeg" alt="Descripción"/>
  <img src="./screenshots/gitCommit.jpeg" alt="Descripción"/>
</p>

- Se implementó git push y git pull para sincronizar el repositorio local con el repositorio remoto, permitiendo subir los cambios realizados localmente (push) y obtener las actualizaciones realizadas por otros colaboradores (pull). Esto garantiza que el equipo trabaje siempre con la versión más reciente del código y evita conflictos durante el desarrollo colaborativo. 
  ```bash
  git push origin "Rama"
  git pull origin "Rama"
<p align="center">
  <img src="./screenshots/gitPush.jpeg" alt="Descripción"/>
  <img src="./screenshots/gitPull.jpeg" alt="Descripción"/>
</p>

- En Git, una rama (branch) es una línea de desarrollo independiente dentro de un repositorio. Usando el comando branch se pueden crear ramas nuevas. Además, Con el comando switch se puede cambiar de una rama a otra fácilmente. También, utilizamos --no-merged para visualizar las ramas no unidas al main. Por ultimo, checkout -b seria otra opción para crear y cambiar a la rama nueva, evitando usar dos lineas como branch y switch. 
  ```bash
  git branch "Rama"
  git switch "Rama"
  git branch --no-merged
  git branch -d "Rama"
  git checkout -b "Rama"
<p align="center">
  <img src="./screenshots/RamaFuncionalidad.jpeg" alt="Descripción"/>
</p>

- En Git, reflog guarda un registro de todos los movimientos en el repositorio, incluso los que no aparecen en el historial de commits, y sirve para recuperar cambios perdidos. Por otro lado, git merge se usa para combinar el trabajo de una rama con otra, uniendo sus cambios en una sola línea de desarrollo
  ```bash
  git reflog
  git merge "Rama"
<p align="center">
  <img src="./screenshots/Conflict1.jpeg" alt="Descripción"/>
</p>

- En Git, un tag es una etiqueta que se utiliza para marcar versiones específicas del proyecto (por ejemplo: una versión estable o una actualización importante). Sirven para identificar puntos clave en el historial (como v1.0.0, v1.1.0, etc.) Los tags son muy útiles al momento de publicar versiones o mantener un registro del progreso del desarrollo.
  ```bash
  git tag -a v1.0.0 -m "Primera versión estable del proyecto"
  git push origin v1.0.0
  git tag
<p align="center">
  <img src="./screenshots/Tags.png" alt="Descripción"/>
</p>

### Pull Request/Merge Request:
Un Pull Request es una solicitud que haces en plataformas como GitHub o GitLab para pedir que los cambios de tu rama se integren en otra (normalmente en main o develop).
Un Merge Request es lo mismo que un Pull Request, pero con el nombre usado en GitLab. Utilizamos Pull Request para pedir un merge de los cambios realizados en una rama hacia el Main, todos los colaboradores pueden verificar y confirmar el Merge.
<p align="center">
  <img src="./screenshots/Request1.jpeg" alt="Descripción"/>
  <img src="./screenshots/Request2.jpeg" alt="Descripción"/>  
  <img src="./screenshots/Request3.jpeg" alt="Descripción"/>
  <img src="./screenshots/Request4.jpeg" alt="Descripción"/>
</p>

 ---

### Resolución de problemas: 
Durante el desarrollo, surgió un conflicto de merge porque dos ramas diferentes habían modificado el archivo README.md en las mismas secciones.
- En una rama, se habían agregado instrucciones con la ruta del repositorio MaryenAguilar/Herramientas-De-Desarrollo.
- En la otra, se usaba el repositorio nayy123/JoyeriaMarly-App y nombres de carpetas distintas para el frontend.
Al intentar unir ambas ramas con git merge, Git detectó que no podía decidir automáticamente qué cambios mantener, por lo que marcó las líneas en conflicto dentro del archivo.
Solución:
1. Se revisaron manualmente las diferencias en el archivo marcado por Git.
2. Se eligieron y combinaron las partes correctas de cada versión (repositorio, carpetas y credenciales).
3. Finalmente, se guardó el archivo corregido, se usó:
  git add README.md
  git commit
para confirmar la resolución.
De esta forma, el repositorio quedó actualizado y sin conflictos, manteniendo una sola versión consolidada del README.md.
<p align="center">
  <img src="./screenshots/Conflict2.jpeg" alt="Descripción"/>
  <img src="./screenshots/Conflict3.jpeg" alt="Descripción"/>  
</p>

---

### Historial de puntos de control: 
En Git, los puntos de control o checkpoints son todos los commits realizados hasta el momento.
<p align="center">
  <img src="./screenshots/PuntosDeControl.jpeg" alt="Descripción"/>
</p>

### Historial de HEAD:
En Git, la cabecera o HEAD es un puntero especial que indica en qué commit estás trabajando actualmente.

<p align="center">
  <img src="./screenshots/Cabeceras.jpeg" alt="Descripción"/>
</p>

---

### Creación y configuración de Forks:

#### >> ¿Para que sirve el Fork?
Con un fork, se crea una copia completa del repositorio original en tu cuenta personal de GitHub. 
Esto permite hacer modificaciones sin afectar directamente el proyecto principal. 
Una vez que se hayan hecho los cambios y probado en tu fork, se puede crear un Pull Request para proponer esos cambios al repositorio original.
  
#### >> ¿Cómo se crea?
  1. Entra al repositorio original en GitHub y haz clic en el botón "Fork"
<p align="center">
  <img src="./screenshots/BtnFork.png" alt="Descripción"/>
</p>
  
  2. Elige tu cuenta personal para alojar la copia del repositorio
<p align="center">
  <img src="./screenshots/CreateFork.png" alt="Descripción"/>
</p>

  3. Luego clona tu fork a tu máquina local con: 
  ```bash
  git clone https://github.com/tuusuario/Herramientas-De-Desarrollo.git  
  ```

#### >> Visualización de Forks del Trabajo
<p align="center">
  <img src="./screenshots/Fork.png" alt="Descripción"/>
</p>
  
#### >> ¿Para que sirve el Upstream?
Sirve para sincronizar tu fork con el proyecto principal, de modo que tengas los últimos commits o actualizaciones.
Así puedes contribuir con la versión más reciente y evitar conflictos.

#### >> ¿Cómo funciona el Upstream en la práctica?

1. Ver tus repositorios remotos:
```bash
git remote -v
```
Te mostrará algo como:
```bash
origin    https://github.com/tuusuario/mi-fork.git (fetch)
upstream  https://github.com/MaryenAguilar/Herramientas-De-Desarrollo.git (fetch)
```

2. Obtener los cambios del original:
```bash
git fetch upstream
```

Esto descarga los commits nuevos del repositorio principal (no los mezcla todavía).

3. Actualizar tu rama:
```bash
git checkout develop
git merge upstream/develop
```
Ahora tu rama local develop tiene los últimos cambios del proyecto original.

4. Subirlos a tu fork de tu cuenta:
```bash
git push origin develop
```

---

### Creación de Issues, Milestones y Tableros de proyecto:

Usamos los Issues para:
- Errores o bugs
- Nuevas funcionalidades
- Mejoras o tareas pendientes

Cada Issue puede tener: 
- Un título y descripción
- Etiquetas (labels)
- Asignados (personas responsables)
- Comentarios y referencias a commits o pull requests

![Issue](./screenshots/Issue.jpeg)

Un Milestone agrupa varios Issues relacionados bajo un objetivo o entrega concreta.
Sirve para organizar el trabajo por versiones, fases o entregas.

Ejemplos:
Milestone Release v1.0”

Issue #2: Crear Repositorios

Issue #3: Crear Mappers

Issue #4: Crear Controlador

![Milestones](./screenshots/Milestones.jpeg)
![Milestones](./screenshots/Milestones2.jpeg)

Un tablero de proyectos sirver para organizar Issues y Pull Requests en columnas (por ejemplo, “Por hacer”, “En progreso”, “Hecho”).
Ayuda a planificar, priorizar y hacer seguimiento del flujo de trabajo.

![Tableros](./screenshots/Tableros.jpeg)
![Tableros](./screenshots/Tableros2.jpeg)

---

# Estructura del trabajo

![Estructura](./screenshots/EstructuraProy.png)

---

# 🛠️ Gestión de Incidencias (Issues)

La gestión de incidencias en GitHub permite organizar, reportar y resolver problemas o mejoras del proyecto.  
Cada **Issue** puede representar:

- Un bug detectado  
- Una nueva funcionalidad  
- Una tarea pendiente  
- Una mejora en el sistema  
- Documentación por actualizar  

Esto ayuda a mantener el proyecto ordenado y al equipo alineado sobre qué debe hacerse y quién es responsable.

## 🔖 Labels utilizados

#### 🟥 `hotfix`
Se usa para identificar **errores urgentes** que deben corregirse de inmediato.  
Normalmente se aplica cuando:

- El fallo afecta funcionalidades críticas  
- Se necesita un parche rápido  
- Bloquea directamente el uso del sistema  

Un *hotfix* generalmente se resuelve en su propia rama y se integra cuanto antes.

#### 🔥 `critical`
Marca incidencias con **impacto severo** en el funcionamiento del sistema.  
Se aplica cuando:

- La aplicación deja de funcionar  
- Hay vulnerabilidades graves  
- El error afecta datos o procesos esenciales  
- Se detiene completamente el funcionamiento normal  

Estas incidencias tienen prioridad máxima.

#### ✨ `enhancement`
Se usa para **mejoras o nuevas funcionalidades** que no son críticas.  
Por ejemplo:

- Agregar un nuevo filtro en el catálogo  
- Mejorar la experiencia de usuario  
- Optimizar tiempos de carga  

#### 🐞 `bug`
Indica **un error en el sistema** que debe solucionarse.  
Puede ser de baja, media o alta prioridad según el impacto.

#### 📚 `documentation`
Se aplica a incidencias relacionadas con **documentación del proyecto**:  

- README.md  
- Guías de instalación  
- Comentarios de código  


## 📝 Draft Pull Request

Un **Draft Pull Request** es un Pull Request en estado de borrador.  

![convertdraff](./screenshots/convertdraff.png)

Se utiliza cuando:

- El cambio aún no está terminado  
- Solo se quiere mostrar un avance
- Se necesita feedback temprano del equipo  
- No está listo para combinarse (merge)  

Cuando el código está completo, se cambia el estado a **“Ready for review”**.

![draftpullrq](./screenshots/draftpullrq.png)

---

# ⭐ Integración Continua (CI)

 La **Integración Continua (CI)** es una práctica donde los miembros del equipo suben sus cambios al repositorio y automáticamente se ejecutan procesos que verifican que el código funciona correctamente.

## Procesos automáticos del CI

- **Compilación del proyecto**
- **Ejecución de pruebas**
- **Análisis de calidad del código**
- **Validación de dependencias**
- **Detección temprana de errores e incompatibilidades**

El objetivo es evitar problemas cuando varias personas trabajan en el mismo proyecto y suben cambios sin coordinación.

## 1️⃣ Configuración del Workflow (`ci.yml`)

El workflow está definido en el archivo **`ci.yml`**, que se ejecuta automáticamente cuando hay cambios en la rama **`main`**.

### El flujo incluye:

1. Checkout del repositorio  
2. Configuración de Node.js  
3. Instalación de dependencias  
4. Ejecución de pruebas automatizadas  
5. Reporte del estado final (éxito o error)

![Pipeline](./screenshots/Pipeline.png)

Este pipeline garantiza que la rama principal siempre tenga una versión estable.

## 2️⃣ Trigger del CI: ¿Por qué se ejecuta en `main`?

El CI se ejecuta solo cuando hay actualizaciones en `main`.

**Razones:**

- Reduce ejecuciones innecesarias
- Solo prueba código ya revisado
- Mantiene `main` siempre estable
- Evita ruido en los pipelines

Cada actualización a `main` activa automáticamente `ci.yml`.

![triggerCI](./screenshots/triggerCI.png)


## 3️⃣ Qué valida nuestro CI

El CI ejecuta pruebas unitarias con ***Jest*** enfocadas en la lógica de reclamos dentro del Workflow, validando 4 estados:

- **Pendiente**
- **En proceso**
- **Resuelto**
- **Cancelado**

Se crearon dos carpetas de pruebas enfocadas en reclamos.

![carppruebas](./screenshots/carppruebas.png)

El test que se realizo fue en base a 4 estados del reclamo.

![testReclamo](./screenshots/testReclamo.png)

Esta es la función del segundo archivo que se encuentra en la carpeta Utils.

![funcionUtils](./screenshots/funcionUtils.png)

### El CI verifica:

- Transiciones correctas entre estados  
- Manipulación adecuada de datos  

Si una prueba falla:

- ❌ El flujo se detiene  
- ❌ Marca la ejecución en rojo  
- ❌ Indica dónde ocurrió el error  

Esto evita que errores lleguen a producción.

## 4️⃣ Interpretación en GitHub Actions

En la pestaña **Actions** se puede ver el estado de cada ejecución:

- ✔️ **Verde:** todas las pruebas pasaron  
- ❌ **Rojo:** error en pruebas o flujo  

Aquí también se visualizan los logs y resultados de los tests.

![resultActions](./screenshots/resultActions.png)

## 5️⃣ Beneficios del CI en el equipo

- Detección temprana de errores  
- Menor riesgo de romper funcionalidades  
- Ahorro de tiempo en revisiones  
- Seguridad antes del despliegue (CD)  
- Estabilidad continua en `main`  
- Mejor coordinación entre integrantes  


## 6️⃣ Relación del CI con el CD

El proceso completo funciona así:

1. **CI valida** que el código en `main` sea estable.  
2. Si todo está correcto, continúa el **CD**.  
3. Render despliega automáticamente cuando se hace **merge** a `main`.

**Resumen:**  
👉 CI = calidad  
👉 CD = entrega automática


---

# 🛠️ Despliegue Continuo (CD)

![Status](https://img.shields.io/badge/Status-Production-success)
![Platform](https://img.shields.io/badge/Platform-Render-blueviolet)
![Deploy](https://img.shields.io/badge/Auto--Deploy-Enabled-brightgreen)

Es una práctica donde el despliegue de una aplicación sucede **automáticamente** cada vez que el código es actualizado y aprobado en el repositorio.
* No se hacen despliegues manuales.
* Cada cambio confirmado en la rama principal se **envía directamente a producción**.
* El servidor o plataforma ejecuta por sí mismo los pasos necesarios para actualizar la aplicación.

### 🔖 Implementación

**Plataforma:** Render (Static Site)

**Repositorio conectado:**
- GitHub → Render
- Rama de despliegue: `main`

**Configuración de Build:**
```bash
npm install && npm run build
```

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `build` (carpeta con archivos compilados)

**URL de producción:** https://herramientas-de-desarrollo.onrender.com

### 📸 Configuración en Render

#### 1. Creación del servicio estático
![Configuración inicial](./screenshots/render1.jpeg)
*Se selecciona "Static Site", se conecta el repositorio y se elige la rama `main`*

#### 2. Comandos de construcción
![Build settings](./screenshots/render2.jpeg)
*Se configuran los comandos para instalar dependencias y generar el build*

#### 3. Deploy Hook (automatización)
![Deploy Hook](./screenshots/render3.jpeg)
*Webhook configurado en GitHub para despliegues automáticos*

### 🔄 Flujo de Despliegue Automático

> [!NOTE]
> Este proceso es completamente automático y toma aproximadamente 2-3 minutos.
```diff
+ 1. Desarrollador hace push a la rama main
+               ↓
+ 2. GitHub detecta el cambio
+               ↓
+ 3. Se activa el Deploy Hook (webhook)
+               ↓
+ 4. Render recibe la notificación automáticamente
+               ↓
+ 5. Render ejecuta: npm install && npm run build
+               ↓
+ 6. Los archivos de la carpeta /build se publican
+               ↓
+ 7. Aplicación actualizada en producción
```

### ⚙️ Secretos y Variables de Entorno

> [!WARNING]
> Nunca expongas públicamente los Deploy Hooks

En GitHub se configuró el secret:
- `RENDER_DEPLOY_HOOK_URL`: URL del webhook para activar despliegues

![GitHub Secrets](./screenshots/render4.jpeg)
 
### ✅ Ventajas de este enfoque

- **Rapidez:** Los cambios llegan a producción en minutos
- **Automatización:** No hay intervención manual
- **Consistencia:** Mismo proceso en cada despliegue
- **Rastreabilidad:** Cada deploy está asociado a un commit específico

---

# 🖼️ Capturas de Pantalla

### 🏠 Pantalla Principal
![Index](./screenshots/paginaprincipal.png)
---

### Página Login
![Login](./screenshots/paginalogin.jpeg)
---

### Página Registro
![Login](./screenshots/paginaregistro.jpeg)
---

### 🛍️ Lista de Productos
![Productos](./screenshots/paginaproductos.png)
---

### Página de Nosotros
![Nosotros](./screenshots/paginaabout.png)
---

### Página de Reclamos/Términos y condiciones
![Reclamos](./screenshots/paginareclamos.png)
![TYC](./screenshots/paginatyc.png)
---