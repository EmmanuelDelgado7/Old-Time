import mongoose from 'mongoose';
export async function connectionMongo() {
    try {
        await mongoose.connect(process.env.URI_MONGO);
        console.log('Conexión exitosa con la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};