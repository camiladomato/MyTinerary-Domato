import React from 'react' //importar libreria
import '-./App.css' //importar css

//se puede poner export default antes de class o *// 
class App extends React.Component{  //creo una clase de componente hereda de clase superior en libreria de react -component-
  render(){  //renderiza lo que retorna
    var nombre= "Camila"  //forma de dar estilo:
    return (
     <div className="contenedor"> 
        <h1>hola Soy {nombre} y esta es Mi Proxima Web App de viajes</h1>
        <h2>¡Bienvenidos!</h2>
      </div>
    )
  }
}
//*o aca*
export default App

