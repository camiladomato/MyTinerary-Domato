import React from 'react' 
import './pages/App.css'
import Home from './pages/Home'
import Cities from  './pages/Cities'
import{BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Cmpt404 from './pages/404'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import City from './components/City'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { connect } from 'react-redux'
import userActions from './redux/actions/userActions'


class App extends React.Component{
  render(){
    if (!this.props.userLogged && localStorage.getItem('token')){
      const datosUser= JSON.parse(localStorage.getItem('userLogged'))
      const userLS={
        token:localStorage.getItem('token'),
        ...datosUser
      }
      this.props.loginForzadoPorLocalS(userLS)
      return null
    }
    return(  
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component= {Home}/>
          <Route path="/cities" component= {Cities}/>
          <Route path="/city/:id" component={City} />
          {!this.props.userLogged && <Route path="/signin" component={SignIn}/>}
          {!this.props.userLogged && <Route path="/signup" component={SignUp}/>}
          <Route path="/error" component= {Cmpt404}/>
          <Redirect to ="/error"/>
        </Switch>
      <Footer/> 
    </BrowserRouter> 
     )
  }
}
const mapStateToProps = state =>{
  return{
    userLogged: state.userLogged}
}
const mapDispatchToProps ={
  loginForzadoPorLocalS: userActions.loginForzadoPorLocalS
}

export default connect(mapStateToProps, mapDispatchToProps)(App)



 