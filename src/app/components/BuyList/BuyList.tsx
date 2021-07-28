import React from 'react';
import ProductRow from './components/ProductRow';

interface Props {
  products: IProduct[]
}

const BuyList = (props: Props) => {
  return (
    <div>
      <h2>Lista de compra</h2>

      {props.products && props.products.map((productItem: any, index: number) => (
        <ProductRow key={index} product={productItem} />
      ))}
    </div>
  );
}

export default BuyList;