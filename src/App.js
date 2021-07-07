import './App.css';

import Nav from './Components/Nav';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <main>
        <About/>
        <Portfolio/>
        <Contact/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
