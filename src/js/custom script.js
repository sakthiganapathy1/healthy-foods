function decreaseQuantity(inputElement) {
    let currentValue = parseInt(inputElement.value);
    if (currentValue > 1) {
        inputElement.value = currentValue - 1;
    }
}

function increaseQuantity(inputElement) {
    let currentValue = parseInt(inputElement.value);
    inputElement.value = currentValue + 1;
}

// Cart functionality
let cartItems = [];

function addToCart(button) {
    const card = button.closest('.card');
    const productName = card.querySelector('.card-text').textContent;
    const price = card.querySelector('.card-text.fw-bold').textContent;
    const quantity = parseInt(card.querySelector('.quantity-selector input').value);
    
    const item = {
        name: productName,
        price: price,
        quantity: quantity
    };
    
    cartItems.push(item);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cartItems.length;
    cartCount.style.display = cartItems.length > 0 ? 'inline' : 'none';
}