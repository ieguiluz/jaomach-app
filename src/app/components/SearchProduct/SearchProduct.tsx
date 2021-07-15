import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showProduct } from '../../api/Product'

const SearchProduct = () => {
  const [product, setProduct] = useState<IProduct>();
  const { register, handleSubmit } = useForm();

  const onSubmit = (d: any) => {
    getProductByCode(d.productCode);
  };

  const getProductByCode = (code: string): void => {
    showProduct(code)
    .then( ( { data: { product } } ) => setProduct(product))
    .catch((err: Error) => console.log(err))
  }

  return (
    <div>
      <h2>Search product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input type="text" {...register("productCode")} autoComplete="off" />
        </label>
        <input type="submit" value="Search" />
      </form>

      {product &&
        <div>
          <div>
            <div>Nombre</div>
            <div>{product.name}</div>
            <div>Codigo</div>
            <div>{product.code}</div>
            <div>Precio unitario</div>
            <div>{product.currency.symbol} {product.price}</div>
          </div>
        </div>
      }
    </div>
  )
};

export default SearchProduct;