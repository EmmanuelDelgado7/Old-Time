import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        default: "Seiko 5 Automatic"
    },
    marca: {
        type: String,
        required: true,
        default: "Seiko"
    },
    categoria: {
        type: String,
        enum: ["Reloj", "Correa", "Accesorio"],
        default: "Reloj"
    },
    descripcion: {
        type: String,
        required: true,
        default: "Reloj automático clásico de colección."
    },
    precio: {
        type: Number,
        required: true,
        default: 950000
    },
    stock: {
        type: Number,
        default: 5
    },
    imagen: {
        type: String,
        default: "https://oldtime.com/img/seiko5.jpg"
    },
    disponible: {
        type: Boolean,
        default: true
    }
});

export default mongoose.model("Producto", productSchema);