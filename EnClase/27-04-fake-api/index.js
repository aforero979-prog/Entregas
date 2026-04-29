// const API = "https://fakeapi.net/products"

// async function getProducts() {

//     try {

//         const response = await fetch(API);
//         const data = await response.json();

//         console.log(data.data);

//         let total = 0;
//         for (let i = 0; i < data.data.length; i++) {
//             total = total + data.data[i].price

   
//         }

//         console.log(total.toFixed(2))

//     } catch (error) {

//         console.error("Error al conectarse al FakeAPI")

//     }



// };

// getProducts()

//---------------------------------------------------------------------------------------//

// Fetch API: API JavaScript para realizar peticiones HTTP
const API = "https://fakeapi.net/products";

const calculateTotal = ( products ) => {
    let total = 0;

    for( let i = 0; i < products.length; i++ ) {

        total = total + products[i].price;

        // stock = products[i].price * products[i].stock

        // console.log(`${products[i].title} tiene un stock total de ${products[i].price * products[i].stock}`)

    }

    return total;
} 

const showStock = ( products ) => {
    let total = 0;

    for( let i = 0; i < products.length; i++ ) {

        total = total + products[i].price;

        stock = products[i].price * products[i].stock

        // console.log(`${products[i].title} tiene un stock total de ${products[i].price * products[i].stock}`)

    }

    return total;
} 




// Async / Await:
async function getProducts() {

    try {
        const response = await fetch( API );        // GET: Obtener los datos del Objeto Response (Respuesta)
        const data = await response.json();      // Obtener los datos y formaterarlos como unobjeto JSON
    
        // Implementacion
        const total = calculateTotal( data.data ) ;

        console.log( `El valor total del inventario es: ${ total }` ); 
    } catch (error) {
        console.error( "Error al conectarse al FakeAPI" );
    }

}

getProducts();


