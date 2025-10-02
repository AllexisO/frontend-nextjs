async function getProducts() {
    const res = await fetch('http://localhost:4000/api/v1/products', {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    const jsonData = await res.json();
  
    return jsonData;
}

export default async function ProductsPage() {
    const response = await getProducts();
    const products = response.data || [];

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600">{product.brand}</p>
                        <p className="text-green-600 font-bold">{product.price}</p>
                        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}