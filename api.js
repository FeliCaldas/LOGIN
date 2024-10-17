async function fetchProducts() {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Você precisa estar logado para acessar esta página.');
        window.location.href = 'login.html'; 
        return;
    }

    const url = 'https://dummyjson.com/products';

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error('Erro:', error);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h2>${product.title}</h2>
            <p>Preço: $${product.price}</p>
            <img src="${product.image}" alt="${product.title}" />
        `;
        productContainer.appendChild(productElement);
    });
}

fetchProducts();
