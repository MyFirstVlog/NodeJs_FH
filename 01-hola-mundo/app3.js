console.log("Beginning") //1

setTimeout(()=>{//5
    console.log('Primer Timeout')
}, 3000)

setTimeout(()=>{ //2
    console.log('Segundo Timeout')
}, 0)

setTimeout(()=>{ //3
    console.log('Tercer Timeout')
}, 0)

console.log('Fin del programa')//4 