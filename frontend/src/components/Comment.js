import React from 'react'
import {connect} from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions';
import {useState} from 'react'



const Comment = (props) =>{
    console.log(props)
   
    const [comentarioEditado ,setComentarioEditado] = useState (props.datosComentarios.comment,props.datosComentarios.userId)
    const [comentarioEliminado ,setComentarioEliminado] = useState (" ")
    const [nuevoComentario,setNuevoComentario] = useState (props.datosComentarios.comment)
    const [comentarios,setComentarios] = useState ([])

      
  const readInput= e => {
    const campo = e.target.name
    const valor = e.target.value
    setNuevoComentario({
        ...nuevoComentario,
        [campo]:valor
    })
    }
    const readInputReply= e => {
        const campo = e.target.name
        const valor = e.target.value
        setNuevoComentario({
            ...nuevoComentario,
            [campo]:valor
        })
    }

    const send = async () =>{  
        const respuesta = await props.cargarComentario(props.datosComentarios._id,nuevoComentario.comment)
        setComentarios(comentarios)
        }
    
    var edit =  async ()=>{
    var respuestaAEditar = await props.editarComentario(props.datosComentarios.comment, comentarioEditado.comment)
    setComentarioEditado(comentarioEditado)
    }
    
    var borrar = async () =>{
    var respuestaBorrar = await props.eliminarComentario(props.datosComentarios.comment, comentarioEliminado.comment)
    setComentarioEliminado(comentarioEliminado)
    }
    
    var fotoUser = props.usuarioLogueado
    ? 
    props.usuarioLogueado.urlImage
    : 
    '../assets/signup.png'
     
    return( <>

                
                {props.usuarioLogueado
                
                ? 
                <div className="comentario">
                    <div className="foto-user" style= {{ backgroundImage :`url(${fotoUser})`}}></div>
                    <p>{props.usuarioLogueado.name}</p>
                    <p>{props.datosComentarios.comment}</p>
                    <button onClick={send} className="boton-comentario">S</button>
                    <button onClick={edit} className="boton-comentario">E</button>
                    <button onClick={borrar}className="boton-comentario">D</button>
                    <input type="text" name="comment"  value={nuevoComentario.comment} onChange={readInput} />
                    
                   
                    
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
    obtenerComentario: itineraryActions.obtenerComentarios,
    cargarComentario: itineraryActions.cargarComentario,  
}

export default connect (mapStateToProps , mapDispatchToProps) (Comment)

 
