
//setTimeout(()=>console.log('Salut au Monde'),1000)

const getuserById = (id,callback) =>{
    const user = {
        id,
        nombre: 'Alejandro'
    }
    setTimeout(()=>{
        callback(user)
    })
}

getuserById(10, (user)=>{
    console.log(user),
    console.log(user.nombre)
    console.log(user.nombre.toUpperCase())
})