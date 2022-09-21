
import { useParams } from "react-router-dom"
import { productDetail  } from "../../redux/selector"
import { useSelector } from "react-redux"
import ProductDetailPage from '../../components/Product/ProductDetailPage'

const ProductDetail = ()=>{
    const {id} = useParams()
    const [status,product] = useSelector(state => productDetail(state,id))
    return (<ProductDetailPage product={product} status ={status}/>)

}

export default ProductDetail