function trocarImagem(elementoClicado, caminhoDaNovaImagem) {
    document.getElementById('imagem-principal').src = caminhoDaNovaImagem;
    let miniaturas = document.querySelectorAll('.miniatura');
    miniaturas.forEach(img => img.classList.remove('miniatura-ativa'));
    elementoClicado.classList.add('miniatura-ativa');
}

function selecionarOpcao(botaoClicado, tipo, valor, caminhoImagem) {
    let botoes = document.querySelectorAll('.btn-' + tipo);
    botoes.forEach(btn => btn.classList.remove('ativo'));
    botaoClicado.classList.add('ativo');
    if (tipo === 'tamanho') {
        document.getElementById('texto-tamanho').innerText = 'Tamanho Selecionado: ' + valor;
    }
    if (tipo === 'modelo' && caminhoImagem) {
        document.getElementById('imagem-principal').src = caminhoImagem;
        let miniaturas = document.querySelectorAll('.miniatura');
        miniaturas.forEach(img => {
            img.classList.remove('miniatura-ativa');
            if (img.getAttribute('src') === caminhoImagem) {
                img.classList.add('miniatura-ativa');
            }
        });
    }
}