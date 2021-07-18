import './App.css';
import Commentary from './components/commentary';

function App() {
  return (
    <div>
      <header>
        <img src="https://res.cloudinary.com/dd7jrtxu5/image/upload/v1607886191/Alex/imagen_cjbso3.jpg" />
        <p>
          Edit <code>src/App.js</code> and saved to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Commentary />
    </div>
  );
}

export default App;
