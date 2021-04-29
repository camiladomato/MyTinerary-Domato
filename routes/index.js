const express = require ('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const userControllers = require('../controllers/userControllers')


router.route('/cities')
.get(citiesControllers.obtenerCiudades)
.post(citiesControllers.cargarNuevaCiudad)

router.route('/city/:id')
.delete(citiesControllers.borrarCiudad)
.put(citiesControllers.actualizarCiudad)
.get(citiesControllers.buscarCiudadPorId) 

router.route('/itinerarios')
.get(itinerariesControllers.obtenerTodosLosItinerarios)
.post(itinerariesControllers.cargarNuevoItinerario)

router.route('/itinerarios/:id')
.delete(itinerariesControllers.borrarItinerario)
.put(itinerariesControllers.actualizarItinerario)
.get(itinerariesControllers.buscarItinerarioPorId)

router.route('/itinerary/:id')
.get(itinerariesControllers.buscarItinerarioPorIdDeCiudad)

router.route('/user/signin')
.post(userControllers.loguearUsuario)

router.route('/user/signup')
.post(userControllers.cargarNuevoUsuario)

module.exports = router