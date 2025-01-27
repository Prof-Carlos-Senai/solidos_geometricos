export default class Paralelepipedo {
    constructor(largura, altura, profundidade) {
        this.largura = largura
        this.altura = altura
        this.profundidade = profundidade
    }

    // Calcula o volume do paralelepípedo
    calcularVolume() {
        return this.largura * this.altura * this.profundidade
    }

    // Calcula a área da superfície do paralelepípedo
    calcularArea() {
        return (2 * (this.largura * this.altura +
            this.largura * this.profundidade +
            this.altura * this.profundidade)
        )
    }
}