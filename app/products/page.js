async function getProducts() {
    const API_URL = process.env.API_URL || 'http://localhost:4000';
    const res = await fetch(`${API_URL}/api/v1/products`, {
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

    return (
        <div style={{padding: '40px', maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{fontSize: '32px', marginBottom: '30px'}}>All Products</h1>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px'}}>
            {products.map(product => (
            <div key={product.id} style={{border: '1px solid #ddd', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                <h2 style={{fontSize: '20px', marginBottom: '10px'}}>{product.name}</h2>
                <p style={{color: '#666', marginBottom: '8px'}}>{product.brand}</p>
                <p style={{color: '#22c55e', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px'}}>${product.price}</p>
                <p style={{fontSize: '14px', color: '#888'}}>{product.description}</p>
            </div>
            ))}
        </div>
        </div>
    );
}