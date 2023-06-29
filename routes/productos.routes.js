import routerx from "express-promise-router";
import productosController from "../controllers/productos.controller";

const router=routerx();

//rutas para el controlador producto
router.post('/guardarProducto',productosController.addProduct);
router.get("/consultarProducto",productosController.consultarProducto);

export default router;