import Cubo from "../model/Cubo"

describe("Teste dos cálculos de área superficial e volume", ()=>{
    test("Cálculo do Volume", ()=>{
        const lado = 2
        const cubo = new Cubo(lado)

        const volumeEsperado = 8 // 2³ = 8
        expect(cubo.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })

    test("Cálculo da área superficial", ()=>{
        const lado = 2
        const cubo = new Cubo(lado)
        const areaEsperada = 24 // 6 * 2² = 24

        expect(cubo.calcularArea()).toBeCloseTo(areaEsperada,2)
    })
})