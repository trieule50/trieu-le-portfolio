import { Route } from 'react-router-dom';

import './App.css';

import Navigation from './Components/Nav';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
      <main>
        <Route path='/about' exact render={()=> <About/>}/>
        <Route path='/portfolio' exact render={()=> <Portfolio/>}/>
        <Route path='/contact' exact render={()=><Contact/>}/>
        <Route path='/' exact render={()=><Home/>}/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
