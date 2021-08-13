const Deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//*const {nombre,apellido,poder, edad = 18} = Deadpool

//console.log(nombre + ' ' +  apellido + ' ' + poder + ' ' + edad)

//Another use 

function imprimeHeroe({nombre,apellido,poder, edad = 18}){
 console.log(nombre + ' ' +  apellido + ' ' + poder + ' ' + edad)
}

imprimeHeroe(Deadpool)

//destrucuracion de listas 
const heroes = ['Hulk', 'Flash', 'Batman']

const [,h2,] = heroes

console.log(h2)