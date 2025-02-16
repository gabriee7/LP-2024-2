package org.example;

import org.example.Model.Pedido;
import org.example.Model.Produto;
import org.example.Model.RelatorioDeVendas;
import org.example.Service.PedidoService;
import org.example.Service.ProdutoService;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ProdutoService produtoService = new ProdutoService();
        PedidoService pedidoService = new PedidoService();
        RelatorioDeVendas relatorioVendas = new RelatorioDeVendas();

        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1 - Cadastrar Produto");
            System.out.println("2 - Cadastrar Pedido");
            System.out.println("3 - Listar Produtos");
            System.out.println("4 - Gerar Relatório de Vendas");
            System.out.println("9 - Sair");
            System.out.print("Escolha uma opção: ");
            int opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    System.out.print("Nome do Produto: ");
                    String nome = scanner.nextLine();
                    System.out.print("Preço: ");
                    double preco = scanner.nextDouble();
                    scanner.nextLine();
                    System.out.print("Categoria: ");
                    String categoria = scanner.nextLine();
                    produtoService.cadastrarProduto(nome, preco, categoria);
                    break;
                case 2:
                    Pedido pedido = new Pedido();
                    for (Produto p : produtoService.listarProdutos()) {
                        System.out.println(p.getNome());
                    }
                    System.out.print("Escolha um produto: ");
                    String produtoNome = scanner.nextLine();
                    System.out.print("Quantidade: ");
                    int quantidade = scanner.nextInt();
                    scanner.nextLine();
                    for (Produto p : produtoService.listarProdutos()) {
                        if (p.getNome().equalsIgnoreCase(produtoNome)) {
                            pedido.adicionarItem(p, quantidade);
                        }
                    }
                    pedidoService.criarPedido(pedido);
                    break;
                case 3:
                    produtoService.listarProdutos().forEach(System.out::println);
                    break;
                case 4:
                    relatorioVendas.gerarResumo();
                    break;
                case 9:
                    scanner.close();
                    return;
                default:
                    System.out.println("Opção inválida!");
            }
        }
    }
}