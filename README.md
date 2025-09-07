# 📌 ToDo App

Aplicación web de lista de tareas desarrollada en **React** con **Tailwind CSS**. Permite agregar, completar, filtrar y eliminar tareas de forma sencilla con una interfaz moderna y responsiva.  

## ✨ Características

- ➕ **Agregar nuevas tareas** desde el input con tecla Enter.  
- ✅ **Marcar como completada** o reactivar una tarea con un clic.  
- ❌ **Eliminar tareas** individualmente.  
- 🧹 **Limpiar todas las tareas completadas** de una vez.  
- 🔎 **Filtros disponibles**:  
  - Todas  
  - Activas  
  - Completadas  
- 🎨 Estilos personalizados con **Tailwind CSS**, scroll minimalista y tipografía moderna.  

## 📂 Estructura del Proyecto

```
src/
├── App.jsx                  # Componente principal con lógica de estado y filtros
├── index.css                # Estilos base con Tailwind y personalización
├── components/
│   ├── Title/Title.jsx       # Título de la aplicación
│   ├── Input/Input.jsx       # Input para agregar tareas
│   ├── Todo/Todo.jsx         # Representación individual de una tarea
│   ├── TodoList/TodoList.jsx # Lista de tareas y renderizado de filtros
│   ├── TodoFilters/
│   │   ├── TodoFilters.jsx          # Contenedor de filtros
│   │   └── TodoFilters.components.js # Botones y contenedores auxiliares
└── assets/
    ├── checkList.svg         # Icono de tarea completada
    └── delete.svg            # Icono de eliminación
```

## ⚙️ Instalación y Uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/todo-app.git
   cd todo-app
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```
   http://localhost:5173
   ```

## 🛠️ Tecnologías Utilizadas

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  

## 📸 Vista Previa

![Preview](./preview.png)

## 📜 Licencia

Este proyecto es de uso libre bajo la licencia MIT.  

## 👨‍💻 Autor

- Jonathan Cañola Salazar  
