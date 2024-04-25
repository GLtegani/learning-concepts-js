// SYMBOLS
let test = BigInt(45435435435453);
console.log(test)

// Symbol é usado para criar objetos unicos e imutaveis
const mySymbol = Symbol('Olá');
const teste = 'Olá';

if(mySymbol == teste) {
   console.log('é igual');
} else {
   console.log('não é igual');
};

// CLASSES AND PROTOTYPE INHERIT
class Animal {
   constructor(name, race, age) {
      this.name = name;
      this.race = race;
      this.age = age;
   };

   sayHello() {
      if(this.name == undefined || this.race == undefined || this.age == undefined) {
         console.log(`Define everything about the animal ${this.name}`);
      } else {
         console.log(`Name: ${this.name}, Race: ${this.race}, Age: ${this.age}`);
      };
   };
};

const animal1 = new Animal('Dog', 'bulldog', 16);
const animal2 = new Animal('Tiger');

animal1.sayHello();
animal2.sayHello();

// KEYED COLLECTIONS

const myObject = {
   teste: 'Olá',
};

// Maps são úteis quando as keys são desconhecidas na hora da compilação ou 
// quando você precisa preservar a ordem de inserção

const myMap = new Map();
myMap.set('teste', 'Mundo');
myMap.set('teste2', 'mundo');

console.log(myMap);
console.log(myMap.get(`teste`));

// Sets armazenam um unico valor e não armazena caso seja duplicado
const mySet = new Set();
mySet.add('teste1');
mySet.add('teste1');
mySet.add('teste2', 'Não armazena duplicados');
console.log(mySet);

// FOR IN E FOR OF
// O for...in é usado para iterar sobre as propriedades enumeráveis de um objeto. Ele percorre todas as propriedades enumeráveis de um objeto e seus protótipos herdados, iterando sobre as chaves (nomes das propriedades) em vez dos valores.
// Aqui está um exemplo de uso do for...in:
// javascript
const objeto = { a: 1, b: 2, c: 3 };

for (let chave in objeto) {
    console.log(chave); // Imprime: 'a', 'b', 'c'
    console.log(objeto[chave]); // Imprime: 1, 2, 3
}
// É importante ter cuidado ao usar for...in, pois ele pode iterar sobre propriedades que estão no protótipo do objeto, o que pode não ser o comportamento desejado.

// O for...of é usado para iterar sobre objetos iteráveis, como arrays, strings, Map, Set, etc. Ele percorre os valores dos elementos, em vez das chaves ou índices como o for...in.
// Aqui está um exemplo de uso do for...of com um array:
// javascript

const array = [1, 2, 3];

for (let valor of array) {
    console.log(valor); // Imprime: 1, 2, 3
}
// O for...of é mais intuitivo e fácil de usar quando você precisa apenas dos valores e não das chaves ou índices.
// Em resumo, enquanto o for...in é usado para iterar sobre as chaves de um objeto, o for...of é usado para iterar sobre os valores de uma coleção iterável, como um array.


// TRY CATCH
const PersonData = {
   name: 'Gabriel',
   age: 17,
   gender: 'Male',
   weight: '80kg',
   height: '1.74'
};

try {
   if(!PersonData.name) {
      throw new SyntaxError('Name cannot be empty or null')
   };
   console.log(`Hello ${PersonData.name}`);
} catch(e) {
   console.error(`JSON ERROR: ${e}`)
};