import React from 'react'
import Comment from '../components/Comment'
import itineraryActions from '../redux/actions/itineraryActions'
import {connect} from 'react-redux'
import {useState} from 'react'

const Comments= (props) =>{

  const [nuevoComentario,setNuevoComentario] = useState ({comment:""})
  const [comentarios,setComentarios] = useState ([])
  
  const readInput= e => {
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
    
  return( <>
    {props.comentarios.comments.map(comentario=>{
    return( <Comment datosComentarios={comentario}/>)
      })}       
        {props.usuarioLogueado ? 
         <div>
           <input type="text" placeholder="Enter your Comments" name="comment" value={nuevoComentario.comment} onChange={readInput} />
         <button onClick={send}>Send</button>
        </div>
         :<div>
              <h2>To make comments you must log in</h2>
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
    cargarComentario: itineraryActions.cargarComentario, 
    }


export default connect (mapStateToProps , mapDispatchToProps) (Comments)





