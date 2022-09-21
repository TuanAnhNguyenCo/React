import ProductDetailDesign from "../../utils/ProductDetailDesign"


const productDetailPage = (props) => {
    const status = props.status
    const product = props.product
    
    return (
        <div>
            {(status == 'true' && product) ?
                <ProductDetailDesign product={product}/>
                : <h1>Page not found</h1>
            }
        </div>
    )

}

export default productDetailPage