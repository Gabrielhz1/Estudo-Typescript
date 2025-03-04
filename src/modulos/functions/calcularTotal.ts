import Carrinho from '../model/carrinho';
import ItemCarrinho from '../model/itemCarrinho';

export function calcularTotal(carrinho: Carrinho): Carrinho {
    const total = carrinho.itens.reduce((total: number, item: ItemCarrinho) => {
        const totalItem = item.preco * item.quantidade;
        return total + totalItem;
    }, 0);
    return { ...carrinho, total };
}

export function calcularDesconto(carrinho: Carrinho): Carrinho {
    return {
        ...carrinho,
        totalComDesconto: carrinho.total - carrinho.total * (carrinho.cupom ?? 0),
    };
}