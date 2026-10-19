# Taskflow API — RESTful Task Management System

A RESTful Task Management API built using **Node.js, Express.js, PostgreSQL, and Docker**. Taskflow provides a backend foundation for managing tasks through HTTP endpoints, with authentication, request validation, and centralized error handling.

## Features

- **RESTful API:** Organized endpoints for task management.
- **User Authentication:** Authentication routes for user registration and login.
- **Protected Routes:** Authentication middleware to restrict access to authorized users.
- **PostgreSQL Database:** Relational database for persistent data storage.
- **Request Validation:** Middleware to validate task-related requests.
- **Centralized Error Handling:** Consistent handling of application errors.
- **Request Logging:** Middleware for logging incoming requests.
- **Docker Support:** Docker Compose configuration for the development environment.
- **API Testing:** Endpoints can be tested using Postman.

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| PostgreSQL | Relational database |
| Docker | Containerized development environment |
| JavaScript | Application logic |
| SQL | Database schema and queries |
| Postman | API testing |
| Git & GitHub | Version control and source code hosting |

## Project Structure

```text
taskflow-api/
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── db/
│   ├── db.js
│   └── schema.sql
├── middleware/
│   ├── auth.js
│   ├── errorHandlers.js
│   ├── logger.js
│   └── taskValidation.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── .gitignore
├── docker-compose.yml
├── package.json
├── package-lock.json
└── server.js
```

### Folder and File Responsibilities

- **controllers/** — Contains the logic for authentication and task-related operations.
- **db/** — Contains the database connection configuration and SQL schema.
- **middleware/** — Handles authentication, request logging, task validation, and error handling.
- **routes/** — Defines the API routes and connects them to the appropriate controllers.
- **server.js** — Application entry point responsible for configuring and starting the Express server.
- **docker-compose.yml** — Defines the Docker services used by the project.
- **package.json** — Contains project metadata, dependencies, and npm scripts.
- **.gitignore** — Prevents sensitive and unnecessary files from being committed.

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Postman](https://www.postman.com/) for API testing

### 1. Clone the Repository

```bash
git clone https://github.com/Adityatiwary11/taskflow-api.git
cd taskflow-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root. Add the variables required by your database connection and server configuration.

Example template — replace the names and values with those expected by your application:

```dotenv
PORT=3000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=replace_with_a_strong_random_secret
```

**Important:** The variable names above are examples. Check `db/db.js`, `server.js`, and your authentication controller to confirm the exact variables your application expects.

Never commit your real `.env` file, database credentials, or JWT secret to GitHub.

### 4. Start the Database

If your `docker-compose.yml` defines the PostgreSQL service, start it using:

```bash
docker compose up -d
```

Check the configured service and port mappings in your Compose file. Ensure your application can connect to the database.

### 5. Initialize the Database Schema

If the schema has not already been applied automatically, execute `db/schema.sql` against the configured PostgreSQL database using your preferred PostgreSQL client.

Ensure the database and required tables exist before starting the API.

### 6. Start the Server

Use the start script defined in `package.json`. For example, if the project has a `start` script:

```bash
npm start
```

If your project uses a different script, run the corresponding command instead.

The server is expected to be accessible at `http://localhost:3000` when configured to use port 3000.

## API Overview

The application organizes its endpoints into authentication and task management routes.

### Authentication

Authentication routes are defined in `routes/authRoutes.js`, with their implementation in `controllers/authController.js`.

Typical operations include:

- Registering a user.
- Logging in a user.
- Obtaining authentication credentials, if implemented by the application.

### Task Management

Task routes are defined in `routes/taskRoutes.js`, with their implementation in `controllers/taskController.js`.

The task API is designed to handle task-related operations. Consult the route definitions for the exact endpoints and supported HTTP methods.

### Authentication and Protected Endpoints

Protected endpoints use authentication middleware to verify incoming requests. If an endpoint requires authentication, send the credentials in the format expected by the application.

For a Bearer-token implementation, the request header generally looks like:

```http
Authorization: Bearer YOUR_TOKEN
```

Replace `YOUR_TOKEN` with a valid token issued by your application's authentication flow.

### Testing with Postman

1. Start the API and database.
2. Register a user using the configured registration endpoint.
3. Log in using the configured login endpoint.
4. Obtain the required authentication token, if applicable.
5. Send requests to the task endpoints.
6. Test successful responses, validation failures, missing credentials, and invalid requests.

Use the actual endpoint paths and request bodies defined in your route files and controllers.

## Error Handling and Validation

Taskflow includes middleware for:

- Validating task-related requests.
- Authenticating protected requests.
- Logging incoming requests.
- Handling application errors centrally.

These components help keep route definitions organized and make the API easier to maintain and debug.

## Security Considerations

- Keep `.env` out of version control.
- Use strong, unique secrets for authentication.
- Never publish real database passwords or private credentials.
- Validate incoming request data.
- Protect routes that require authentication.
- Use appropriate error messages without exposing sensitive internal details.

## Future Improvements

Potential enhancements include:

- Automated unit and integration tests.
- API documentation using Swagger/OpenAPI.
- Pagination, filtering, and sorting for tasks.
- Role-based access control.
- Continuous integration with GitHub Actions.
- Production deployment with secure environment configuration.

## Author

**Aditya Tiwary**

Computer Science & Engineering Student

GitHub: [@Adityatiwary11](https://github.com/Adityatiwary11)

---

*Taskflow API is a learning and portfolio project focused on backend development, RESTful API design, authentication, relational databases, and containerized development.*
