
function compareNumeros (num1, num2){
    if( !num1 || !num2 ) return "Defina os dois numero e eles nao podem ser zero (0)";
    
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
  }
  
  function criaPrimeiraFrase(num1,num2){
  
        let sao_iguais = '';
    
        if (num1 !== num2){
            sao_iguais = "não";
        }
    
        return `Os numero ${num1} e ${num2} ${sao_iguais} São iguais,`;
    
  }
  
  function criaSegundaFrase(num1, num2){
        const soma = num1 + num2;
        const compararCom10 = soma > 10;
        const compararCom20 = soma > 20;
        let resultado10 = 'menor';
        let resultado20 = 'menor';

        if (compararCom10 >10){
            resultado10 = "maior";
        }

        if (compararCom20 >20){
            resultado20 = "maior";
        }
      
      
      return `A soma dos numero ${num1} e ${num2} é ${soma}, Essa soma é ${resultado10} q 10  e ${resultado20} 20`;
  
  }

  console.log(compareNumeros(0,0));