const cartList = document.querySelector('.cart-list');
const totalElement = document.querySelector('.total');
let total = 0;

function addToCart(button) {
    const product = button.parentElement;
    const name = product.getAttribute('data-name');
    const price = parseFloat(product.getAttribute('data-price'));

    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
        <span>${name}</span>
        <span>R$${price.toFixed(2)}</span>
    `;
    
    // Remove mensagem de carrinho vazio
    const emptyMessage = document.querySelector('.cart-list .empty');
    if (emptyMessage) {
        emptyMessage.remove();
    }

    cartList.appendChild(cartItem);
    updateTotal(price);
}

function updateTotal(amount) {
    total += amount;
    totalElement.innerHTML = `Total: R$${total.toFixed(2)}`;
}