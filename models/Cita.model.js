// ? Models
import Fecha from "./Fecha.model";
import Tiempo from "./Tiempo.model";
import Doctor from "./Doctor.model";
import Paciente from "./Paciente.model";

class Cita {
  fecha;
  hora;
  doctor;
  paciente;
  /**
   *
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Doctor} doctor
   * @param {Paciente} paciente
   */
  constructor(fecha, hora, doctor, paciente) {}
  getCita = () => {
    let { getFecha } = this.fechaNacimiento;
    let { getFormato24Horas } = this.hora;
    return `${getFecha()}, ${getFormato24Horas()}, ${this.doctor.getNombre()}, ${this.paciente.getNombre()}`;
  };
}
export default Cita;
