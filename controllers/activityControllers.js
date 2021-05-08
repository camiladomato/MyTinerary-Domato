const Activity = require('../models/Activity')

const activitiesControllers = {
    
    obtenerTodasLasActividades:async (req,res) =>{ 
        const todasLasActividades = await Activity.find() 
        res.json({response : todasLasActividades , success: true})
    },
    cargarActividad:async (req,res) =>{
        console.log(req.body)
        const cargarActivity = new Activity (req.body)  
        await cargarActivity.save()
        res.json({response:cargarActivity , success:true })
    },
}

    module.exports = activitiesControllers 