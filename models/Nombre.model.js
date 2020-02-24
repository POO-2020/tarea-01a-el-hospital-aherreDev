class Nombre {
  nombre;
  apellidoPaterno;
  apellidoMaterno;
  /**
   *
   * @param {string} nombre
   * @param {string} apellidoMaterno
   * @param {string} apellidoPaterno
   */
  constructor(nombre, apellidoMaterno, apellidoPaterno) {
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
  }
  getNombreCompleto = () => {};
  getApellidoNombre = () => {};
  getIniciales = () => {};
}
