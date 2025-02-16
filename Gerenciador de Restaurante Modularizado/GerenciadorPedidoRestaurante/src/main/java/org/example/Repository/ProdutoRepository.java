package org.example.Repository;

import org.example.Model.Produto;

import java.util.ArrayList;
import java.util.List;

public class ProdutoRepository {
    private List<Produto> produtos;
    private static ProdutoRepository instancia = null;

    private ProdutoRepository(){
        this.produtos = new ArrayList<>();
    }

    public static ProdutoRepository getInstancia(){
        if (instancia == null)
            instancia = new ProdutoRepository();

        return instancia;
    }

    public void adicionarProduto(Produto produto) {
        produtos.add(produto);
    }

    public List<Produto> listarProdutos() {
        return this.produtos;
    }
}
