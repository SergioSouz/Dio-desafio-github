// Atribuição de valores 


// var é declarada com Camel Case  ('nomePrincipalVar')

var a = 1 ; // aqui to dando uma valor (1) a variavel A ;
var b = 2 ; // aqui to dando uma valor (2) a variavel B ;

console.log("var a dentro do escopo global  =  ",a);
console.log("var b dentro do escopo global  =  ",b);

console.log("");
console.log("");


if(a===1){
    var a = 11; // var tem escopo de global 
                // aqui to dando uma valor (11) a variavel A 
                // porem ele estar reescrevendo a variavel (a) e dando um novo valor e apagando o valor atribuido anteriomente


    let b = 22; // let tem escopo de bloco 
                // aqui to dando uma valor (22) a variavel B 
                // aqui ela estar reescrevendo a variavel (B) e dando um novo valor (22) 
                // porem quando sair do bloco ela volta ao valor anterior (2) 
    
    console.log("var a dentro do escopo do if  =  ",a);
    console.log('let b dentro do escopo do if  =  ',b);
}

