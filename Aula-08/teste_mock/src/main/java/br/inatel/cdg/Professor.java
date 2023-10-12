package br.inatel.cdg;

import com.google.gson.annotations.SerializedName;

public class Professor {

    @SerializedName("nomeDoProfessor")
    private String nomeProfessor;

    @SerializedName("horarioDeAtendimento")
    private String horarioAtendimento;
    private String periodo;
    private String sala;
    private String[] predios;

    public Professor(String nomeProfessor, String horarioAtendimento, String periodo, String sala, String[] predio) {
        this.nomeProfessor = nomeProfessor;
        this.horarioAtendimento = horarioAtendimento;
        this.periodo = periodo;
        this.sala = sala;
        this.predios = predio;
    }

    public String getNomeProfessor() {
        return nomeProfessor;
    }

    public void setNomeProfessor(String nomeProfessor) {
        this.nomeProfessor = nomeProfessor;
    }

    public String getHorarioAtendimento() {
        return horarioAtendimento;
    }

    public void setHorarioAtendimento(String horarioAtendimento) {
        this.horarioAtendimento = horarioAtendimento;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
    }

    public String getSala() {
        return sala;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }

    public String[] getPredios() {
        return predios;
    }

    public void setPredios(String[] predio) {
        this.predios = predio;
    }


    //Metodo que pega onde o professor trabalha
    public String getPredio(String sala) {
        int salaEmInt = Integer.parseInt(sala);
        int predio = (int) Math.ceil(salaEmInt / 5);
        String resultado = Integer.toString(predio+1);
        return resultado;
    }

}
