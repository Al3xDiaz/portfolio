import React,{Component} from 'react';
import ModalExample from  '../basico/Modal'

export class Comentarios extends Component {
  constructor(props) {
    super(props);
    this.state={loading:true,comentario:[]}
      this.Summit = this.Summit.bind(this);
  }
  componentDidMount() {
    this.GetComentarios();
  }
  static MostarComentarios(comentarios) {
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
            {comentarios.map(comentario =>
              <tr key={comentario.Id}>
                <td>{comentario.name}</td>
                <td>{comentario.email}</td>
                <td>{comentario.commentary}</td>
              </tr>
            )}
          </tbody>
        </table>
    );
  }
  Summit(form){
      this.SetComentarios(form);
  }
  render(){
    const cajas=[
      {key:1,Name:'nombre', type:"text"},
      {key:2,Name:'email', type:"email" ,placeholder:"info@exaple.com"},
      {key:3,Name:'comentario', type:"textarea"}
    ];
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Comentarios.MostarComentarios(this.state.comentario);
    return(
      <div>
        <ModalExample Cajas={cajas} buttonLabel="Comentar" titulo="Agregar comentario" Action={this.Summit} />
        <div className="row">
          {contents}
        </div>
      </div>
    );
  }
    async GetComentarios() {
        this.setState({ comentario: [], loading: true });
        const response = await fetch('/api/Usuarios/GetComentarios');
        const data = await response.json();
        this.setState({ comentario: data, loading: false });
    }
    async SetComentarios(form) {
        this.setState({ comentario: [], loading: true });
        const response = await fetch('/api/Usuarios/SetComentarios', {
            method: 'post',
            body: form
        });
        const data = await response.json();
        if (data) this.GetComentarios();
    }
}
