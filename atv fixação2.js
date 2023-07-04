//*1)Criar um array com valores numéricos:  25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.
//a)Coloque eles em ordem crescente.
//b)Exibir no Console.

var valores = [ '25', '23', '11', '55', '30',  '6',' 4', '21', '34', '89', '56'];
valores.sort();
console.log(valores);

//2)      Dado um array com os times: Santos, Sport, Santa Cruz, Vasco, Chapecó.
//a)Adicionar o time "Flamengo" no final do array.
//b)Remover o time que está no início do array.
//c)Adicionar o time "Palmeiras" no início do array.
//d)Adicionar o time "Grêmio" no final do array.
//e)Adicionar os times "São Paulo" e "Santos" do início do array.
//f)Exibir, no console, a quantidade de elementos no array.
//g)Remover o time que está no final do array.
//h)Exibir, no console, em ordem crescente os times que estão no array.

var times = ['Santos', 'Sport', 'Santa Cruz', 'Vasco', 'Chapecó'];
times.push('Flamengo'); //adiciona item no final do array
console.log(times);

times.shift(); // remove o item que está no início da array
console.log(times);

times.unshift('Palmeiras'); //adiciona item no início da array 
console.log(times);

times.push('Grêmio');
console.log(times);

times.unshift('Santos'); 
console.log(times);

times.unshift('São Paulo'); 
console.log(times);

times.pop(7); //remove o último item do array
console.log(times);

times.sort();
console.log(times);

//3)      Criar um array contendo 7 atividades que você faz durante o dia.
//a)Exibir no console as atividades na ordem inversa.
//b)Selecionar e exibir no console, os elementos nas posições 3 e 6.
//c)Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
//d)Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.

var atividades = ['tomar café', 'banho', 'estudar', 'ler', 'dormir', 'almoçar', 'descansar'];
console.log(atividades.reverse());// reverter a ordem dos itens da array

var posicao3 = atividades[3];
console.log(atividades);

var posicao6 = atividades[6];
console.log(atividades);

console.log(atividades.join(' - '));

var atividade_fav = ['escutar música', 'comer'];
var todas_atividades =
atividades.concat(atividade_fav);

console.log(todas_atividades);

//4)      Criar um array com o nome de 5 cidades.
//a)Exibir, no console, em ordem crescente os times que estão no array.
//b)Remover a cidade que está no início do array.
//c)Remover a cidade que está no final do array.
//d)Exibir, no console, em ordem crescente os times que estão no array.

var cidades = ['recife', 'paulista', 'Olinda', 'Jaboatão dos guararapes', 'nazaré da mata']

cidades.sort();
console.log(cidades);

cidades.shift();
console.log(cidades);

cidades.pop(4);
console.log(cidades);

cidades.sort();
console.log(cidades);





