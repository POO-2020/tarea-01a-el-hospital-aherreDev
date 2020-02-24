// ? Models
import Nombre from "./Nombre.model";
import Doctor from "./Doctor.model";
import Cita from "./Cita.model";

class Hospital {
  nombre;
  direccion;
  doctores;
  citas;
  /**
   *
   * @param {Nombre} nombre
   * @param {string} direccion
   * @param {Array <Doctor>} doctores
   * @param {Array <Cita>} citas
   */
  constructor(nombre, direccion, doctores, citas) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.doctores = doctores;
    this.citas = citas;
  }
  registrarDoctor = () => {};
  listarDoctores = () => {};
  registrarCita = () => {};
  listarCitas = () => {};
}
