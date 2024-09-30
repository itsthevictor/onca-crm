// import modules
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";

// init dotenv & setup app
dotenv.config();
const app = express();

// import middleware & routes

// set routes

// set spin-up function
const PORT = process.env.PORT || 8080;

// start server
const start = () => {
  try {
    // await connect db

    // app listen
    app.listen(PORT, () =>
      console.log(`server is listening on port ${PORT} ...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
