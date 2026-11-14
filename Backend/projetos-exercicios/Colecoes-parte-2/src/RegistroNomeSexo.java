import java.util.Collections;
import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;

public class RegistroNomeSexo {
    static List<Pessoa> registroMasculino = new ArrayList<>();
    static List<Pessoa> registroFeminino = new ArrayList<>();

    public static void adicionarRegistro(String nome, String sexo) {
        if(sexo.equalsIgnoreCase("M") || sexo.equalsIgnoreCase("Masculino")) {
            registroMasculino.add(new Pessoa(nome, sexo));
        }
        else if(sexo.equalsIgnoreCase("F") || sexo.equalsIgnoreCase("Feminino")) {
            registroFeminino.add(new Pessoa(nome, sexo));
        }
        else
            System.out.println("Invalido");
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Digite o nome e sexo do novo registro (\"Fim\" para terminar):");

        while(true) {
            String entrada = s.nextLine();

            if(entrada.equalsIgnoreCase("Fim")) {
                break;
            }

            String[] novoRegistro = entrada.split(" ");
            adicionarRegistro(novoRegistro[0], novoRegistro[1]);
        }

        System.out.println("Lista do Registro Masculino:");
        if(registroMasculino.isEmpty()) {
            System.out.println("(vazia)");
        }
        else
            for(Pessoa p : registroMasculino) {
                System.out.println(p.nome);
            }
        System.out.println("Lista do Registro Feminino:");
        if(registroFeminino.isEmpty()) {
            System.out.println("(vazia)");
        }
        else
            for(Pessoa p : registroFeminino) {
                System.out.println(p.nome);
            }
    }
}
