package org.example.Service;

import org.example.Model.Pedido;
import org.example.Repository.PedidoRepository;

import java.util.List;

public class PedidoService {
    private PedidoRepository pedidoRepository;

    public PedidoService() {
    }

    public void criarPedido(Pedido pedido) {
        pedidoRepository = pedidoRepository.getInstancia();
        pedidoRepository.adicionarPedido(pedido);
    }

    public List<Pedido> listarPedidos() {
        pedidoRepository = pedidoRepository.getInstancia();
        return pedidoRepository.listarPedidos();
    }
}
