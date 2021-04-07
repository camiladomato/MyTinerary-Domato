import React from 'react' //importar libreria
import './pages/App.css' //importar css
import Home from './pages/Home'

//se puede poner export default antes de class o *// 
class App extends React.Component{  //creo una clase de componente hereda de clase superior en libreria de react -component-
  render(){  //renderiza lo que retorna
    //const nombre= "Camila"  //forma de dar estilo:
    return (
     <div className="contenedor"> 
        <Home/>
      </div>
    )
  }
}
//*o aca*
export default App

