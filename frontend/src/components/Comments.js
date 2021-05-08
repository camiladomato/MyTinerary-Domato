import React from 'react'
import Comment from '../components/Comment'
import itineraryActions from '../redux/actions/itineraryActions';
import { useState } from 'react'
import { connect } from 'react-redux'

const Comments= (props) =>{
  console.log(props)

  const [nuevoComentario,setNuevoComentario] = useState ({comment:""})
  
  const readInput= e => {
      const campo = e.target.name
      const valor = e.target.value
      setNuevoComentario({
          ...nuevoComentario,
          [campo]:valor
      })
  }
  
  const send = async () =>{  
    const respuesta = await props.cargarComentario(props.comentarios.comment,nuevoComentario)
  console.log(respuesta)
  }

  
  return( <>
    {props.comentarios.comments.map((comentario)=>{
    return( <Comment datosComentarios={comentario}/>)
      })}
        <input type="text" placeholder="Enter your Comments" name="comment" value={nuevoComentario.comment} onChange={readInput} />
        <button onClick={send}>Send</button>
       </>
        )}
  

    const mapDispatchToProps = {
    cargarComentario: itineraryActions.cargarComentario, 
    }



export default connect (null , mapDispatchToProps) (Comments)