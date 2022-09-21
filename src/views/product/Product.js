import React from 'react';
import ProductList from '../../components/Product/ProductList'
import { productList } from "../../redux/selector"
import { useSelector } from "react-redux"


const Product = () => {
    const products = useSelector(productList).products
    
    return (
        <ProductList products={products} />
    )
}

export default Product