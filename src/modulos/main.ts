import Carrinho from "./model/carrinho";
import RemoverItensZerados from "./functions/removerItens";
import { calcularTotal,calcularDesconto } from "./functions/calcularTotal";

const carrinhoOriginal: Carrinho = {
    itens: [
        { nome: 'Caneta', preco: 1.5, quantidade: 2 },
        { nome: 'Caderno', preco: 10, quantidade: 1 },
        { nome: 'Borracha', preco: 0.5, quantidade: 3 },
        { nome: 'Estojo', preco: 5, quantidade: 0 },
    ],
    cupom: 0.1,
    total: 0,
    totalComDesconto: 0,
};

const CarrinhoSemItensZerados =  RemoverItensZerados(carrinhoOriginal);
const CarrinhoComTotal = calcularTotal(CarrinhoSemItensZerados);
const CarrinhoComDesconto = calcularDesconto(CarrinhoComTotal);