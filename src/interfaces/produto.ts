interface Produto {
    id:number;
    nome:string;
    descricao:string;
    preco:number;
    imagem:string;

}

const produto1:Produto = {
    id:1,
    nome:"Smartphone",
    descricao:"um smartphone super moderno",
    preco:2500,
    imagem:"imagem.jpeg"
};


/* Com a palavra reservada "Partial" todos os atributos obrigatórios se tornam opcionais. */
const produto2:Partial <Produto> = {
    id:1,
    nome:"Smartphone",
    descricao:"um smartphone super moderno",
    preco:2500,
};


