import {ProductInfo} from '../ProductInfo/ProductInfo'
import { ProductImage } from '../ProductImage/ProductImage'
import './Style.css'
import { productData } from '../../data/productData'


export function ProductContainer ({productId}) {
    return (
        <div className="product-container">
            <ProductImage {...productData.products[productId].images}></ProductImage>
            <ProductInfo {...productData.products[productId]}></ProductInfo>
        </div>
    )
}