const Itinerary = require('../models/Itinerary')

const itinerariesControllers = {
    obtenerTodosLosItinerarios:async (req,res) =>{ 
        const todosLosItinerarios = await Itinerary.find() 
        res.json({response : todosLosItinerarios , sucess: true})
    }, 
    cargarNuevoItinerario:async (req,res) =>{
        const cargarItinerary = new Itinerary (req.body)  
        await cargarItinerary.save()
        res.json({response:cargarItinerary , success:true })
    },
    borrarItinerario:async (req,res) =>{ 
        const idABorrar=req.params.id
        const itinerarioABorrar = await Itinerary.findOneAndRemove({_id:idABorrar})
        res.json({response: itinerarioABorrar , sucesss:true})
       
    },
    actualizarItinerario:async (req,res) =>{
        const idAModificar = req.params.id
        const itinerarios = await Itinerary.findOneAndUpdate({_id:idAModificar},req.body,{new:true}) 
        res.json({response: itinerarios, success:true}) 
    },
    buscarItinerarioPorId:async (req,res) =>{
        const idABuscar = req.params.id
        const itinerarioBuscado = await Itinerary.findOne ({_id:idABuscar})
        res.json({response: itinerarioBuscado, success:true})
    },
    buscarItinerarioPorIdDeCiudad:async (req,res) =>{
        const itinerariosDeCiudadBuscada = await Itinerary.find ({idCity:req.params.id})
        res.json({response: itinerariosDeCiudadBuscada, success:true})
    }

}     
module.exports = itinerariesControllers 