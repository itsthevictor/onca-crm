// import modules
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";

// init dotenv & setup app
dotenv.config();
const app = express();

// import middleware & routes
import authRouter from "./routes/authRouter.js";

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRouter);

// set spin-up function
const PORT = process.env.PORT || 8080;

// start server
const start = async () => {
  try {
    // await connect db
    await connectDB(process.env.MONGO_URI);
    // app listen
    app.listen(PORT, () =>
      console.log(`server is listening on port ${PORT} ...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();