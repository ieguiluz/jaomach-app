import React from 'react';
import { useForm } from 'react-hook-form';
import { showProduct } from '../../api/Product'

const SearchProduct = (props: any) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d: any) => {
    getProductByCode(d.productCode);
  };

  const getProductByCode = (code: string): void => {
    showProduct(code)
    .then( ( { data: { product } } ) => {
      props.handleResult(product);
    })
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
    </div>
  )
};

export default SearchProduct;