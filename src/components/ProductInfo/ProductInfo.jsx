import './Style.css'

export function ProductInfo(product) {

    return (
        <div className="product-info-container">
            <p className="product-type">{product.type}</p>
            <h1 className="product-name">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <div className='product-price-container'>
                <h1 className="product-discounted-price">{product.discountedPrice}</h1>
                <p className="product-original-price">{product.originalPrice}</p>
            </div>
            
            <button className="add-to-cart-button">
                <img src="src/assets/icon-cart.svg" alt="carrinho-de-compras" />
                Add to Cart
            </button>
            
        </div>
    )
}