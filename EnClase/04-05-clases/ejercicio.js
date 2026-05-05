// Crear un algoritmo que capture los datos personales de 5 individuos, estos deberan ser: nombre, edad, genero. Una ves esten capturados en una lista, vamos a contar cuantos son hombres y cuantos son mujeres. Este ejercicio debe realizarse usando clases.


class Persona {

    name;
    age;
    genero;

    constructor(name, age, genero) {

        this.name = name
        this.age = age
        this.genero = genero

    }

}


let personas = []

for (let i = 0; i < 5; i++) {

    let name = prompt("User name:")
    let age = prompt("User age:")
    let genero = prompt(`User gender:`)

    const nuevaPersona = new Persona(name, age, genero);

    personas.push(nuevaPersona)

}

console.log(personas)
