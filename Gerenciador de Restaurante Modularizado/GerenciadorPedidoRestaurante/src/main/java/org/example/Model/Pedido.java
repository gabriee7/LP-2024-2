package org.example.Model;

import java.util.ArrayList;
import java.util.List;

public class Pedido {
    private static int contadorId = 1;
    private int id;
    private List<Item> itens;

    public Pedido() {
        this.id = contadorId++;
        this.itens = new ArrayList<>();
    }

    public void adicionarItem(Produto produto, int quantidade) {
        itens.add(new Item(produto, quantidade));
    }

    public double calcularTotal() {
        return itens.stream().mapToDouble(Item::calcularSubtotal).sum();
    }

    public List<Item> getItens() { return itens; }
}
