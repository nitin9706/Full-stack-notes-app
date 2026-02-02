# Full-stack Notes App

A full-stack note taking application built with **React**, **Express.js**, **MySQL**, and fully **Dockerized** for easy development and deployment.

---

## 🧠 Features

- Create, Read, Update, and Delete (CRUD) notes
- Modern React frontend with intuitive UI
- Express.js backend REST API
- Persistent storage using MySQL
- Docker configuration for frontend, backend, and database
- Environment variable support

---

## 🛠️ Tech Stack

| Layer            | Technology              |
| ---------------- | ----------------------- |
| Frontend         | React                   |
| Backend          | Node.js + Express       |
| Database         | MySQL                   |
| Containerization | Docker & Docker Compose |

---

## 🚀 Getting Started

### 📥 Clone Repository

```bash
git clone https://github.com/nitin9706/Full-stack-notes-app.git
cd Full-stack-notes-app
```

---

## ⚙️ Prerequisites

- Docker
- Docker Compose

---

## 🐳 Run with Docker

```bash
docker compose up --build
```

- Frontend → http://localhost:5174
- Backend → http://localhost:4000

---

## 🗂️ Environment Variables

### Backend `.env`

```
PORT=4000
DB_HOST=db
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=notes_app
```

### Frontend `.env`

```
REACT_APP_API_URL=http://localhost:5174
```

---

## 🧩 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/notes     | Get all notes |
| POST   | /api/notes     | Create note   |
| PUT    | /api/notes/:id | Update note   |
| DELETE | /api/notes/:id | Delete note   |

---

## 📄 License

MIT License
