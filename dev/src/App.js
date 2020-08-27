import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NaviBar from './components/NaviBar';
import { 
  Switch, 
  Route, 
  BrowserRouter as Router 
} from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/users" component={ Users } />
          <Route path="/about" component={ About } />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
