var cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
    cart.push({name: item, price: Number(price)});
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    alert(item + ' fue añadido a tu carrito!');
}
function removeFromCart(item) {
    var index = cart.findIndex(cartItem => cartItem.name === item);
    if (index > -1) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    var cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    for (var i = 0; i < cart.length; i++) {
        cartItemsDiv.innerHTML += '<div class="dropdown-item">' + cart[i].name + ' - ' + formatPrice(cart[i].price) + '<button onclick="removeFromCart(\'' + cart[i].name + '\')">Eliminar</button></div>';
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function calculateTotal() {
    var total = 0;
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    for (var i = 0; i < cart.length; i++) {
        total += priceStringToNumber(cart[i].price);
    }
    return formatPrice(total);
}

function priceStringToNumber(priceString) {
    // Remove the dollar sign and dots, and convert to number
    return Number(priceString.replace('$', '').replace(/\./g, ''));
}
