/**
Dicas:
●        Use um método de Array para remover o último valor do Array mensagemSecreta.
●        Você pode ler a documentação .pop() no MDN. 
●        Confira se o valor foi realmente removido do Array (você pode usar o console.log ) 
●        Adicione no final do Array mensagemSecreta as palavras a e programar (não esqueça de conferir se as palavras foram adicionadas corretamente ) 
●        Altere a palavra facilmente para a palavra certo
●        Você pode usar o método splice() ou mudar o valor do index do array que contém o valor facilmente para conter o valor certo.
●        Use um método de Array para remover o primeiro valor do Array.
●        Use um método de Array para adicionar a palavra Programação no início do Array.
●        Use um método de Array para remover os valores: 'consegue', 'certo', 'na', 'primeira', 'vez,' , e substituí-los pela palavra sabe.
●        Transforme todo o valor do Array em uma única string. Use o método join().
●        Final da Mensagem Secreta: Programação não é sobre o que você sabe, é sobre o que você pode descobrir. -2015, Chris Pine, Aprenda a programar. * 
 */
var mensagemSecreta = [
 'aprender', 
'não',      
'é',          
'sobre',     
'o',        
'que',      
'você',     
'consegue',    
              
'facilmente', 
'na',         
'primeira',  
'vez,',      
'mas',       
'sobre',      
'o',          
'que',        
'pode',       
'descobrir.', 
' - 2015',    
'Chris',     
'Pine',       
'Aprenda,',   
'JavaScript'] 

mensagemSecreta.pop();

mensagemSecreta.push('a','programar.');

mensagemSecreta[8] = 'certo';

mensagemSecreta.shift();

mensagemSecreta.unshift('Programação');

mensagemSecreta.splice(7,5);

mensagemSecreta.splice(6, 1, 'sabe,'); 

console.log(mensagemSecreta.join(' '));




