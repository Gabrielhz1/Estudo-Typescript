import Carrinho from "../model/carrinho";

export default function RemoverItensZerados(carrinho:Carrinho):any {
    const itens = carrinho.itens.filter((item)=> { item.quantidade > 0;
        return {...carrinho , itens}
    })
}