package org.example.Model;

import org.example.Repository.PedidoRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RelatorioDeVendas {

    public void gerarResumo() {
        PedidoRepository pedidoRepository = PedidoRepository.getInstancia();
        List<Pedido> pedidos = pedidoRepository.listarPedidos();
        int totalPedidos = pedidos.size();
        double totalVendas = pedidos.stream().mapToDouble(Pedido::calcularTotal).sum();

        Map<String, Integer> produtoQuantidade = new HashMap<>();
        for (Pedido pedido : pedidos) {
            for (Item item : pedido.getItens()) {
                produtoQuantidade.merge(item.getProduto().getNome(), item.getQuantidade(), Integer::sum);
            }
        }

        String produtoMaisVendido = produtoQuantidade.entrySet().stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse("Nenhum produto vendido");

        System.out.println("Total de Pedidos: " + totalPedidos);
        System.out.println("Valor Total Vendido: " + totalVendas);
        System.out.println("Produto Mais Vendido: " + produtoMaisVendido);
    }
}
