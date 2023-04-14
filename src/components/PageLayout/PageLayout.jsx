import { ProductContainer } from "../ProductContainer/ProductContainer"
import './Style.css'

export function PageLayout(){
    const productId = 0
    return (
        <div className="main-container">
            <ProductContainer productId={productId}></ProductContainer>
        </div>

    )
}