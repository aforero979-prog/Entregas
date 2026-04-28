const API = "https://fakeapi.net/products"

async function getProducts() {
const response = await fetch ( API );
const data = await response.json();

console.log( data );
};

getProducts()