import React from 'react'
interface Props {
  productData: any
  handleAddProduct: any
}

const ProductDetail = (props: Props) => {
  const {
    productData: {
      code,
      name,
      price,
    },
  } = props;

  const handleClick = () => {
    props.handleAddProduct(props.productData);
  }

  return (
    <div>
      <div>
        <div>Code</div>
        <div>{code}</div>
      </div>
      <div>
        <div>Nombre</div>
        <div>{name}</div>
      </div>
      <div>
        <div>Precio</div>
        <div>{price}</div>
      </div>
      <div><button onClick={handleClick}>Agregar a la lista</button></div>
    </div>
  )
}

export default ProductDetail
