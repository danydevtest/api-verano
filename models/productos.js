import mongoose,{Schema} from "mongoose";

const productos=new Schema({
    nombre:String,
    precio:Number,
    cantidad:Number,
    createdArt:{type:Date, default:Date.now}
});

const Producto=mongoose.model('productos',productos);
export default Producto;