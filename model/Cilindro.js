export default class Cilindro {
    constructor(raio, altura) {
        this.raio = raio
        this.altura = altura
    }

    // Calcula o volume do cilindro
    calcularVolume() {
        return Math.PI * this.raio * this.raio * this.altura
    }

    // Calcula a área da superfície do cilindro
    calcularArea() {
        return (2 * Math.PI * this.raio * this.raio) + (2 * Math.PI * this.raio * this.altura)
    }
}