import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRoutes from "./routers/userRoutes.js";
import posteRoutes from "./routers/posteRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/users", userRoutes);
app.use("/api", posteRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, (req, res) => {
  console.log(`server started at ${PORT} port`);
});
