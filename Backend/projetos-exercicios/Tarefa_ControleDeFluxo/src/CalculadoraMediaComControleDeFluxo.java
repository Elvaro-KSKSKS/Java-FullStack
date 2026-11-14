public class CalculadoraMediaComControleDeFluxo {

    public static double calcularMedia(double num1, double num2, double num3, double num4) {
        return (num1 + num2 + num3 + num4) / 4;
    }

    public static String definirResultado(double media) {
        if(media >= 7) {
            return "Aprovado";
        }
        else if(media >= 5) {
            return "De recuperação";
        }
        else
            return "Reprovado";
    }

    public static void main(String[] args) {
        System.out.println(definirResultado(calcularMedia(10, 6, 8, 9)));
    }

}
