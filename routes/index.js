const express = require ('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

router.route('/cities')
.get(citiesControllers.obtenerCiudades)
.post(citiesControllers.cargarNuevaCiudad)

router.route('/city/:id')
.delete(citiesControllers.borrarCiudad)
.put(citiesControllers.actualizarCiudad)
.get(citiesControllers.buscarCiudadPorId) 

module.exports = router