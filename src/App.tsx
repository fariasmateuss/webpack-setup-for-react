import logo from './assets/logo.svg';
import './styles/global.scss';
import './styles/App.scss';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Welcome to <code>React.js</code>
        </h1>

        <p className="App-description">
          Get started by editing <code>src/App.tsx</code>
        </p>
      </header>
    </div>
  );
}
