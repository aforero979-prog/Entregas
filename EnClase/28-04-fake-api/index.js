// Fetch API: API JavaScript para realizar peticiones HTTP
const API = "https://fakeapi.net/products?limit=20";


const bestProduct = (products) => {

    let listaPopulares = []

    for (let i = 0; i < products.length; i++) {

        let calidad = 0

        if (products[i].rating.count > 100) {
            calidad += 1;
        }

        if (products[i].rating.rate >= 4.7) {
            calidad += 1;
        }

        if (calidad == 2) {
            listaPopulares.push(products[i])
        }

    }

    console.log(listaPopulares)
}





// Async / Await:
async function getProducts() {

    try {
        const response = await fetch(API);        // GET: Obtener los datos del Objeto Response (Respuesta)
        const data = await response.json();      // Obtener los datos y formaterarlos como unobjeto JSON

        // Implementacion
        // const total = calculateTotal(data.data);
        bestProduct(data.data)

        // console.log(`El valor total del inventario es: ${total}`);
    } catch (error) {
        console.error("Error al conectarse al FakeAPI");
    }

}

getProducts();
