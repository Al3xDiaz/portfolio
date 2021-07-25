import './components/colors.css';
import './components/Utils.css';
import Commentary from './components/commentary';
import Menu from './components/Menu'
function App() {
  return (
    <div>
      <Menu />
      <div className="col-md-10 center">
        <div className="row">
          <div className="col-md-3">
            <div className="center">
              <img alt="Alex Diaz" className="profile" src="https://res.cloudinary.com/dd7jrtxu5/image/upload/c_fill,ar_1:1,g_auto/v1607886191/Alex/imagen_cjbso3.jpg" />
            </div>
          </div>
          <div className="col-md-9">
            <h3>Historia y formación Profesional.</h3>
            <p>
              Nacìo el 22 de noviembre de 1996, en San Pedro Sula, Cortes, Honduras.
              Hijo de Jose Anael Diaz Guevara y Mirian Suyapa Sierra Villamil.
            </p>
            <p>
              Realizo sus estudios en la escuela Dionisio de Herrera, en el colegio
              Jose Trinidad Reyes reciviendo asi el <a href="titulo.pdf">
                Título</a> de BTP en Informatica. En la fecha 03/2019, inicio
              los Cursos por parte del convenio de la Asosiacion Hondureña
              de Maquiladores
              (<a href="http://www.ahm-honduras.com/">AHM</a>) y la
              Fundacion Nacional para el Desarrollo de Honduras
              (<a href="http://www.funadeh.org/">FUNADEH</a>)
              llamado <a href="http://www.ahm-honduras.com/?p=3123" >Academia de Programadores</a>. Participando asi en la segunda
              promocion.
            </p>
            <p>
              Para Ingresar en el proyecto anterior, realizo varias pruebas y filtros.
              Donde recibio una certificacion <a href="MTA.pdf" >MTA</a> y
              <a href="MOS.pdf"> MOS</a>.
            </p>
            <p>
              En la Actualidad estudia en la Universidad Autonoma De Honduras,
              Ubicada en el valle de sula (<a href="https://vallesula.unah.edu.hn/" >
                UNAH-VS</a>). A su vez recibe cursos en una plataforma en linea llamada <a href="https://platzi.com/">
                Platzi
              </a>.
            </p>
            <h3>Pasatiempos</h3>
            <p>
              Alex a sus {edad()} años de edad, tiene pasion por la Fisica
              (Astronomia, el mundo sub-atòmico, termodinamica, etc), Tecnologia,
              Matematica,Comedia, Ciencia Ficcion, fantasia, literatura, etc.
            </p>
          </div>
        </div>
        <h3>Comentarios</h3>
        <Commentary />
      </div>
    </div>
  );
}
const edad = () => {
  const fecha = new Date();
  const anio = fecha.getFullYear();
  return anio - 1997;
}
export default App;
