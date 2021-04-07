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
                <a href="">Home</a>
                <a href="">Cities</a>  
                <a href="">Sing up</a>
                <a href="">Login</a>       
            </nav>
        </header>
    )
}

export default Header

