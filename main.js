// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World");


// // Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 2;
let numberTwo = 4;

alert(`A soma das duas variáveis é: ${numberOne + numberTwo}`);


// // Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let numberOrNo = 2;

if(typeof numberOrNo === "number") {
  alert("É um número");
} else {
  alert("Não é um número");
}


// // Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let stringOrNo = "teste";

if(typeof stringOrNo === "string") {
  alert("É uma string");
} else {
  alert("Não é uma string");
}


// // Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let booleanOrNo = true;

if(typeof booleanOrNo === "boolean") {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}


// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
numberOne = 3;
numberTwo = 1;

alert(`O valor da subtração foi: ${numberOne - numberTwo}`);


// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
numberOne = 5;
numberTwo = 5;

alert(`O valor da multiplicação foi: ${numberOne * numberTwo}`);


//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
numberOne = 2;
numberTwo = 2;

alert(`O valor da divisão foi: ${numberOne / numberTwo}`);


// Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let evenOrNo = 4;

if(evenOrNo % 2 === 0) {
  alert("É um número par");
} else {
  alert("Não é um número par");
}


//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let oddOrNo = 4;

if(oddOrNo % 2 !== 0) {
  alert("É um número ímpar");
} else {
  alert("Não é um número ímpar");
}