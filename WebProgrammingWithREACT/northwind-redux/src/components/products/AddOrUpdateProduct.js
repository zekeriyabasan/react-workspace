import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {getCategories} from '../../redux/actions/categoryActions'
import {saveProduct} from '../../redux/actions/productActions'
import ProductDetail from './ProductDetail';


 const  AddOrUpdateProduct = ({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props //expend props
 }) =>  {

    const [product, setProducts] = useState({...props.products});
    useEffect(()=>{
        if(categories.length === 0){ // if had came direct product page
            getCategories();
        }
        setProducts({...props.products});
    },[...props.product]); // watch product state and if settle product, out infinite loop 

    function handleChange(event){
        const {name, value} = event.target;
        setProducts(prev => ({
            ...prev,
            [name]:name === "categoryId"?parseInt(value,10):value
        }));
    }
    function handleSave(event){
        event.preventDefault();
        saveProduct(product).then(()=>{
            history.push("/")
        })

    }
    return (
    <ProductDetail categories={categories} product={product} onChange={handleChange} onSave={handleSave}/>
    )
}

export function getProductById(products,productId){
    let product = products.find(product => product.id === productId) || null;
    return product;

}
function mapStateToProps(state, ownProps){
    const productId = ownProps.match.params.productId
    const product = productId && state.productListReducer.length>0 ?
    getProductById(state.productListReducer,productId):{}

    return {
        product,
        products : state.productListReducer,
        categories : state.categoryListReducer
    }

}
const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);



