// ex001
// var idade = 67
// console.log(`Você tem ${idade} anos.`)
// if(idade < 16){
//     console.log(`Não vota`)
// }else if(idade < 18 || idade > 65){
//     console.log('Voto opcional')
// }else{
//     console.log('Voto e obrigatorio')
// }


//ex002

var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break;

    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;  
    case 3:
        console.log('Quarta')
        break;  
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sabado')
        break;
    default:
        console.log('[ERRO] Dia invalido!')
        break;
}