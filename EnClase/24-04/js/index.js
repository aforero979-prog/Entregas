
// import {alumnos} from "./students.js";
// import {notas} from "./grades.js";

// import { notas } from "./grades";

const alumnos = [
    {
        "nombre": "Juan",
        "apellido": "Pérez",
        "notas": [4.5, 3.8, 4.2, 1.0]
    },
    {
        "nombre": "María",
        "apellido": "Gómez",
        "notas": [3.9, 4.1, 4.7, 4.3]
    },
    {
        "nombre": "Carlos",
        "apellido": "Rodríguez",
        "notas": [2.8, 1.5, 3.9, 1.0]
    },
    {
        "nombre": "Laura",
        "apellido": "Martínez",
        "notas": [4.8, 4.9, 5.0, 4.7]
    },
    {
        "nombre": "Andrés",
        "apellido": "López",
        "notas": [3.2, 3.6, 3.8, 4.1]
    },
    {
        "nombre": "Sofía",
        "apellido": "Hernández",
        "notas": [4.0, 4.2, 4.4, 4.6]
    },
    {
        "nombre": "Diego",
        "apellido": "Torres",
        "notas": [1.9, 3.1, 1.4, 1.7]
    },
    {
        "nombre": "Valentina",
        "apellido": "Ramírez",
        "notas": [4.6, 4.8, 4.9, 5.0]
    },
    {
        "nombre": "Miguel",
        "apellido": "Castro",
        "notas": [3.5, 3.7, 3.9, 4.2]
    },
    {
        "nombre": "Camila",
        "apellido": "Vargas",
        "notas": [4.1, 4.3, 4.5, 4.7]
    }
];

//---------------------------------------------//

let notas = [4.5, 3.8, 4.2, 5.0];

function sumarNotas(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i]
    }
    return suma
};

let resultado = sumarNotas(notas);
console.log(resultado);

//---------------------------------------------//

function promediarNotas(notas) {

    let suma = sumarNotas(notas);
    let promedio = suma / notas.length;

    return promedio
};

let promedio = (promediarNotas(notas));
console.log(promedio.toFixed(2));

//---------------------------------------------//

for (let i = 0; i < alumnos.length; i++) {

    let suma = sumarNotas(alumnos[i].notas);
    let prom = promediarNotas(alumnos[i].notas)

    console.log(`${alumnos[i].nombre} tuvo un promedio de ${prom.toFixed(2)}`)

    if (prom > 5) {
        console.log(`El valor no es válido`)
    }
    else if (prom < 0) {
        console.log(`El valor no es válido`)
    }
    else if (prom >= 3) {
        console.log(`El/La estudiante ${alumnos[i].nombre} pasó la materia`)
    }
    else {
        console.log(`El/La estudiante ${alumnos[i].nombre} reprobó la materia`)
    }

}

//---------------------------------------------//

for (let i = 0; i < alumnos.length; i++) {

    let suma = 0;
    
    for (let j = 0; j < alumnos[i].notas.length; j++) {
        
        suma = suma + notas[i]
        
    }
    
}




//---------------------------------------------//

// function promedio(sumarNotas){

//     let promedio = (suma.toFixed(2) / alumnos[i].notas.length)

// }


// for (let i = 0; i < alumnos.length; i++) {

//     let suma = 0;

//     for (let j = 0; j < alumnos[i].notas.length; j++) {
//         suma = suma + alumnos[i].notas[j]
//     }

//     let promedio = (suma.toFixed(2) / alumnos[i].notas.length)

//     console.log(`El/La estudiante: ${alumnos[i].nombre} ${alumnos[i].apellido} sacó ${promedio.toFixed(2)} como promedio en su semestre`)


//     if (promedio > 5) {
//         console.log(`El valor no es válido`)
//     }
//     else if (promedio < 0) {
//         console.log(`El valor no es válido`)
//     }
//     else if (promedio >= 3) {
//         console.log(`El estudiante ${alumnos[i].nombre} pasó la materia`)
//     }
//     else {
//         console.log(`El estudiante ${alumnos[i].nombre} reprobó la materia`)
//     }


// }


