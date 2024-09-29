interface Especificacoes {
    marca:string;
    modelo:string;
    placaDeVideo:string;
    memoria:string;
    processador:string;
    armazenamento:string;
    [extra:string]: string | number | boolean;
}

/* Com o atributo extra, eu consigo passar atributos extras para a variável 
computador mesmo esses atributos não 
estando presente na interface "Especificacoes"  */

let computador:Especificacoes = {
    marca:'Dell',
    modelo:'Inspiron 15 3000 ',
    placaDeVideo:'Intel UHD graphics 620',
    memoria:'8 GB',
    processador:'intel core i5 ' ,
    armazenamento:'256 GB SSD',
    bluetooth:true,
    Hdmi:true
    
}


