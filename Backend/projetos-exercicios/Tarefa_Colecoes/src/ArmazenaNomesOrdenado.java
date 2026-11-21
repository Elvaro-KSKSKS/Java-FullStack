import java.util.Arrays;
import java.util.Scanner;

public class ArmazenaNomesOrdenado {
    static String[] nomes;

    public static void main(String[] args) {
        System.out.println("Digite nomes separados por vírgula e um espaço: ");
        Scanner s = new Scanner(System.in);

        nomes = s.nextLine().split(", ");
        Arrays.sort(nomes);
        System.out.println("Nomes em ordem alfabética: ");
        for (String nome : nomes) {
            System.out.println(nome);
        }
    }
}
