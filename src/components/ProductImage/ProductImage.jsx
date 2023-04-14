import './Style.css'
import { srcSetFormatter } from '../../tools/srcSetFormatter'

export function ProductImage(images){

    return (
        <div className="product-image-container">
            <img 
                className='product-image' 
                src={images[0].resolutions[0].metaData.relativePath} 
                alt={images[0].altText} 
                srcSet={srcSetFormatter(images[0].resolutions)} 
            />
        </div>
    )
}
