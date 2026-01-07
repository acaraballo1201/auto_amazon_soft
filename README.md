# 🧪 Automatización Web – Amazon  
### Playwright + Cucumber + Screenplay (JavaScript)

Framework de automatización web basado en el **patrón Screenplay**, utilizando **Playwright** como motor de automatización y **Cucumber** para pruebas BDD en español.

Este proyecto automatiza escenarios de compra en Amazon, con y sin autenticación, e incluye **reportería HTML con screenshots embebidos**, similar a Serenity.

---

## 📌 Tecnologías utilizadas

- **Node.js**
- **Playwright**
- **Cucumber (BDD)**
- **JavaScript**
- **Patrón Screenplay**
- **multiple-cucumber-html-reporter**

---

## 📂 Estructura del proyecto

co.com.auto_amazon.certificacion
│
├── src
│ ├── main
│ │ ├── abilities # Habilidades del actor (BrowseTheWeb)
│ │ ├── tasks # Tasks Screenplay (OpenUrl, BuscarArticulo, etc.)
│ │ ├── questions # Validaciones (Questions)
│ │ ├── userInterfaces # Page Objects (locators)
│ │ └── utils # Actor, enums, helpers
│ │
│ ├── tests
│ │ ├── features # Features Cucumber (.feature)
│ │ ├── stepDefinitions # Step Definitions
│ │ └── supports # hooks.js, world.js
│ │
│ └── reports
│ ├── screenshots # Screenshots por step y escenario
│ └── html # Reporte HTML generado
│
├── package.json
├── .gitignore
└── README.md


---

## 🧠 Patrón Screenplay

El framework sigue estrictamente el patrón **Screenplay**:

- **Actor**: representa al usuario
- **Abilities**: lo que el actor puede hacer (ej. navegar)
- **Tasks**: acciones de alto nivel (buscar, seleccionar, agregar al carrito)
- **Questions**: validaciones del estado de la aplicación
- **UserInterfaces**: localizadores desacoplados del flujo

Esto permite:
- Reutilización
- Alta legibilidad
- Escalabilidad
- Bajo acoplamiento

---

## 📝 Escenarios soportados

- ✅ Añadir productos al carrito **sin login**
- ✅ Añadir productos al carrito **con login**
- 📸 Capturas automáticas por step
- 🧾 Reporte HTML con evidencias embebidas

---

## ▶️ Instalación

### 1️⃣ Requisitos
- Node.js **v18+** o **v20+**
- Git

### 2️⃣ Clonar el repositorio
```bash
git clone https://github.com/USUARIO/REPOSITORIO.git
cd co.com.auto_amazon.certificacion

// Instalar dependencias
npm install


// Ejecutar todos los escenarios
npm run test:bdd:report

//Ejecutar por tag
npx cucumber-js --tags "@sin_login"

### Para generar el reporte HTML, siempre usar
npm run test:bdd:report

// Ubicación del reporte HTML
src/reports/html/

### Screenshots

Se toman automáticamente por cada step
Se adjuntan al reporte HTML
Se guardan en:

src/reports/screenshots/
