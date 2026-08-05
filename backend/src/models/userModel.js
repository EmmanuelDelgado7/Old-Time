import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        default: "Emmanuel Rodríguez"
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        default: "emmanuel@gmail.com"
    },
    password: {
        type: String,
        required: true,
        default: "123456"
    },
    rol: {
        type: String,
        enum: ["admin", "usuario"],
        default: "usuario"
    }
});

export default mongoose.model("Usuario", userSchema);