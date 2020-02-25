// ? Models
import Persona from "./Persona.model";

class Doctor extends Persona {
  constructor(especialidad, cedula) {
    this.especialidad = especialidad;
    this.cedula = cedula;
  }
  getPerfil = () => {
    let { getNombreCompleto } = this.nombre;
    return `${this.cedula}, ${this.especialidad}, ${getNombreCompleto()}, ${
      this.telefono
    }`;
  };
  getNombre = () => "Dr." + this.nombre.getNombreCompleto();
}
export default Doctor;
