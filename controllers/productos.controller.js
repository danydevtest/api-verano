import models from "../models";
import Models from "../models";

export default{
    addProduct: async (req,res,next)=>{

        try {

            const{nombre,precio,cantidad}=req.body;

            const agregarProducto=new Models.Producto({
                nombre,
                precio,
                cantidad
            });
    
            const agregarP= await agregarProducto.save();
            res.status(200).json(agregarP);
            console.log(req.body);
            
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error al guardar en la BD"
            });
            next(error);
        }
       
    },

    consultarProducto: async(req,res,next)=>{
        try {
            const consultarProd= await Models.Producto.find();
            res.json(consultarProd);
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al consultar"
            });
            next(error);
        }
    }
}