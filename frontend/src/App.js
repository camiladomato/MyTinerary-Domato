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


class App extends React.Component{  
  render(){
    return(  
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component= {Home}/>
          <Route exact path="/cities" component= {Cities}/>
          <Route exact path="/city/:id" component={City} />
          <Route path="/error" component= {Cmpt404} />
          <Redirect to ="/error"/>
        </Switch>
      <Footer/> 
    </BrowserRouter> 
     )
  }
}

export default App



 