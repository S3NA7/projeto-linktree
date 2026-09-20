function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a img light
        img.setAttribute('src', './assets/AIAdsEngine.png')
    } else {
        //se tiver sem light mode, manter a img dark (padrão)
        img.setAttribute('src', './assets/AIAdsEngineDARK.png')
    }
}