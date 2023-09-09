class Filme2 {
    
    arrayFilme = [];

    constructor(titulo, ano, genero, durcao, assistido, avaliacao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.durcao = durcao;
        this.assistido = null;
        this.avaliacao = null;
    }

    adicionarFilme(filmes){
        this.arrayFilme.push(filmes)
    }

    marcarAssitido(assistido) {
        //push usado para adicionar valor em array
        // this.assistido.push(assistido); 
        this.assistido = assistido;
    }

    avaliar(nota) {
        //push usado para adicionar valor em array
        // this.avaliacao.push(nota);
        this.avaliacao = nota;
    }

    mostraInfo() {
        // console.log(
        //     `Filme: ${this.titulo}, 
        //     Lançamento: ${this.ano}, 
        //     Genero: ${this.genero}, 
        //     Duração: ${this.durcao}, 
        //     Assitido: ${this.assistido}, 
        //     Avaliação: ${this.avaliacao}`);

        for (let i = 0; i < this.arrayFilme.length; i++) {
            console.log(arrayList[i]); // Itera sobre todos os elementos
            console.log("aui");
        }     
    }
    
}

// npm install readline-sync
var readlineSync = require('readline-sync');

indice = 0;
menu = -1;

while(menu != 0){

    console.log('0 - Sair');
    console.log('1 - Adicionar filme');
    console.log('2 - Marcar filme como lido');
    console.log('3 - Avaliar filme');
    console.log('4 - Exibir lista de filmes');
    menu = parseInt(readlineSync.question("Digite o que deseja fazer: "));

    switch (menu) {
        case 0:
            console.log("Você saiu!");
            break;
        case 1:
            nome = readlineSync.question("Nome do filme: ");
            ano = parseInt(readlineSync.question("Ano do filme: "));
            genero = readlineSync.question("Genero do filme: ");
            durcao = readlineSync.question("Duracao: ");
            // assistido = readlineSync.question("Assistido (sim/nao): ");
            
            filme = new Filme2(nome, ano, genero, durcao);
            filme.adicionarFilme(filme);

            indice = indice + 1;

            break;
        
        case 2:
    
            filme = new Filme2();
            filme.marcarAssitido("Sim");
            break;
    
        case 3:
            filme = new Filme2();
            avaliacao = parseFloat(readlineSync.question("Avaliacao (0-10): "));
            filme.avaliar(avaliacao);
            break;
    
        case 4: 
            filme = new Filme2();
            filme.mostraInfo();
       
            break;    
        default:
            console.log("Opcao invalida!");
            break;
    }
}