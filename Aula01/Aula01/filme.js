class Filme {

    constructor(titulo, ano, genero, durcao, assistido, avaliacao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.durcao = durcao;
        this.assistido = assistido;
        this.avaliacao = avaliacao;
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
}