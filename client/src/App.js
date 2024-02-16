import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nous sommes dans <code>src/App.js</code> et je teste le hot reload.A priori ça fonctionne c'est de la boulette en sauce tomate :D
        </p>
        <p>Bienvenue sur cette app pour apprendre à utiliser docker</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
