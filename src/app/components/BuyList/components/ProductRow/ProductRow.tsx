import React from 'react'
import QuantityInput from '../../../QuantityInput'

interface Props {
  product: IProduct
}

const ProductRow = (props: Props) => {
  return (
    <div>
      <span>{props.product.name}</span>&nbsp;
      <span>{props.product.currency.symbol}</span>&nbsp;
      <span>{props.product.price}</span>
      <span><QuantityInput /></span>
    </div>
  )
}

export default ProductRow;