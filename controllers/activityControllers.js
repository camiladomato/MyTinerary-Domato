const Activity = require('../models/Activity')

const activitiesControllers = {
    obtenerLasActividadesId:async (req,res) =>{
        const todasLasActividades = await Activity.find({idItinerary:req.body.idItinerary})
        res.json({response: todasLasActividades, success:true})

 
    },
    cargarActividad:async (req,res) =>{
       
        const cargarActivity = new Activity (req.body)  
        await cargarActivity.save()
        res.json({response:cargarActivity , success:true })
    },
     
}

    module.exports = activitiesControllers 