import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import socketIo from "socket.io"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Event Management Backend");
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const io = socketIo(server, {
  cors: {
    origin: "*", 
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});


//routes
import authRoutes from "./routes/user.routes"
import eventRoutes from "./routes/event.routes"
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
