// 1- Imprime por consola el string 'Hello World'.
function exer1() {
  console.log('Hello World');
}

//2- Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
function exer2() {
  let variable1 = 'var1';
  const variable2 = 'var2';
  console.log(`variable1 es : ${variable1} y variable2 es: ${variable2}`);
}

//3- Cambia ahora el valor de una de las dos variables e imprime por consola.
function exer3() {
  variable1 = 'variable cambiada';
  console.log('variable1: ', variable1);
}

//4- Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
function exer4() {
  const sumando1 = 2,
    sumando2 = 3;
  console.log(`Suma de ${sumando1} + ${sumando2}=`, sumando1 + sumando2);
}

//5- Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
function exer5() {
  const greeting1 = 'Hello';
  const greeting2 = ' World';
  console.log(greeting1 + greeting2);
}

//6- Crea una función que imprima por consola el string 'Hello World'.
function exer6() {
  console.log('Hello World');
}

//7- Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
function exer7() {
  const number1 = prompt('Introduce el primer número');
  const number2 = prompt('Introduce el segundo número');
  console.log(
    `El resultado de ${number1} *  ${number2} es:`,
    number1 * number2
  );
}

//8- Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function exer8() {
  const number1 = prompt('Introduce el un número');
  console.log(`El cubo de ${number1} es: `, number1 ** 3);
}

//9- Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)
function exer9() {
  const base = prompt('Introduce la base del rectangulo');
  const altura = prompt('Introduce la altura del rectangulo');
  console.log('El area del rectangulo es: ', base * altura);
}

//10- Crea una función que imprima por consola un número al azar entre 0 y 10.
function exer10() {
  const randomNum = Math.round(Math.random() * 10);
  console.log(randomNum);
}

//11- Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después,
//pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números.
// Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino,
//imprime por consola que el usuario ha fallado seguido del número correcto.
function exer11() {
  const randomNum = Math.round(Math.random() * 10);
  const userNumber = prompt('Introduce un nº:');
  if (randomNum == userNumber) {
    console.log('Enhorabuena acertaste');
  } else {
    console.log(`Lo siento, el nº era ${randomNum} y no ${userNumber}`);
  }
}

//12- Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.
function exer12() {
  const userNumber = prompt('Introduce un nº:');
  console.log(pairOdd(userNumber));
}

//13- Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido.
//(ejemplo: 'casa' => 'asac).
function exer13() {
  const userText = prompt('Introduce un texto:');
  const reverText = reverse(userText);
  console.log('El texto invertido de:', userText, 'es', reverText);
}

//14- Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.
function exer14() {
  const userNumber = prompt('Introduce un nº:');
  console.log('La tabla de multiplicar del', userNumber, 'es:');
  for (var i = 1; i < 11; i++) {
    console.log(`${userNumber} por ${i} es ${userNumber * i}`);
  }
}

//15- Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.
function exer15() {
  const userNumber = prompt('Introduce un nº:');
  const isAPrimeNumber = isPrime(userNumber);
  if (isAPrimeNumber) {
    console.log('El nº', userNumber, 'es primo');
  } else {
    console.log('El nº', userNumber, 'no es primo');
  }
}

function pairOdd(number) {
  if (number % 2 === 0) return 'par';
  return 'impar';
}

function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return number !== 1;
}

function reverse(text) {
  const list = text.split('');
  const listReverse = list.reverse();
  let textReverse = listReverse.join('');
  return textReverse;
}
