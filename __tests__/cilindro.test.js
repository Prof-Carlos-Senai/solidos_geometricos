import Cilindro from "../model/Cilindro"

describe("Teste dos cálculos de área superficial e volume", ()=>{
    test("Cálculo do Volume",()=>{
        const raio = 2
        const altura = 3
        const cilindro = new Cilindro(raio,altura)
        const volumeEsperado = 37.70 // π * 2² * 3 = 37.6991, arredondado para 37.70

        expect(cilindro.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })

    test("Cálculo da área superficial", ()=>{
        const raio = 2
        const altura = 3
        const cilindro = new Cilindro(raio,altura)
        const areaEsperada = 62.83 // (2 * π * 2²) + (2 * π * 2 * 3) = 62.83186, arredondado para 62.83

        expect(cilindro.calcularArea()).toBeCloseTo(areaEsperada,2)
    })
})