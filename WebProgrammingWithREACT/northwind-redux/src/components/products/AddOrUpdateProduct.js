import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {getCategories} from '../../redux/actions/categoryActions'
import {saveProduct} from '../../redux/actions/productActions'


 function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props //expend props
 }) {

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
}
const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapDispatchToProps)(AddOrUpdateProduct);



