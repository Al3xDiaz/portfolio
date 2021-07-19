import './components/colors.css';
import './components/Utils.css';
import Commentary from './components/commentary';
import Nav from './components/nav';

function App() {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="col-md-2">
          <img alt="Alex Diaz" className="profile" src="https://res.cloudinary.com/dd7jrtxu5/image/upload/w_1000,c_fill,ar_1:1,g_auto/v1607886191/Alex/imagen_cjbso3.jpg" />
        </div>
      </div>
      <header>
      </header>
      <Commentary />
    </div>
  );
}

export default App;
