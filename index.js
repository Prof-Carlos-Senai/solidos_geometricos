import Cone from './model/Cone.js'
import Cubo from './model/Cubo.js'
import Cilindro from './model/Cilindro.js'
import Paralelepipedo from './model/Paralelepipedo.js'

const formulario = document.getElementById('form')
const selectSolido = document.getElementById('solido')
const parametros = document.getElementById('parametros')
const resultado = document.getElementById('resultado')

function atualizarParametros(solid){
    if(solid === "Cone"){
        parametros.innerHTML = ` `
        parametros.innerHTML += ` 
            <label for="raioCone">Raio:</label>
            <input type="text" id="raioCone" required />
            <label for="alturaCone">Altura:</label>
            <input type="text" id="alturaCone" required />
        `
    }else if(solid === "Cubo"){
        parametros.innerHTML = ` `
        parametros.innerHTML += `
            <label for="lado">Lado:</label>
            <input type="text" id="lado" required />
        `
    }else if(solid === "Cilindro"){
        parametros.innerHTML = ` `
        parametros.innerHTML += `
            <label for="raioCilindro">Raio:</label>
            <input type="text" id="raioCilindro" required />
            <label for="alturaCilindro">Altura:</label>
            <input type="text" id="alturaCilindro" required />
        `
    }else if(solid === "Paralelepipedo"){
        parametros.innerHTML = ` `
        parametros.innerHTML += ` 
            <label for="largura">Largura:</label>
            <input type="text" id="largura" required />
            <label for="altura">Altura:</label>
            <input type="text" id="altura" required />
            <label for="profundidade">Profundidade:</label>
            <input type="text" id="profundidade" required />
        `
    }

}

function calcularResultados(solid){
    let objetoSolido;

    if (solid === 'Cone') {
        const raio = Number(document.getElementById('raioCone').value)
        const altura = Number(document.getElementById('alturaCone').value)
        objetoSolido = new Cone(raio, altura)
    } else if (solid === 'Cubo') {
        const lado = Number(document.getElementById('lado').value)
        objetoSolido = new Cubo(lado)
    } else if (solid === 'Cilindro') {
        const raio = Number(document.getElementById('raioCilindro').value)
        const altura = Number(document.getElementById('alturaCilindro').value)
        objetoSolido = new Cilindro(raio, altura)
    } else if (solid === 'Paralelepipedo') {
        const largura = Number(document.getElementById('largura').value)
        const altura = Number(document.getElementById('altura').value)
        const profundidade = Number(document.getElementById('profundidade').value)
        objetoSolido = new Paralelepipedo(largura, altura, profundidade)
    }

    const volume = objetoSolido.calcularVolume()
    const area = objetoSolido.calcularArea()

    console.log(volume,area)

    resultado.innerHTML = ` `
    resultado.innerHTML += `
        <p> Solido Geometrico Calculado: ${solid} </p>
        <br>
        <p> Volume: ${volume.toFixed(2)} cm³ </p>
        <p> Área: ${area.toFixed(2)} cm² </p>
        <br>    
    `
}

// -------- Principal -----------

const valorInicial = selectSolido.value
console.log(valorInicial)

atualizarParametros(valorInicial)

selectSolido.addEventListener('change', (e)=>{
    const solidoEscolhido = e.target.value 
    console.log(solidoEscolhido)
    atualizarParametros(solidoEscolhido)
})

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const solidoEscolhido = selectSolido.value
    console.log(solidoEscolhido)

    calcularResultados(solidoEscolhido)

})