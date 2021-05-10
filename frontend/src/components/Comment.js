import React from 'react'
import {connect} from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions';
import {useState} from 'react'
import { set } from 'mongoose';


const Comment = (props) =>{
    console.log(props)
   
    const [comentarioEditado ,setComentarioEditado] = useState (props.datosComentarios.comment)
    const [comentarioEliminado ,setComentarioEliminado] = useState (" ")
    const [nuevoComentario,setNuevoComentario] = useState (props.datosComentarios.comment)
    const [comentarios,setComentarios] = useState ([])

      
  const input= e => {
    const campo = e.target.name
    const valor = e.target.value
    setNuevoComentario({
        ...nuevoComentario,
        [campo]:valor
    })
}

    const send = async (props) =>{  
        const respuesta = await props.cargarComentario(props.comentarios._id,nuevoComentario.comment)
        setComentarios(comentarios)
        }
    
    var edit =  async (props)=>{
    var respuestaAEditar = await props.editarComentario(comentarioEditado)}
    
    var borrar = async (props) =>{
    var respuestaBorrar = await props.eliminarComentario(props.datosComentarios.comment, comentarioEliminado)}
    
    var fotoUser = props.userLogged
    ? props.userLogged.urlImage
    : '../assets/signup.png'
     
    return( <>
                {props.usuarioLogueado ? 
                <div>
                   <div className="foto-user" style= {{ backgroundImage :`url(${fotoUser})`}}></div>
                    <p>{props.usuarioLogueado.name}</p>
                    <p>{props.datosComentarios.comment}</p>
                    <>
                    <button onClick={edit}>Edit</button>
                    <input value={props.datosComentarios.comment,setComentarioEditado} onChange={input} />
                    <button onClick={send}>Send</button>

                    
                    <button onClick={borrar}>Delete</button>
                    <input value={comentarioEliminado} onChange={()=> setComentarioEliminado()}  />
                    </>     
                </div>
            :  
            <div>
            <p>{props.datosComentarios.comment}</p>
            </div>
            }
        </>
    )
       
}
              
          
 
 const mapStateToProps = state =>{
    return{
        usuarioLogueado: state.user.userLogged   
    }
 }

const mapDispatchToProps = {
    editarComentario: itineraryActions.editarComentario,
    eliminarComentario: itineraryActions.eliminarComentario,
    obtenerComentarios: itineraryActions.obtenerComentarios  
}

export default connect (mapStateToProps , mapDispatchToProps) (Comment)

 
