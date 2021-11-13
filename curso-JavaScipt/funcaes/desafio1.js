const aluno =
[
    {
        nome: 'sergio',
        nota: 10,
        turma:'1B'
    },

    {
        nome: 'maria',
        nota: 9,
        turma:'1B'
    },
    
    {
        nome: 'eline',
        nota: 8,
        turma:'1B'
    },

    {
        nome: 'raab',
        nota: 4,
        turma:'1B'
    },
]




function alunoAprovados(aluno,media)
{   
    let aprovados = [];
    if(!aluno ===0);

    for(let i=0; i < aluno.length; i++){

      const {nota, nome}= aluno[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log("alunos aprovados", alunoAprovados(aluno,5));