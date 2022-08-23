// import { conect } from 'mongoose'
import mongoose, { connect } from 'mongoose'

// Hacemos uso de una función anónima para crear un async global.
(async () => {
        try {
            const DB = await mongoose.connect('mongodb+srv://api_user:XKteRLUYGjibJHOo@cluster0.6gpnf7u.mongodb.net/testDB')
        console.log(`🎆 Servidor conectado 🎇\nNombre: ${DB.connection.name}.`)
    } catch (error) {
        console.log(`\n🔌 Servidor desconectado ❌\n${error}.`);
    }
})()
