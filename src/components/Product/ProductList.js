
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteStatus } from '../../redux/selector';
import { fetchDeleteProduct } from '../../views/product/productSlice';
import { useEffect } from 'react';
const ImgUrl = process.env.REACT_APP_URL_IMG

const ProductList = (props) => {
    const products = props.products
    const dispatch = useDispatch()
    const status = useSelector(DeleteStatus)

    const handleDeleteProduct = (id) => {
        dispatch(fetchDeleteProduct(id))
    }




    return (
        <div>
            {products && products.map((item, index) => {
                return (
                    <Card style={{ width: '18rem', height: "40rem", display: 'inline-flex' }} key={item.id} className=' mt-3'>
                        <img alt="Sample" style={{ width: '18rem', height: '300px' }} src={`${ImgUrl + item.image.split(" ")[0]}`} />
                        <CardBody>
                            <CardTitle tag="h5" style={{ color: 'black' }}>{item.name}</CardTitle>
                            <CardText style={{ color: 'black' }}>
                                {item.description}
                            </CardText>
                            <NavLink to={`${item.id}`}><Button color='info' outline>Xem chi tiết</Button></NavLink>

                            <Button color="danger" outline onClick={() => handleDeleteProduct(item.id)}> Xoá sản phẩm </Button>
                           

                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
}
export default ProductList