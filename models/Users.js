import { Schema, model } from 'mongoose'

const UserSchema = Schema({
    nombre: {
        type: String,
        // required: true,
        trim: true
    },
    apellido: {
        type: String,
        // required: true,
        trim: true
    },
    cedula: {
        type: Number,
        // required: true,
        trim: true,
        unique: true
    },
    edad: {
        type: Number,
        // required: true,
        trim: true
    },
    direccion: {
        type: String,
        // required: true,
        trim: true
    },
    correo: {
        type: String,
        // required: true,
        trim: true,
        unique: true
    },
    numero: {
        type: Number,
        // required: true,
        trim: true,
        unique: true
    },
    genero: {
        type: String,
        // required: true,
        trim: true,
        unique: false
    },
    estado: {
        type: String,
        // required: true,
        trim: true
    },
    nacion: {
        type: String,
        required: true
    }
}, {
    // Propiedad
    timestamps: true,
    /* mongoose cuando crea un objeto nuevo le añade un "version key (__v: 0)", desactivémoslo */
    versionKey: false
})

// En mongo se generará la colección "users", pasamos "User" pero igual se pone en plural.
export default model('User', UserSchema)
