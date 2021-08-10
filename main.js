let notas = [7, 8, 7, 8];

// Questão 1
function media(notas){
    let somatorio = notas[0];

    for(let i = 1; i < notas.length; i++){
        somatorio += notas[i];
        console.log(somatorio);
    }

    media = somatorio / notas.length;
    console.log(media);
}

// Questão 2
function exibirNotas(notas){
    let somatorio = 0;
    
    for(let i = 0; i < notas.length; i++){
        console.log(`${i+1}º Bimestre: ${notas[i]}`);
        somatorio += notas[i];
    }

    media = somatorio / notas.length;

    console.log(`Média: ${somatorio / notas.length}`);
    if(media < 7){
        console.log('Infelizmente você não foi aprovado.');
    } else{
        console.log('Parabéns, você foi aprovado!');
    }
}

// media(notas);
exibirNotas(notas);