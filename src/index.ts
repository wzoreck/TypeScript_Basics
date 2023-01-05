/* 
1 -  Todo projeto com TypeScript precisa de um arquivo de configuração

    $tsc --init

2 - No arquivo tsconfig.json gerado, definir o rootDir como "./src" (pasta src atual) e outDir como "./dist/js/"

    Agora ao digitar tsc no terminal o código TypeScript será compilado e gerado o JavaScript no diretório definido no outDir

    Para ficar compilando automaticamente:

    $tsc -w
*/


// Definir tipos
let x: number = 10 // Utilizando annotation

x = 26

console.log(x)

let y = 12 // inferencia (detecta automaticamente o tipo)

// -------------------------------------------------------

// tipos básicos, utilizar o tipo sempre com letra minúscula!
let firstName: string = "Daniel"
let age: number = 22
const isAdmin: boolean = true

// -- Array --
const myNumbers: number[] = [1, 2, 3]
myNumbers.push(8)
console.log(myNumbers)
console.log(myNumbers.length)

// -- Tupla --
// [] se usa para definir uma tupla também
let myTuple: [number, string, string[]]

myTuple = [5, "umastring", ["string1", "string2"]]

// -- Dicionário -- object literals -> {prop: value} 
const user: { name: string, age: number } = {
    name: "João",
    age: 20,
}

let myDict = {
    tipo: "água",
    quantidade: 34,
    disponivel: true
}

console.log(myDict)

// myDict.tipo = 2    isso não fonciona por conta da tipagem por inferencia

// -- Any -- (Permite qualquer tipo, não recomendado de se usar)
let a: any = 0
a = "teste"
a = true
a = []

// -- Union Type -- (Determinar mais de um tipo de dado em uma variável)
let id: string | number = "abcdef"
id = 10

// id = true    Não irá permitir tipos diferentes de string e number


// -- Type Alias -- (Criar um apelido para Union Types)
type myIdType = number | string

let id2: myIdType
id2 = "asdf"
id2 = 33

// -- Enum --
// Ex: tamanhos de roupas
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camiseta = {
    name: "Polo",
    size: Size.G
}

console.log(camiseta) // Vai printar o valor do enum

// -- Literal Types -- (Determinar um valor como um tipo)
let teste: "algumvalor"
// teste = "outrovalor"    vai dar erro, o único valor que pode ser atribuido é o próprio do tipo "algumvalor"

// pode ser usado para variáveis de estado, como:
let estado: "executando" | null

estado = null
estado = "executando"

// ------------------------------------------------------------

// Funções
function sum(a: number, b: number) {
    return a + b
}

console.log(sum(1, 8))

function sayHelloTo(name: string): string { // Tipando o retorno da função
    return `Hello ${name}`
}

console.log(sayHelloTo("Daniel"))

function logger(msg: string): void {
    console.log(msg)
}

logger("Teste da função que não retorna nada")

// parametro opcional
function personName(first_name: string, last_name?: string) {
    if (last_name) {
        console.log(`${first_name} ${last_name}`)
    } else {
        console.log(`${first_name}`)
    }
}

personName("Daniel", "Wzoreck")
personName("Julio")

// Interface
interface MathFunctionParams { // Interfaces podem ser reutilizadas
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) { // Com a interface somente será possível passar um objeto com dois números, coforme foi definido na interface
    return nums.n1 + nums.n2
}

console.log(sumNumbers({ n1: 100, n2: 3 }))

// interfaces podem ser utilizadas em variáveis também
const varNumbers: MathFunctionParams = {
    n1: 2,
    n2: 9
}

console.log(sumNumbers(varNumbers))

// Narrowing (checagem de tipos)
function doSomething(info: number | boolean): void {
    if (typeof info === "number") {
        console.log(`O número é ${info}`)
        return
    }

    console.log(`Foi recebido um booleano com o valor de: ${info}`)
}

doSomething(89)
doSomething(false)

// Generics (Passar parametros de qualquer tipo, similar ao Java)
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`)
    })
}

showArraysItems([1, 2, 3, 4, 5, 6])
showArraysItems(["A", "B", "C", "D", "E"])
showArraysItems([true, false, true, false])

// ------------------------------------------------------------------------------

// Classes
class User {
    name
    role
    age

    constructor(name: string, role: string, age: number) { // Tipa os atributos da classe no construtor
        this.name = name
        this.role = role
        this.age = age
    }

    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`)
    }

    newAge(newAge: number) {
        this.age = newAge
    }
}

const mario = new User("Mario", "Encanador", 32)

mario.showUserName()
mario.newAge(55)
console.log(mario)

// Interfaces em Classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }
}

const chevette = new Car("Chevrolet", 4)
console.log(chevette)
chevette.showBrand()

// Herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: string) {
        super(brand, wheels)
        this.engine = engine
    }
}

const supra = new SuperCar("Toyota", 4, "2JZ")

console.log(supra)

// Decorators - Para usar ir no arquivo tsconfig.json e descomentar "experimentalDecorators"

// Decorator para o método construtor - adiciona um id e data de criação automaticamente na hora de instanciação de um novo objeto cuja classe implementa o decorator
function BaseParameters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const ana = new Person("Ana")

console.log()
console.log(ana)
