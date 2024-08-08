# CRUDD TASKS BACKEND

API para gestionar tareas usando Node.js, Express y MySQL.

## Tecnologías

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para Node.js.
- **MySQL**: Base de datos relacional.
- **mysql2**: Conector para MySQL.
- **express-validator**: Para validar datos.

## Instalación

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/13024RDO/crud-tasks-backend.git
    ```

2. **Navega al directorio del proyecto:**

    ```bash
    cd crud-tasks-backend
    ```

3. **Instala las dependencias:**

    ```bash
    npm install
    ```

4. **Configura la base de datos MySQL:**

    - Crea una base de datos llamada `tasks_db`:

      ```sql
      CREATE DATABASE tasks_db;
      ```

    - Crea una tabla `tasks`:

      ```sql
      CREATE TABLE tasks (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT,
          isComplete BOOLEAN DEFAULT FALSE
      );
      ```

## Rutas API

- **POST /tasks**: Añade una nueva tarea.
  - **Cuerpo de la solicitud:**
    ```json
    {
      "title": "Título de la tarea",
      "description": "Descripción de la tarea"
    }
    ```
  - **Respuestas:**
    - **201 Created**: Tarea creada.
    - **400 Bad Request**: Error en los datos.

- **GET /tasks**: Obtiene todas las tareas.
  - **Respuesta:**
    - **200 OK**: Lista de tareas en JSON.

- **GET /tasks/:id**: Obtiene una tarea por ID.
  - **Respuesta:**
    - **200 OK**: Datos de la tarea.
    - **404 Not Found**: Tarea no encontrada.

- **PUT /tasks/:id**: Actualiza una tarea por ID.
  - **Cuerpo de la solicitud:**
    ```json
    {
      "title": "Nuevo título",
      "description": "Nueva descripción"
    }
    ```
  - **Respuestas:**
    - **200 OK**: Tarea actualizada.
    - **404 Not Found**: Tarea no encontrada.
    - **400 Bad Request**: Error en los datos.

- **DELETE /tasks/:id**: Elimina una tarea por ID.
  - **Respuesta:**
    - **200 OK**: Tarea eliminada.
    - **404 Not Found**: Tarea no encontrada.

## Ejecución

Inicia el servidor con:

```bash
npm run dev
