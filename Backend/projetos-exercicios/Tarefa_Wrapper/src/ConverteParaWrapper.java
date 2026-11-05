import java.util.Scanner;

public class ConverteParaWrapper {

    public static Double doubleParaDouble(double valPrimitivo) {
        Double valWrapper = valPrimitivo;
        return valWrapper;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um número: ");
        double numero = scanner.nextDouble();
        Double valConvertido = doubleParaDouble(numero);

        System.out.println("Valor convertido: " + valConvertido);
        scanner.close();
    }
}
