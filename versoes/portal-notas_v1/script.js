var qtdNotas = 4;
var qtdAlunos = 2;

function calcular(){
    let notaParcial;
    let notaSoma;
    let mediaFinal;
    let situacao = '';
    let situacaoCor = '';
    for(let aluno = 1; aluno <= qtdAlunos; aluno++){
        notaParcial = 0;
        notaSoma = 0;
        mediaFinal = 0;
        //entrada dos dados
        for(let nota = 1; nota <= qtdNotas; nota++){
            notaParcial = Number(document.getElementById(`nota${nota}-${aluno}`).value);
            notaSoma = notaSoma + notaParcial;
        }
        //processamento dos dados
        mediaFinal = (notaSoma)/qtdNotas;
        if(mediaFinal >= 50){
            situacao = 'Aprovado';
            situacaoCor = 'green';
        }else if(mediaFinal >=45 && mediaFinal < 50){
            situacao = 'Recuperação';
            situacaoCor = 'yellow';
        }else if(mediaFinal < 45){
            situacao = 'Reprovado';
            situacaoCor = 'red';
        }
        //saida de dados
        document.getElementById(`media${aluno}`).innerText = mediaFinal;
        document.getElementById(`situacao${aluno}`).innerText = situacao;
        document.getElementById(`situacao${aluno}`).style.backgroundColor = situacaoCor;
    }
}
