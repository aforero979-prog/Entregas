const API = "https://fakeapi.net/products"

async function getProducts() {

    try {

        const response = await fetch(API);
        const data = await response.json();

        console.log(data.data);

        let total = 0;
        for (let i = 0; i < data.data.length; i++) {
            total = total + data.data[i].price
   
        }

        console.log(total.toFixed(2))

    } catch (error) {

        console.error("Error al conectarse al FakeAPI")

    }



};

getProducts()


