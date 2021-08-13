const empleados = [
    {
        id:1,
        nombre:'Fernando'    },
    {
        id:2,
        nombre:'Alejandro'
    },
    {
        id:3,
        nombre:'Milena'
    }
]

const salarios = [
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:1500
    },
]

const getEmpleado = (id) => {
    
    return new Promise((resolve, reject) => {
        
        const empleado = empleados.find((each) => each.id === id)?.nombre

        empleado ? resolve(empleado) : reject(`El empleado con id: ${id} no existe`)
    })

}

const getSalario = (id) => {
    
    return new Promise((resolve,reject)=>{
        
        const salario = salarios.find((each) => each.id === id)?.salario

        salario ? resolve(salario) : reject(`El salario con id: ${id} no existe`)
    })
    
}
const id =2
let nombre
getEmpleado(id)
    .then((empleado)=> {
        nombre = empleado
        return getSalario(id)
    })
    .then((salary)=> console.log('El salario de', nombre, 'es', salary, 'euros'))
    .catch((err) => console.log(err))
/*getSalario(id)
    .then((salario)=>console.log(salario))
    .catch((err)=> console.log(err))*/