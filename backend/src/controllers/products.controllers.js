import { postProduct } from "../controllers/products.controllers.js";
import { getProduct } from "../controllers/products.controllers.js";
import { putProductById } from "../controllers/products.controllers.js";
import { deleteProductById } from "../controllers/products.controllers.js";
import express from "express";

// 1. Configurar el router
export const productsRouter = express.Router();

// 2. Crear las rutas por cada controlador
productsRouter.post('/crear', postProduct);
productsRouter.get('/mostrar', getProduct);
productsRouter.put('/actualizar/:id', putProductById);
productsRouter.delete('/eliminar/:id', deleteProductById);