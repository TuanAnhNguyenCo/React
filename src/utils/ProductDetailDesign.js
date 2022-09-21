import { Row, Col } from "reactstrap"
import './ProductDetailDesgin.scss'
import { BsBackspace } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


const ImgUrl = process.env.REACT_APP_URL_IMG

const ProductDetailDesign = (props) => {
    const product = props.product
    const navigate = useNavigate()
    let prices = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(product.prices).replace('￥', '')


    return (
        <div className="product-page-design">

            <div className="product-image" >

                <BsBackspace size={'2rem'} className="rollback-icon" onClick={() => navigate(-1)} />

                <img alt="Sample"
                    src={`${ImgUrl + product.image.split(" ")[0]}`} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <div>
                    <h1>{prices} VNĐ</h1>
                </div>
                <p><span>Mô tả: </span><span>{product.description}</span></p>

            </div>
        </div >
    )

}
export default ProductDetailDesign