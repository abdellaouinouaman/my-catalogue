import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/produits/disponibles`)
            .then(res => {
                if (!res.ok) throw new Error("Erreur lors du chargement des produits");
                return res.json();
            })
            .then(data => setProducts(data))
            .catch(err => setError(err.message));
    }, []);

    if (error) return <div>{error}</div>;
    if (products.length === 0) return <div>Aucun produit disponible</div>;

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;