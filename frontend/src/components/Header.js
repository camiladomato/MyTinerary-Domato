import React from 'react' //importo libreria


//componente funcional , una funcion.
const Header=()=>{
    return(
        <header>
             <img src="./assets/logo2.png"/>
            <nav>
                <a href="">home</a>
                <a href="">cities</a>  
                <a href="">sing up</a>
                <a href=""><img src="./assets/logo1" id="logoBoton"/> </a>       
            </nav>
        </header>
    )
}

export default Header

