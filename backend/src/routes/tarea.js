const { Router } = require('express')
const router = Router()

const {createTareas, getTareas, getTarea, deleteTarea, updateTarea} = require('../controller/tarea.controller')

router.route('/')

    .get(getTareas)
    .post(createTareas)

router.route('/:id')
    
    .get(getTarea)
    .delete(deleteTarea)
    .put(updateTarea)
    
module.exports = router;