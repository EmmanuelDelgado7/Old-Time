import { postProduct } from "../controllers/products.controllers";
import { getProduct } from "../controllers/products.controllers";
import { putProductById } from "../controllers/products.controllers";
import { deleteProductById } from "../controllers/products.controllers";
import express from "express";

// Configurar el router
export const productsRouter = express.Router();

// Crear las rutas
productsRouter.post("/crear", postProduct);
productsRouter.get("/mostrar", getProduct);
productsRouter.put("/actualizar/:id", putProductById);
productsRouter.delete("/eliminar/:id", deleteProductById);