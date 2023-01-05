"use strict";
/*
1 -  Todo projeto com TypeScript precisa de um arquivo de configuração

    $tsc --init

2 - No arquivo tsconfig.json gerado, definir o rootDir como "./src" (pasta src atual) e outDir como "./dist/js/"

    Agora ao digitar tsc no terminal o código TypeScript será compilado e gerado o JavaScript no diretório definido no outDir

    Para ficar compilando automaticamente:

    $tsc -w
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Definir tipos
let x = 10; // Utilizando annotation
x = 26;
console.log(x);
let y = 12; // inferencia (detecta automaticamente o tipo)
// -------------------------------------------------------
// tipos básicos, utilizar o tipo sempre com letra minúscula!
let firstName = "Daniel";
let age = 22;
const isAdmin = true;
// -- Array --
const myNumbers = [1, 2, 3];
myNumbers.push(8);
console.log(myNumbers);
console.log(myNumbers.length);
// -- Tupla --
// [] se usa para definir uma tupla também
let myTuple;
myTuple = [5, "umastring", ["string1", "string2"]];
// -- Dicionário -- object literals -> {prop: value} 
const user = {
    name: "João",
    age: 20,
};
let myDict = {
    tipo: "água",
    quantidade: 34,
    disponivel: true
};
console.log(myDict);
// myDict.tipo = 2    isso não fonciona por conta da tipagem por inferencia
// -- Any -- (Permite qualquer tipo, não recomendado de se usar)
let a = 0;
a = "teste";
a = true;
a = [];
// -- Union Type -- (Determinar mais de um tipo de dado em uma variável)
let id = "abcdef";
id = 10;
let id2;
id2 = "asdf";
id2 = 33;
// -- Enum --
// Ex: tamanhos de roupas
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camiseta = {
    name: "Polo",
    size: Size.G
};
console.log(camiseta); // Vai printar o valor do enum
// -- Literal Types -- (Determinar um valor como um tipo)
let teste;
// teste = "outrovalor"    vai dar erro, o único valor que pode ser atribuido é o próprio do tipo "algumvalor"
// pode ser usado para variáveis de estado, como:
let estado;
estado = null;
estado = "executando";
// ------------------------------------------------------------
// Funções
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 8));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Daniel"));
function logger(msg) {
    console.log(msg);
}
logger("Teste da função que não retorna nada");
// parametro opcional
function personName(first_name, last_name) {
    if (last_name) {
        console.log(`${first_name} ${last_name}`);
    }
    else {
        console.log(`${first_name}`);
    }
}
personName("Daniel", "Wzoreck");
personName("Julio");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 100, n2: 3 }));
// interfaces podem ser utilizadas em variáveis também
const varNumbers = {
    n1: 2,
    n2: 9
};
console.log(sumNumbers(varNumbers));
// Narrowing (checagem de tipos)
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log(`Foi recebido um booleano com o valor de: ${info}`);
}
doSomething(89);
doSomething(false);
// Generics (Passar parametros de qualquer tipo, similar ao Java)
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
showArraysItems([1, 2, 3, 4, 5, 6]);
showArraysItems(["A", "B", "C", "D", "E"]);
showArraysItems([true, false, true, false]);
// ------------------------------------------------------------------------------
// Classes
class User {
    constructor(name, role, age) {
        this.name = name;
        this.role = role;
        this.age = age;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    newAge(newAge) {
        this.age = newAge;
    }
}
const mario = new User("Mario", "Encanador", 32);
mario.showUserName();
mario.newAge(55);
console.log(mario);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const chevette = new Car("Chevrolet", 4);
console.log(chevette);
chevette.showBrand();
// Herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const supra = new SuperCar("Toyota", 4, "2JZ");
console.log(supra);
// Decorators - Para usar ir no arquivo tsconfig.json e descomentar "experimentalDecorators"
// Decorator para o método construtor - adiciona um id e data de criação automaticamente na hora de instanciação de um novo objeto cuja classe implementa o decorator
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const ana = new Person("Ana");
console.log();
console.log(ana);
