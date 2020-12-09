

var alunos1 = ['Maria', 'Ana ', 'Carlos', 'Pedro'];
console.log(alunos1);

var nomes = document.querySelector('#idnome1');

nomes.textContent = alunos1[0];

var nomes = document.querySelector('#idnome2');

nomes.textContent = alunos1[1];

var nomes = document.querySelector('#idnome3');

nomes.textContent = alunos1[2];

var nomes = document.querySelector('#idnome4');

nomes.textContent = alunos1[3];

/////////////////////////////////////////////////////////

var lista = ['5,0', '2,0 ', '1,0', '3,0'];
console.log(lista);

var listas = document.querySelector('#idlista1');
listas.textContent = lista[0];
var listas = document.querySelector('#idlista2');
listas.textContent = lista[1];
var listas = document.querySelector('#idlista3');
listas.textContent = lista[2];
var listas = document.querySelector('#idlista4');
listas.textContent = lista[3];


var trabalho = ['5,0', '1,0 ', '1,0', '1,0'];
console.log(trabalho);

var trabalhos = document.querySelector('#idTrabalho1');
trabalhos.textContent = trabalho[0];
var trabalhos = document.querySelector('#idTrabalho2');
trabalhos.textContent = trabalho[1];
var trabalhos = document.querySelector('#idTrabalho3');
trabalhos.textContent = trabalho[2];
var trabalhos = document.querySelector('#idTrabalho4');
trabalhos.textContent = trabalho[3];


var prova = ['10,0', '8,0 ', '4,0', '6,0'];
console.log(prova);

var provas = document.querySelector('#idProva1');
provas.textContent = prova[0];
var provas = document.querySelector('#idProva2');
provas.textContent = prova[1];
var provas = document.querySelector('#idProva3');
provas.textContent = prova[2];
var provas = document.querySelector('#idProva4');
provas.textContent = prova[3];


var soma = ['20,0', '11,0 ', '6,0', '10,0'];
console.log(soma);

var somas = document.querySelector('#idSoma1');
somas.textContent = soma[0];
var somas = document.querySelector('#idSoma2');
somas.textContent = soma[1];
var somas = document.querySelector('#idSoma3');
somas.textContent = soma[2];
var somas = document.querySelector('#idSoma4');
somas.textContent = soma[3];

var media = ['10,0', '5.0 ', '3,0', '5,0'];
console.log(media);

var medias = document.querySelector('#idMedia1');
medias.textContent = media[0];
var medias = document.querySelector('#idMedia2');
medias.textContent = media[1];
var medias = document.querySelector('#idMedia3');
medias.textContent = media[2];
var medias = document.querySelector('#idMedia4');
medias.textContent = media[3];



/*for (i = 0; i < alunos.length; i++) {
    let sum = 0;
    let media = 0;
    let interacaoAlunos = alunos[i];
    sum = sum + interacaoAlunos.lista + interacaoAlunos.trabalho + interacaoAlunos.prova;
    media = (media + sum) / 2;

    console.log('${interacaoAlunos.nome} | Media ${media}');
}*/

//let button = '#salva' {

//}


/*function teste() {
    var novoParagrafo = document.createElement('p');

    var texto = document.createTextNode(' Este é o conteudo do paragrafo');
    novoParagrafo.appendChild(texto);

    console.log(novoParagrafo);

    var row = document.querySelector('div .row');

    console.log(row);

    row.appendChild(novoParagrafo);
}*/




//---------------------------------------------------------------
//adicionando o joao

var novaLinha = document.createElement('tbody');

var texto = document.createAttribute('<th>');
novaLinha.appendChild(texto);

console.log(novoParagrafo);

var tabela2 = document.querySelector('.tabela');

console.log(tabela2);

tabela2.appendChild(novaLinha);



// funcao remove uma linha da tabela
function removeLinha() {
    $("#remove").click(function () {
        $("tr.tbody4").remove();

        alert("O aluno(a) foi removido do sistema com sucesso.");
    });
}






//var soma1 = ;
//const sum = ['#idlista1', '#idTrabalho1', '#idProva1'];
//int soma = 0

//for int i=0; i<3; i++) {
//soma+=seuArray[i];
//}
//console.log(sum);
















//var soma = document.querySelector('#idSoma1');
//soma.textContent = sum1;


function funcaocancelar() {
    alert("Nao foi possivel inserir esse aluno(a)");
}


///var média = ['10', '5,5 ', '3', '5']                            console.log()


