const SignIn = () => {
    return (
        <div className="formulario-signIn">
            <form>
                <h1>Entra a la cuenta</h1>
                <input type="email" placeholder="enter your Email" />
                <input type="pasword" placeholder="enter your Password"/>
                <button>Enviar</button>          
            </form>
        </div>
    )
}

export default SignIn