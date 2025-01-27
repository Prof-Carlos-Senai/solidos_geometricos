import Paralelepipedo from "../model/Paralelepipedo"

describe("Teste dos cálculos de área superficial e volume", ()=>{
    test("Cálculo do Volume", ()=>{
        const largura = 2
        const altura = 3
        const profundidade = 4
        const paralelepipedo = new Paralelepipedo(largura,altura,profundidade)
        const volumeEsperado = 24 // 2 * 3 * 4 = 24

        expect(paralelepipedo.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })

    test("Cálculo da área superficial", ()=>{
        const largura = 2
        const altura = 3
        const profundidade = 4
        const paralelepipedo = new Paralelepipedo(largura,altura,profundidade)
        const areaEsperada = 52 // 2 * (2 * 3 + 2 * 4 + 3 * 4) = 52

        expect(paralelepipedo.calcularArea()).toBeCloseTo(areaEsperada,2)
    })
})