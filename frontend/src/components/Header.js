import React from 'react' //importo libreria


//componente funcional , una funcion.
const Header=()=>{
    return(
        <header>
             <img src="./assets/logo2.png"/>
            
            <nav>
                <a href="">Home</a>
                <a href="">Cities</a>  
                <a href="">Sign up</a>
                <a href="">Login</a>       
            </nav>
        </header>
    )
}

export default Header

