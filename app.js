import express from "express";
import cors from "cors";
const app = express();
import conection from "./DataBase/db.js";
import Computers from "./Router/Routes.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/computers", Computers);

app.get("/", (req, res) => {
  res.send("Hola Perro");
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log("SERVIDOR A SU SERVICIO EN EL PUERTO", port)
);
