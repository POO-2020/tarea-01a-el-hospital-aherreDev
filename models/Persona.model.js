// ? Models
import Fecha from "./Fecha.model";
import Nombre from "./Nombre.model";

class Persona {
  nombre;
  fechaNacimiento;
  telefono;
  /**
   * @param {Nombre} nombre
   * @param {Fecha} fechaNacimiento
   * @param {string} telefono
   */
  constructor(nombre, fechaNacimiento, telefono) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
  }
}

export default Persona;
