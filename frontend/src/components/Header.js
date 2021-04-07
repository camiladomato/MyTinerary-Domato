import React from 'react' //importo libreria


//componente funcional , una funcion.
const Header=()=>{
    return(
        <header>
             <img src="./assets/logo2.png"/>
             
             
             <div>
             <h1>MyTinerary</h1>
                <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                </div>
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

