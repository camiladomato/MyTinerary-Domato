const City = require('../models/Cities')

var cities = [ 
    {city:"Rome", path:'../assets/rom.jpg',country:""  },
    {city:"Cancun", path:"../assets/cancun.jpg",country:""},
    {city:"Ibiza" ,path:"../assets/ibiza.jpg" ,country:""},
    {city:"New York", path:"../assets/ny.jpg",country:""},   
    {city:"LA", path:"../assets/eeuu.jpg",country:""},
    {city:"Tokio", path:"../assets/tokio.jpg",country:""},
    {city:"Paris" ,path:"../assets/paris.jpg",country:""},
    {city:"Amsterdam", path:"../assets/amsterdam.jpg",country:""}, 
    {city:"Barcelona", path:"../assets/barcelona.jpg",country:""},
    {city:"Milan", path:"../assets/milan.jpg",country:""},
    {city:"Buenos Aires" ,path:"../assets/buenosaires.jpg",country:""},
    {city:"Toronto", path:"../assets/toronto.jpeg",country:""},
    {city:"Berlin", path:"../assets/berlin.jpg",country:""}, 
    {city:"Chicago", path:"../assets/chicago.jpg",country:""}, 
    {city:"Londres", path:"../assets/londres.jpg",country:""},  
    ]

const citiesControllers = {
    obtenerCiudades:async (req,res) =>{ //req consulta requerida , res respuesta 
        const allCities = await City.find() //busca el modelo city .. con la caracteristica del parametro , en este caso todas por (vacio)
        res.json({response : allCities , sucess: true})//me responde un  array de objetos y lo guardo en la const all cities
    }, //uso el metodo json y envio el objeto/s con 2 propiedades respose(prop):allcities(valor).
    cargarNuevaCiudad:async (req,res) =>{
        console.log(req.body)
        const {city, path, country} = req.body
        const cargarCities = new City ({city:city, path:path, country:country})  
        await cargarCities.save()
        res.json({success:true , response:cargarCities})

    },
    borrarCiudad:async (req,res) =>{
        const idABorrar=req.params.id
        const ciudadABorrar = await City.findOneAndRemove({_id:idABorrar})
        res.json({reponse:ciudadABorrar , sucesss:true})
       
    },
    actualizarCiudad:async (req,res) =>{
        console.log(req)
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