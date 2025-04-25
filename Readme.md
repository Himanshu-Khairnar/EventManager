# 🌐 EventNest – Full Stack Event Manager

EventNest is a full stack event manager platform where users can:

- View upcoming events
- Register/Login
- Create, update, and delete their own events
- RSVP to events created by others
- View the list of attendees


---

## 🚀 Tech Stack

### Frontend:

- React
- Tailwind CSS
- Axios
- React Router DOM

### Backend:

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)

---

## 📂 Folder Structure

### `client/` (React)

```bash
client/
│
├── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Page-level components (Home, EventDetails, Login, etc.)
│   ├── services/           # Axios API calls
│   ├── context/            # Auth and global context
│   ├── App.jsx
│   └── main.jsx
└── tailwind.config.js

```

### `server/` (Node.js + Express)

```bash
Server/
├── node_modules/
├── src/
│   ├── controller/      # All request handlers (functions for routes)
│   ├── middlewares/     # Middlewares (auth check, error handler, etc.)
│   ├── models/          # Mongoose models (User, Event)
│   ├── routes/          # API route files (auth routes, event routes)
│   ├── app.js           # Main app setup (middleware, routes)
│   └── index.js         # Server entry point (connect DB, start server)
├── .env
├── .gitignore
├── package-lock.json
├── package.json

```

---

## 🔧 How to Run the Project

```bash
npm run dev
```

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/eventnest.git
cd eventnest
```
### 📚 Documentation
For detailed flow, database design, and project planning, check the Notion documentation:

👉 [Notion Link – Eventsy Project](https://www.notion.so/Eventsy-1e0234c7094580c0a2eee06dbf1f8032?pvs=4)
