export default class Cubo {
    constructor(lado) {
        this.lado = lado
    }

    // Calcula o volume do cubo
    calcularVolume() {
        return this.lado * this.lado * this.lado
    }

    // Calcula a área da superfície do cubo
    calcularArea() {
        return 6 * this.lado * this.lado;
    }
}