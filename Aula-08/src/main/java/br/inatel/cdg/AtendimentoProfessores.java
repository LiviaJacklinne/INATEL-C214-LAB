package br.inatel.cdg;

import com.google.gson.JsonArray;

import java.lang.reflect.Array;

public class AtendimentoProfessores {

    private String nomeDoProfessor;
    private double horarioDeAtendimento;
    private double periodo;
    private double sala;
    private JsonArray predio;

    public AtendimentoProfessores(String nomeDoProfessor, double horarioDeAtendimento, double periodo, double sala, JsonArray predio) {
        this.nomeDoProfessor = nomeDoProfessor;
        this.horarioDeAtendimento = horarioDeAtendimento;
        this.periodo = periodo;
        this.sala = sala;
        this.predio = predio;
    }

    public String getNomeDoProfessor() {
        return nomeDoProfessor;
    }

    public void setNomeDoProfessor(String nomeDoProfessor) {
        this.nomeDoProfessor = nomeDoProfessor;
    }

    public double gethorarioDeAtendimento() {
        return horarioDeAtendimento;
    }

    public void sethorarioDeAtendimento(double horarioDeAtendimento) {
        this.horarioDeAtendimento = horarioDeAtendimento;
    }

    public double getperiodo() {
        return periodo;
    }

    public void setperiodo(double periodo) {
        this.periodo = periodo;
    }

    public double getsala() {
        return sala;
    }

    public void setsala(Double sala) {
        this.sala = sala;
    }

    public JsonArray getpredio() {
        return predio;
    }

    public void setpredio(JsonArray predio) {
        this.predio = predio;
    }

}
