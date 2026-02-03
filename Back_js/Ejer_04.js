
 //Ejercicios con Filter, Map, Reduce.
 const maquinaria = [
    {nombre: "excavadora", horasUso: 240},
    {nombre: "Buldorzer", horasUso: 350,},
    {nombre: "Aplanadora", horasUso: 500}
]

const  maquinaria_Mantenimiento = maquinaria.map(m=>({
    nombre: m.nombre,
    requiereMantenimiento: m.horasUso>=250 ,
    horasUso: m.horasUso
}))

const maquinas_Criticas = maquinaria_Mantenimiento.reduce(
    (acumulador,mantenimiento)=> acumulador+(mantenimiento.requiereMantenimiento ? 1:0),0 )

const respuesta = {
    maquinaria: maquinaria.length,
    criticas: maquinas_Criticas,
    maquinas:maquinaria_Mantenimiento
}

console.log(respuesta)