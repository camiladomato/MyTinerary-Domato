import React from 'react' //importar libreria

//se puede poner export default antes de class o *// 
class App extends React.Component{  //creo una clase de componente hereda de clase superior en libreria de react -component-
  render(){  //renderiza lo que retorna
    var nombre= "Camila"  
    return (
     <>
       <h1>hola Soy {nombre} y esta es mi proxima web app de viajes</h1>
      </>
    )
  }
}
//*o aca*
export default App

