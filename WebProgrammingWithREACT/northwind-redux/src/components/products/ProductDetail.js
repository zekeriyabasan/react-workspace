import React from 'react'
import TextInput from '../toolbox/TextInput'

 const ProductDetail = ({
    product,
    categories,
    onSave,onChange
 }) => {
  return (
    <form onSubmit={onSave}>
        <h2>{product.id ? "Güncelle":"Ekle"}</h2>
        <TextInput name="productName" label="ProductName" value={product.productName} onChange={onChange} error="Hata" />
        <button type='submit' className='btn btn-success'>Save</button>
    </form>
  )
}
export default ProductDetail;