//exercicio1
function alterarTexto() {
    let paragrafo = document.getElementById("texto");
    paragrafo.innerHTML = 'Novo texto ao clicar o botao!';
}

//exercicio3
const ListaNaoOrdenada = document.getElementById("ListaNaoOrdenada");
const adicionarItem = document.getElementById("adicionarItem");

function adiconarItem (){
    const itemNovo = document.createElement('li');
    itemNovo.innerHTML = 'item ';

    ListaNaoOrdenada.appendChild(itemNovo);
//remover
    itemNovo.addEventListener('click', function(){
        ListaNaoOrdenada.removeChild(itemNovo);
    })
    
}

//exercicio 4
const input = document.getElementById("input");
const button = document.getElementById("valor");
const paragrafoValor = document.getElementById("paragrafoInput");

function ObeterValor (){
    button.addEventListener('click', function(){
        const valor = input.value;
        //exibir resultado
        paragrafoValor.textContent =`${valor}`;
    })
}

//exercicio 5
const Botoa = document.getElementById("contador");
const paragrafoContador = document.getElementById("paragrafoContador");
let contador = 0;

function ValorContado(){
    Botoa.addEventListener('click', function(){
        contador++;

        paragrafoContador.textContent = contador;
    })
}


//exercicio 6
const OcultaMostrar = document.getElementById("OcultarMostrar");
const paragrafoVizual = document.getElementById("paragrafoVisual");

function MostraOcultar(){
    OcultaMostrar.addEventListener('click', function(){
        if(paragrafoVizual.style.display ==='none'){
            paragrafoVizual.style.display='block'
        }
        else{
            paragrafoVizual.style.display='none'
        }
    })
}


//exercicio 7
const imagem = document.getElementById("imagem");
const botaoImagem = document.getElementById("ImagemAltrada");
let imagemAtual = 1;


function AlterarImagem(){
    botaoImagem.addEventListener('click', function(){
        if(imagemAtual === 1){
            imagem.src = 'imagens/IMG-2.jpg';
            imagem.alt = 'IMG-2';
            imagemAtual = 2;
        }
        else{
            imagem.src = 'imagens/IMG-1.jpg';
            imagem.alt = 'IMG-1';
            imagemAtual = 1;
        }
    })
};


//exercicio 8
const Div8 =document.getElementById("botaoDoDiv8");
const DivExer8 = document.getElementById("exer8-1");

function AdicionaRemove(){
    Div8.addEventListener('click',function() {
        if(DivExer8.classList.contains('div8')){
        DivExer8.classList.remove('div8')
        }
        else{
            DivExer8.classList.add('div8')
        }
    })
}