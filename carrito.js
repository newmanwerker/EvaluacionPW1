//Funciones JavaScript
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
        cartItemsDiv.innerHTML += '<div class="dropdown-item">' + cart[i].name + ' - ' + cart[i].price + '<button onclick="removeFromCart(\'' + cart[i].name + '\')">Eliminar</button></div>';
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function calculateTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += Number(cart[i].price);
    }
    return total;
}
//Validaciones con jQuery
$(document).ready(function(){
    $("#validarFormulario").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var edad = $("#edad").val();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();

        if(edad < 18){
            alert("Debes ser mayor de edad para registrarte.");
            return;
        }
        if(edad > 99){
            alert("Edad inválida.");
            return;
        }
        // Nombre, Apellidos: largo entre 3 y 20 caracteres
        if(nombre.length < 3 || nombre.length > 20 ||
            apellido.length < 3 || apellido.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }
        else{
            // Validaciones aceptadas
            alert("¡Registro exitoso!");
            // Limpiar el formulario
            $("#validarFormulario")[0].reset();
        }       
        // Aquí podrías enviar el formulario utilizando AJAX o cualquier otro método
    });
});