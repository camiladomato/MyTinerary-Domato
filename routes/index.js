const express = require ('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const userControllers = require('../controllers/userControllers')
const validator = require ('../config/validator')
const passport = require ('passport')
const commentsControllers = require('../controllers/commentsControllers')
const activitiesControllers = require ('../controllers/activityControllers')



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

router.route('/comentario/:id')
.get(commentsControllers.obtenerComentarios)
.post(passport.authenticate('jwt',{session:false}),commentsControllers.cargarNuevoComentario )
.put(commentsControllers.editarComentario)
.delete(commentsControllers.borrarComentario)

router.route('/activity')
.post(activitiesControllers.cargarActividad)
.get(activitiesControllers.obtenerLasActividadesId)


module.exports = router