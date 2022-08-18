Banco => Contas =>  conta.java
package Contas;

public class conta {
  public String Numero_conta;
  public String nome;
  public String cpf;
}

Banco => Instituicao =>  instituicao.java
package Instituicao;

public class Instituicao {
  public String Cnpj;
  public String nome;

}


App.java

import Contas.conta;
import Instituicao.instituicao;

public class App {
    public static void main(String[] args) throws Exception {
        conta contas = new conta();
        contas.Numero_conta = 123.559.882-0;
        cliente01.nome = "Pedro";
        cliente01.cpf = "555.222.777-12";
        Instituicao instituicao = new Instituicao();
        instituicao.Cnpj = 5595.8884.444.22;
        instituicao.nome = "Banco Do Brasil";
      

    }
}

