# Parcial 2 - Arquitectura de Sistemas

Segundo Parcial (Parte Práctica en React) de la materia **Arquitectura de Sistemas** del Técnico en Desarrollo de Software.

Aplicación de gestión de alumnos desarrollada con **React** y **Vite**, que incluye tabla de registros, barra de búsqueda en tiempo real y formulario para agregar nuevos alumnos.

---

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

---

## Instalación y Puesta en Marcha

### 1. Clonar el repositorio (si aplica)
```bash
git clone https://github.com/elPatronDB/parcial2_Arquitectura_De_Sistemas.git
cd parcial2_Arquitectura_De_Sistemas
```

### 2. Ingresar a la carpeta de la aplicación
> [!IMPORTANT]
> El proyecto React se encuentra alojado dentro del directorio `alumnos-app.parcial2`. Asegúrate de ingresar a dicha carpeta antes de ejecutar comandos npm:

```bash
cd alumnos-app.parcial2
```

### 3. Instalar las dependencias
Ejecuta el siguiente comando para instalar todos los paquetes necesarios (`react`, `react-dom`, `vite`, etc.):

```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo
Inicia el entorno local con Hot Reload (HMR):

```bash
npm run dev
```

Una vez ejecutado, abre en tu navegador la URL que se muestra en la terminal (usualmente `http://localhost:5173`).

---

## 🛠️ Scripts Disponibles

Dentro de la carpeta `alumnos-app.parcial2`:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local en Vite. |
| `npm run build` | Compila y optimiza la aplicación para producción en la carpeta `dist`. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |

---

## 📁 Estructura del Proyecto

```text
parcial2_Arquitectura_De_Sistemas/
├── README.md
└── alumnos-app.parcial2/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── App.jsx             # Componente principal (tabla, buscador y formulario)
        ├── App.css             # Estilos de la aplicación
        ├── index.css           # Estilos base
        ├── main.jsx            # Punto de entrada de React
        └── components/
            └── search/         # Componente de la barra de búsqueda
                ├── search-index.tsx
                └── search-index.module.css
```

---

## ✨ Funcionalidades Implementadas

- **Visualización de Alumnos**: Tabla con ID, Nombre y Curso.
- **Búsqueda en Vivo**: Barra de búsqueda interactiva para filtrar alumnos por nombre.
- **Formulario de Registro**: Campos para ID, Nombre y Curso con validación para agregar nuevos alumnos dinámicamente a la tabla.
- **Diseño Limpio y Ordenado**: Estilos estructurados y responsivos.
