import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import usersRoutes from "./routes/usersRoutes.js";
import restaurantsRoutes from "./routes/restaurantsRoutes.js"
import typesRoutes from "./routes/typesRoutes.js"
import commentsRoutes from "./routes/commentsRoutes.js"

dotenv.config();

// const { MONGO_URI } = process.env;

// Conexión BD
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/resenyas_restaurantes');

const app = express();
app.use(express.json());

// Habilitar bodyparser (de esta manera podemos leer "form-data" como "x-www-form-ulrencoded")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/images', express.static('uploads'));

// Habilitar cors
app.use(cors());

// Rutas
app.use("/api", usersRoutes);
app.use("/api", typesRoutes);
app.use("/api", restaurantsRoutes);
app.use("/api", commentsRoutes);

// Puerto
app.listen(8800, () => {
  console.log("Connected!");
});