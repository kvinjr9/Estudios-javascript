const MaquinariaA =[{maquinaria:"Excavadora", horas: 250 },
{maquinaria:"Bulldozer", horas: 150 },
{maquinaria:"Grúa", horas: 300 }
]

const Maquinaria_M = matenimiento=> matenimiento.horas> 250;

const resultado = MaquinariaA.filter(Maquinaria_M);

console.log(resultado)