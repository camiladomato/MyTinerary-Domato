import React from 'react'
import {connect} from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions';


const Comment = (props) =>{
    console.log(props)

        const edit =() =>{
            console.log("hola") 
        } 
        const borrar =() =>{
            console.log("hola") 
        }           
    return( <>
                {Array(props.datosComentarios).map((datos)=>{
  
                    <div>
                        <p>{datos}</p>
                      
                        <button onClick={edit}>Edit</button>
                        <button onClick={borrar}>Delete</button>
                    </div>
                    })}
                        
            </>
                    )         
     
    }

    
const mapDispatchToProps = {
    editarComentario: itineraryActions.editarComentario,
    eliminarComentario: itineraryActions.eliminarComentario  
}

export default connect (null , mapDispatchToProps) (Comment)

 
