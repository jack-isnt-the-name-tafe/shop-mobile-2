export async function fetchCategories() {
    const response = await fetch('http://localhost:3000/api/categories');
    if (!response.ok) {
        throw new Error('Failed to fetch categories.');
    }
    return await response.json();
}

export async function fetchProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products.');
    }
    return await response.json();
}

export async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product.');
    }
    return await response.json();
}

export async function addProduct(productData) {
    const response = await fetch('http://localhost:3000/api/products', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: productData
    });
    if (!response.ok) {
        throw new Error('Failed to post product.');
    }
    return await response.json();
}

export async function updateProduct(id, updatedData) {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: updatedData
    });
    if (!response.ok) {
        throw new Error('Failed to update product.');
    }
    return await response.json();
}

export async function DeleteProduct(id) {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error('Failed to delete product.');
    }
    return await response.json();
}