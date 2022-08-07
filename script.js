/**Função troca Imagem */
function trocaImagem1(){
    document.getElementById('img_destaque').src='assets/vista-principal2.png'
}
function trocaImagem2(){
    document.getElementById('img_destaque').src='assets/vista-solado.png'
}
function trocaImagem3(){
    document.getElementById('img_destaque').src='assets/vista-superior.png'
}
function trocaImagem4(){
    document.getElementById('img_destaque').src='assets/vista-usual.png'
}


/* Botoes mais e menos */
var quanti = 0
var carrinho = 0

let itensNoCarrinho = document.querySelector('.itens_carrinho')
let quantidade = document.querySelector('.quanti')
let btnMenos = document.querySelector('.subt')
let btnMais = document.querySelector('.soma')

btnMenos.addEventListener('click', function(){
    if(quanti > 0){
        quanti --
        quantidade.innerHTML=quanti
    }
})

btnMais.addEventListener('click', function(){
    quanti ++
    quantidade.innerHTML=quanti
})

/* Botão comprar */
let btnComprar = document.querySelector('.btn_comprar')

btnComprar.addEventListener('click', function(){
    carrinho = quanti
    itensNoCarrinho.innerHTML = carrinho
})
