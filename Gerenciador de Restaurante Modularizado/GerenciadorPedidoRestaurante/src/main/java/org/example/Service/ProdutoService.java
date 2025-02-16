package org.example.Service;

import org.example.Model.Produto;
import org.example.Repository.ProdutoRepository;

import java.util.List;

public class ProdutoService {
    private ProdutoRepository produtoRepository;

    public ProdutoService() {
    }

    public void cadastrarProduto(String nome, double preco, String categoria) {
        produtoRepository = ProdutoRepository.getInstancia();
        produtoRepository.adicionarProduto(new Produto(nome, preco, categoria));
    }

    public List<Produto> listarProdutos() {
        produtoRepository = ProdutoRepository.getInstancia();
        return produtoRepository.listarProdutos();
    }
}
