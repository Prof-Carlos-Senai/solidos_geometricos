export default class Cone {
    constructor(raio, altura) {
        this.raio = raio
        this.altura = altura
    }

    // Calcula o volume do cone
    calcularVolume() {
        return (1 / 3) * Math.PI * this.raio * this.raio * this.altura
    }

    // Calcula a área da superfície do cone
    calcularArea() {
        const geratriz = Math.sqrt((this.raio * this.raio) + (this.altura * this.altura))
        return (Math.PI * this.raio * this.raio) + (Math.PI * this.raio * geratriz)
    }
}