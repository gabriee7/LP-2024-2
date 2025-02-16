package org.example.Repository;

import org.example.Model.Pedido;

import java.util.ArrayList;
import java.util.List;

public class PedidoRepository {
    private List<Pedido> pedidos;
    private static PedidoRepository instancia = null;

    private PedidoRepository(){
        this.pedidos = new ArrayList<>();
    }

    public static PedidoRepository getInstancia(){
        if(instancia == null)
            instancia = new PedidoRepository();

        return instancia;
    }

    public void adicionarPedido(Pedido pedido) {
        pedidos.add(pedido);
    }

    public List<Pedido> listarPedidos() {
        return new ArrayList<>(pedidos);
    }
}
