import React from 'react' 
import './pages/App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Cmpt404 from './pages/404'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import City from './components/City'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { connect } from 'react-redux'
import userActions from './redux/actions/userActions'

class App extends React.Component {

  // 🛡️ SE EJECUTA UNA SOLA VEZ AL ABRIR LA APP
  componentDidMount() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      
      // Intentamos recuperar el string de userLogged por si las dudas
      const userLoggedStorage = localStorage.getItem('userLogged');
      const datosUser = userLoggedStorage ? JSON.parse(userLoggedStorage) : null;

      const userLS = {
        token: token,
        ...datosUser
      }
      
      // Despachamos la verificación al Backend de forma segura
      this.props.loginForzadoPorLocalS(userLS)
    }
  }

  render() {
    return (  
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={Cities} />
          <Route path="/city/:id" component={City} />
          
          {/* Protegemos las rutas usando el prop correcto mapeado abajo */}
          {!this.props.userLogged && <Route path="/signin" component={SignIn} />}
          {!this.props.userLogged && <Route path="/signup" component={SignUp} />}
          
          <Route path="/error" component={Cmpt404} />
          <Redirect to="/error" />
        </Switch>
        <Footer /> 
      </BrowserRouter> 
    )
  }
}

// 🛡️ CORRECCIÓN CLAVE: Apuntamos exactamente a donde Redux guarda los datos
const mapStateToProps = state => {
  return {
    userLogged: state.user ? state.user.userLogged : null
  }
}

const mapDispatchToProps = {
  loginForzadoPorLocalS: userActions.loginForzadoPorLocalS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)