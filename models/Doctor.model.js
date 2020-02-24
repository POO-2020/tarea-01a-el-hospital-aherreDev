// ? Models
import Persona from "./Persona.model";

class Doctor extends Persona {
  constructor(especialidad, cedula) {
    this.especialidad = especialidad;
    this.cedula = cedula;
  }
  getPerfil = () => {};
}
export default Doctor;
