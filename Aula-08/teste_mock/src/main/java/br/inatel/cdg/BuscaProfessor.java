package br.inatel.cdg;

import com.google.gson.Gson;

public class BuscaProfessor {
    private ProfessorService professorService;

    //Passa a Interface via construtor
    public BuscaProfessor(ProfessorService professorService) {
        this.professorService = professorService;
    }

    public Professor buscaProfessor(String nomeProfessor) {
        return professorService.busca(nomeProfessor);
    }

}
