import express from "express";
import router from "./routes/router.js";
import cors from "cors";
import sqlite3 from "sqlite3";
import database from "./database.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

async function startApp() {
  try {  

    app.listen(PORT, () => console.log("Server started on port " + PORT));
  } catch (e) {
    console.log(e);
  }
}
startApp();
