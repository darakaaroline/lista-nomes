const nomes = [
    'DARA KAROLINE',
    'THAIS',
    'BRUNA OLIVEIRA',
    'JOSÉ SILVA',
    'DEUZA',
    'DOUGLAS FERREIRA',
    'THAMIRES',
    'HERTA VIEIRA',
    'RAYSSA SATO',
    'ANDRÉ',
    'PEDRO',
    'JÉSSICA BARBOSA'

]

function mostrarNomes(listaNomes) {
    const ul = document.querySelector('#taskList')
    ul.innerHTML = ''
    listaNomes.forEach(nomes =>{
        const li = `<li>${nomes}</li>`
        ul.innerHTML += li
    })
    

}

function filtrarNomes() {
    const textoFiltrado = document.querySelector('#searchInput').value.toUpperCase()
    
    const nomesFiltradas =  nomes.filter(nomes => nomes.includes
        (textoFiltrado))
        mostrarNomes(nomesFiltradas)
}

mostrarNomes(nomes)



