class Filme {

    constructor(titulo, ano, genero, durcao, assistido, avaliacao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.durcao = durcao;
        this.assistido = null;
        this.avaliacao = null;
    }

    mostraInfo() {
        console.log(
            `Filme: ${this.titulo}, 
            Lançamento: ${this.ano}, 
            Genero: ${this.genero}, 
            Duração: ${this.durcao}, 
            Assitido: ${this.assistido}, 
            Avaliação: ${this.avaliacao}`);
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
}

const filme1 = new Filme('Homem de Ferro', 2010, 'Ação','2h:10');
const filme2 = new Filme('Homem Aranha', 2015, 'Ação', '1h:50');

// filme1.marcarAssitido(true);
filme1.avaliar(10);
filme1.mostraInfo();

filme2.marcarAssitido(false);
filme2.avaliar(10);
filme2.mostraInfo();