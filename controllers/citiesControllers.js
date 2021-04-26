const City = require('../models/Cities')

const citiesControllers = {
    obtenerCiudades:async (req,res) =>{
        const allCities = await City.find() 
        res.json({response : allCities , sucess: true})
    }, 
    cargarNuevaCiudad:async (req,res) =>{
        const {city, path, country, info} = req.body 
        const cargarCities = new City ({city:city, path:path, country:country, info: info})  
        await cargarCities.save()
        res.json({response:cargarCities , success:true })
    },
    borrarCiudad:async (req,res) =>{ 
        const idABorrar=req.params.id
        const ciudadABorrar = await City.findOneAndRemove({_id:idABorrar})
        res.json({reponse:ciudadABorrar , sucesss:true})
       
    },
    actualizarCiudad:async (req,res) =>{
        const idAModificar = req.params.id
        const cities = await City.findOneAndUpdate({_id:idAModificar},{...req.body},{new:true})
        res.json({response:cities, success:true}) 
    },
    buscarCiudadPorId:async (req,res) =>{
        const idABuscar = req.params.id
        const ciudadBuscada = await City.findOne ({_id:idABuscar})
        res.json({response:ciudadBuscada, succes:true})
    }
}     
module.exports = citiesControllers 
