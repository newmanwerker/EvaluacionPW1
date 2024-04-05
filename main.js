// JavaScript
// Función para validar el formulario
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

// Función para manejar el carrito de compras
var cart = [];

function addToCart(id, name, price) {
    var product = {id: id, name: name, price: price, quantity: 1};
    cart.push(product);
}

function updateQuantity(id, quantity) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity = quantity;
            break;
        }
    }
}

function removeFromCart(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart.splice(i, 1);
            break;
        }
    }
}

function calculateTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}