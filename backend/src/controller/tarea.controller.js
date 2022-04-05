const tareaCtrl = {}

const Tarea = require('../models/Tarea')

tareaCtrl.getTareas = async (req, res) => {
    const tareas = await Tarea.find()
    res.json(tareas)
}
tareaCtrl.createTareas = async (req, res) => {
    const { nombre, descripcion, telefono, correo } = req.body;
    const newTarea = new Tarea({
        nombre: nombre,
        descripcion: descripcion,
        telefono: telefono,
        correo: correo
    })
    await newTarea.save();
    res.json({ message: "La tarea ha sido creada" });
};
tareaCtrl.getTarea = async (req, res) => {
    const tarea = await Tarea.findById(req.params.id)
    res.json(tarea)
 };
tareaCtrl.deleteTarea = async (req, res) => {
    await Tarea.findByIdAndDelete(req.params.id)
    res.json({message: 'la tarea ha sido eliminada'})
 };
tareaCtrl.updateTarea = async (req, res) => {
    const { nombre, descripcion, telefono, correo } = req.body;
    await Tarea.findByIdAndUpdate(req.params.id, {
        nombre,
        descripcion,
        telefono,
        correo
    })
    res.json({message: 'El usuario ha sido actualizado'})
};

module.exports = tareaCtrl;
