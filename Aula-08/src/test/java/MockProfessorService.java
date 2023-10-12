import com.google.gson.Gson;
import org.example.professor.Professor;
import org.example.professor.ProfessorService;
import com.google.gson.Gson;
import java.util.ArrayList;

public class MockProfessorService implements ProfessorService {

    //Simulação de recuperação de uma lista do Servidor
    //Interface não depende da implementação de seus metodos
    private ArrayList<Professor> getProfessores() {
        String[] professoresJSON = {ProfessorConst.prof1, ProfessorConst.prof2, ProfessorConst.prof3, ProfessorConst.prof4, ProfessorConst.prof5};
        ArrayList<Professor> professores = new ArrayList<>();
        for (String profJSON: professoresJSON) {
            Gson gson = new Gson();
            Professor professor = gson.fromJson(profJSON, Professor.class);
            professores.add(professor);
        }
        return professores;
    }

    @Override
    public Professor busca(String nomeProfessor) {
        ArrayList<Professor> professores = getProfessores();
        for(Professor p: professores) {
            if(p.getNomeProfessor().equals(nomeProfessor)) {
                return p;
            }
        }
        return null;
    }


}
