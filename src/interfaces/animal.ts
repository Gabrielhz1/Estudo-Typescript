interface Animal {
    nome:string;
    tipo: "terrestre" | "aquático";
    domestico:boolean;
}




/*  a   propriedade "extends" "herda" os atributos de outra interface, 
    neste caso a interface Pet herda os atributos da interface Animal*/
       
interface Pet extends Animal {
    dono:string;

}

const animal1:Pet = {
    nome:"rex",
    tipo:"terrestre",
    domestico:true,
    dono:"Victor"
}


const cavalo:Pet = {
    domestico:true,
    nome:"pé de pano",
    tipo:"terrestre",
    dono:"Antonio"
   
}