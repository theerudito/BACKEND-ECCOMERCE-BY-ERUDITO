import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@jorge.mxijl.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const conection = mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("CONECTADO A LA BASE DE DATOS MONGO DB"))
  .catch((error) => console.error(error));

export default conection;
