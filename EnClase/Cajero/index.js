//Simular un cajero automatico, el cajero puede hacer diversas tareas:
// 1. Crear una cuenta requiere un saldo de 100
// 2. Consignar dinero: No valores negativos 
// 3. Retirar dinero: No puede quedar menos de 10 
// 4. Consultar saldo 
// 5. Pagar cuentas: Se cobra 5% 
// 6. Tranferir dinero: Se cobra el 1%
// 7. Historial de movimientos

// 2.

let consignacion = Number(prompt("Ingrese el valor a consignar a su cuenta:"))

let cuentabancaria = []

function consignaciones (consignacion) {

    if (consignacion <= 0) {

        alert("El valor a consignar no es válido, intente de nuevo.")

    }else {

        cuentabancaria.push(consignacion)

    }

    return cuentabancaria
    
}

consignaciones(consignacion)
console.log(cuentabancaria)

// 3. 

let valorAtransferir = Number(prompt("Ingrese el valor a transferir:"))

let cuentaAconsignar = []

function transferencias (valorAtransferir) {


    if (valorAtransferir < 0){

        alert("El valor ingresado no es válido, intente de nuevo.")

    }else {

        cuentaAconsignar.push(valorAtransferir)

    }

} 

transferencias(valorAtransferir)
console.log(cuentaAconsignar)

// 3.

let valorAretirar = Number(prompt("Ingrese el valor a retirar:"))







