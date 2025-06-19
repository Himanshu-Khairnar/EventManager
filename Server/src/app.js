import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

/// this for V1 of eventManagement
//routes import
import userRouter from "./routes/user.routes.js";
import eventRouter from "./routes/event.routes.js";
import revenueRouter from "./routes/revenue.routes.js";
import registrationRouter from "./routes/registration.routes.js";
import testimonialRouter from "./routes/testimonial.routes.js";
import reviewRouter from "./routes/review.routes.js";
const baseUrl = "/api/v1/";

//routes declaration
app.use(`${baseUrl}users`, userRouter);
app.use(`${baseUrl}events`, eventRouter);
app.use(`${baseUrl}revenue`, revenueRouter);
app.use(`${baseUrl}registration`, registrationRouter);
app.use(`${baseUrl}testimonial`, testimonialRouter);
app.use(`${baseUrl}review`, reviewRouter);

export { app };
