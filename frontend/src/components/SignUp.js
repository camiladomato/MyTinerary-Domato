import { useState } from 'react'

const SignUp = () => {
    const [newUser,setNewUser] = useState ({name:" ",lastName:" ",email:" ",password:" "})

    const readInput= e => {
        const campo = e.target.name
        const valor = e.target.value
        setNewUser({
            ...newUser,
            [campo]:valor
        })
    }

    const send =  e => { 
        e.preventDefault()
        console.log(newUser)
    }
    var paises = ["Russia","Argentine","France","Spain","United States","Germany","Italy","Mexico"] 
    return (  
            <form className="formulario-signUp">
                <h1>registrate</h1>
                <input type="texto" placeholder="enter your Name" name="name" value={newUser.name}  onChange={readInput}/>
                <input type="texto" placeholder="enter your LastName" name="lastName" value={newUser.lastName} onChange={readInput}/>
                <input type="email" placeholder="enter your Email" name="email" value={newUser.email} onChange={readInput}/>
                <input type="password" placeholder="enter your Password" name="password" value={newUser.password} onChange={readInput}/>
                    <select name="select" placeholder="pais" >
                        <option>Choose your country</option>
                        {paises.map(pais =>{
                            return (<option name="country" placeholder="pais" key={pais} value={pais} >{pais}</option>)
                        })}
                    </select>  
                <button onClick={send}>Enviar</button>          
            </form>
            )
}
export default SignUp