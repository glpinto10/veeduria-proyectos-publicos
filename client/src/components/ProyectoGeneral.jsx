import React, { Component } from "react";
import DetailProyecto from "./DetailProyecto.jsx";
import axios from "axios";


class ProyectoGeneral extends Component {


  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <DetailProyecto />
    }
  }

  render() {

    const proyecto = this.props.proyecto;
    const nombre = proyecto.nombre;
    const region = proyecto.region;
    const departamento = proyecto.departamento;
    const municipio = proyecto.municipio;
    const sector = proyecto.sector;
    const inicio = proyecto.anioInicioEjecucion;
    const fin = proyecto.anioFinEjecucion;

    return (
      <div className="col-12 mt-4">
        <div className="card w-100 shadow">
          <div className="card-body">
            <p className="card-title font-weight-bold">{nombre}</p>
            <hr />
            <p className="card-text">
              <i className="fas fa-map-marker-alt fa-lg text-danger" />
              &nbsp;
              {region}, {departamento}, {municipio}
            </p>
            <p className="card-text">
              <i className="fas fa-list-ul fa-lg text-primary" />
              &nbsp;
              {sector}
            </p>
            <p className="card-text">
              <i className="fas fa-calendar fa-lg text-success" />
              &nbsp;
              {inicio} - {fin}
            </p>
          </div>
        </div>
         <div>
         </div>
      </div>
    );
  }
}

export default ProyectoGeneral;
