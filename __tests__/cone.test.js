import Cone from "../model/Cone"

describe("Teste dos cálculos de área superficial e volume", () => {
    test("Cálculo do Volume", () => {
        const raio = 2
        const altura = 3
        const cilindro = new Cone(raio, altura)
        const volumeEsperado = 12.57 // (1/3) * π * 2² * 3 = 12.56637, arredondado para 12.57

        expect(cilindro.calcularVolume()).toBeCloseTo(volumeEsperado, 2)
    })

    test("Cálculo da área superficial", () => {
        const raio = 2
        const altura = 3
        const cilindro = new Cone(raio, altura)
        // Cálculo da geratriz
        const geratriz = Math.sqrt(2 * 2 + 3 * 3) // √(4 + 9) = √13 ≈ 3.60555

        // Área da superfície
        const areaEsperada = 3.14159 * 2 * 2 + 3.14159 * 2 * geratriz // π * 2² + π * 2 * 3.60555 = 12.56637 + 22.61245 = 35.17882, arredondado para 35.18

        expect(cilindro.calcularArea()).toBeCloseTo(areaEsperada, 2)
    })
})