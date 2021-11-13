//solucao 1

function verificarPalindromo1(string){
    if(!string)return;
    return  string.split("").reverse().join("") === string;

}


console.log("verificarPalindromo1",verificarPalindromo1("ama"));

 
//solucao 2
 function verificarPalindromo2(string){
    if(!string)return;
     
    for( let i = 0 ;  i<string.length; i++)
    {
        if(string[i] !== string[ string.length -1 -i])
        {
            return false;
        }

    }

    return true;
 }

 console.log("verificarPalindromo2",verificarPalindromo2("abba"));
