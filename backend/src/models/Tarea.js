const { Schema, model } = require('mongoose')

const tareaSchema = new Schema({
    nombre: String,
    descripcion: String,
    telefono: Number,
    correo: String,
    
},
    {
        timestamps: true
    }

)
module.exports = model('Tarea', tareaSchema)