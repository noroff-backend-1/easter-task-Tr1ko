# 🥚 Easter Eggs API

A simple RESTful API built with **Node.js**, **Express**, **Sequelize**, and **MySQL** for managing Easter eggs.
This project demonstrates backend fundamentals including CRUD operations, authentication with JWT, and automated testing.

---

## 🚀 Features

* Express server setup
* MySQL database connection using Sequelize
* CRUD operations for a single entity (Eggs)
* JWT-based authentication
* Protected routes
* Swagger API documentation
* Unit testing with Jest and Supertest

---

## 🗂️ Tech Stack

* Node.js
* Express
* Sequelize
* MySQL
* JWT (jsonwebtoken)
* Jest & Supertest
* Swagger (swagger-ui-express & swagger-autogen)

---

## 📦 Installation

```bash
git clone <your-repo-url>
cd easter-api
npm install
```

---

## ⚙️ Setup

Make sure you have MySQL running locally.

Create a database:

```sql
CREATE DATABASE easter_db;
```

Update your database credentials in `models/index.js` if needed.

---

## ▶️ Run the server

```bash
node server.js
```

Server runs on:

```txt
http://localhost:3000
```

---

## 📄 API Documentation

Swagger UI available at:

```txt
http://localhost:3000/doc
```

---

## 🔐 Authentication

### Login

```http
POST /login
```

Response:

```json
{
  "token": "your_jwt_token"
}
```

Use this token to access protected routes:

```http
Authorization: Bearer <token>
```

---

## 🥚 Endpoints

### Public

* `GET /eggs` → Get all eggs
* `GET /eggs/:id` → Get egg by ID

### Protected (JWT required)

* `POST /eggs` → Create a new egg
* `PUT /eggs/:id` → Update an egg
* `DELETE /eggs/:id` → Delete an egg

---

## 🧪 Testing

Run tests with:

```bash
npm test
```

Tests include:

* GET /eggs
* POST /login
* POST /eggs
* PUT /eggs/:id
* DELETE /eggs/:id
* DELETE non-existing egg

---

## 🧱 Project Structure

```
project/
│── models/        # Sequelize models
│── routes/        # API routes
│── services/      # Business logic
│── middleware/    # Auth middleware
│── tests/         # Jest tests
│── app.js         # Express app setup
│── server.js      # Server entry point
```

---

## 💡 Notes

* No user authentication logic (login always returns a valid JWT)
* Single table (Eggs), no relationships
* Designed for learning and practice

---

## 🏁 Status

✅ Completed
Includes all required features + testing

---

## 👨‍💻 Author

Trym Solheim
