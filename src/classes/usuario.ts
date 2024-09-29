class Usuario {
    id: number | string;
    nome: string ; 
    email: string ; 
    ativo: boolean;
    senha?: string;

    constructor(id:string, nome:string, email:string,ativo:boolean, senha:string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.ativo = ativo;
        this.senha= senha;
    }
}

const Usuario1:Usuario = new Usuario("1","marcos","marcos@trabalho.com", true , '1234')

