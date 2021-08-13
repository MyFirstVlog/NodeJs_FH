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

const getUsuarioInfo = async (id) =>{
    
    try {
        const nombre = await getEmpleado(id)
        const salario = await getSalario(id)        
        return `${nombre} ${salario}`
    } catch (error) {
        return error
    }
}
const id =3

//Una funcion async siempre devuelve una promesa
getUsuarioInfo(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))