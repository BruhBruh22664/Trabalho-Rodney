document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1; // Começa em 1rem
    // Opcional: Pegar o tamanho de fonte inicial do body se ele for definido no CSS
    // let estiloBodyComputado = window.getComputedStyle(document.body);
    // let tamanhoAtualFonte = parseFloat(estiloBodyComputado.fontSize) / parseFloat(estiloBodyComputado.getPropertyValue('font-size').replace('px', ''));


    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
});