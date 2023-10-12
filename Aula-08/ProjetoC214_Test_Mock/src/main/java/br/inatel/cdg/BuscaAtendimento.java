package br.inatel.cdg;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class BuscaAtendimento {

    AtendimentoService atendimentoService;

    public BuscaAtendimento(AtendimentoService service){
        this.atendimentoService = service; 
    }

    public AtendimentoProfessores buscaAtendimento(int horarioDeAtendimento){
        
        String atendimentoJson = atendimentoService.busca(horarioDeAtendimento);

       
        JsonObject jsonObject = JsonParser.parseString(atendimentoJson).getAsJsonObject();

        return new AtendimentoProfessores (jsonObject.get("nomeDoProfessor").getAsString(),
                jsonObject.get("horarioDeAtendimento").getAsDouble(),
                jsonObject.get("periodo").getAsDouble(),
                jsonObject.get("sala").getAsDouble(),
                jsonObject.get("predio").getAsJsonArray());
    }

    public boolean verificaArrayListPredio(int sala){
        boolean predio = atendimentoService.predio(sala);

        if (predio){
            return true;
        }else{
            return false;
        }
    }

}
