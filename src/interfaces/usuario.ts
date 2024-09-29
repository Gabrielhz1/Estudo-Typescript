interface Usuario {
    id: number | string;
    nome: string ; 
    email: string ; 
    ativo: boolean;
    senha?: string;
}

const profile:Usuario = {
    id:2525,
    nome: "Marcos Silva",
    email: "Marcos@empresa.com",
    ativo:false
};

console.log(profile)