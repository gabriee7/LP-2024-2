package org.example.Model;

public class Produto {
    private String nome;
    private double preco;
    private String categoria;

    public Produto(String nome, double preco, String categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    public void setNome(String nome) { this.nome = nome; }
    public void setPreco(double preco) { this.preco = preco; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
    public String getNome() { return nome; }
    public double getPreco() { return preco; }
    public String getCategoria() { return categoria; }
    @Override
    public String toString() {
        return "Produto: " + nome + " - Preço: R$" + preco + " - Categoria: " + categoria;
    }
}
