/**
 * @author alvaro.dias
 */
public class BlocoDeNotas {
    private String conteudo = "";

    /**
     * Método para definir o valor do atributo conteudo.
     *
     * @param conteudo String a ser armazenada no atributo conteudo.
     */
    public void escrever(String conteudo) {
        this.conteudo = conteudo;
    }

    /**
     * Método para definir o valor do atributo conteudo para "" (vazio).
     */
    public void apagar() {
        this.conteudo = "";
    }

    /**
     * Método para imprimir o valor do atributo conteudo.
     * Informa se o valor de conteudo for "" (vazio).
     */
    public void ler() {
        if(conteudo.isEmpty()) {
            System.out.println("O bloco de notas está vazio.");
        } else {
            System.out.println("Conteúdo: " + conteudo);
        }
    }

    public static void main(String[] args) {
        //Fluxo de Teste do programa:
        BlocoDeNotas bloco1 = new BlocoDeNotas();
        bloco1.escrever("Teste");
        bloco1.ler();
        bloco1.apagar();
        bloco1.ler();
    }
}
