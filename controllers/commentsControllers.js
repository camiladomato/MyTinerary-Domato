const Itinerary = require('../models/Itinerary')

const commentsControllers = {
    
    cargarNuevoComentario:async (req,res) =>{
        var itinerarioId= req.params.id
        var comentario= req.body.comment
        var userId= req.user._id 
        cargarComentario = await Itinerary.findOneAndUpdate({_id:itinerarioId},{$push: {comments: {userId: userId, comment: comentario}}}, {new: true})
        res.json({success:true , response:cargarComentario})
    },
    borrarComentario:async (req,res) =>{ 
        const idABorrar=req.params.id
        const comentarioABorrar = await Itinerary.findOneAndRemove({_id:idABorrar})
        res.json({response: comentarioABorrar , sucesss:true})
       
    },
    editarComentario:async (req,res) =>{
        const idAModificar = req.params.id
        const editarComentarios = await Itinerary.findOneAndUpdate({_id:idAModificar},req.body,{new:true}) 
        res.json({response: editarComentarios, success:true}) 
    },
    obtenerComentarios:async (req,res) =>{
        const todosLosComentarios = await Itinerary.find() 
        res.json({response : todosLosComentarios , sucess: true})
        } 

}     
module.exports = commentsControllers 