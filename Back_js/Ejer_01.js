
const array1 = [
  { maquina: "Excavadora", horas: 180 },
  { maquina: "Bulldozer", horas: 200 },
];


for (let i = 0; i < array1.length; i++) {
  const item = array1[i];
  if (item.horas >= 180) {
    console.log(
        `La máquina ${item.maquina} ha trabajado más de ${item.horas} horas.`
    );
  }
}

        array1.forEach(function (elemento) {
          if (elemento.horas > 180) {
            console.log(
              `La maquina ${elemento.maquina} ha trabajado más de ${elemento.horas} horas.`
            );
          }
        });



for (const maquina of array1) {
    console.log(maquina.maquina);
}
const mantenimiento = array1.filter(
  maquina => maquina.horas <= 181
);
console.log(mantenimiento);

