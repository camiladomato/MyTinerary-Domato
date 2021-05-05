const express = require ('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const userControllers = require('../controllers/userControllers')
const validator = require ('../config/validator')
const passport = require ('passport')


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
.post(validator,userControllers.cargarNuevoUsuario)

router.route('/user/loginLS')
.get(passport.authenticate('jwt',{session:false}),userControllers.loginForzado)

module.exports = router