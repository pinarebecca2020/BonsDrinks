
import './App.css';
import { AppDiv } from './App.styles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/index.js';
import About from './Pages/about.js';
import Contact from './Pages/contact.js';
import OurTeam from './Pages/ourteam.js';
import Header from './Componentes/Header/index.js';
import Footer from './Componentes/Footer/index.js';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/ourteam' exact component={OurTeam} />
      </Switch>
      <Footer />
    </ Router>
  );
}

export default App;
