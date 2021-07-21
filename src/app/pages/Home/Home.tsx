import React, { useState } from 'react';
import JaomachTemplate from '../../components/JaomachTemplate';
import ProductDetail from '../../components/ProductDetail';
import SearchProduct from '../../components/SearchProduct';

const Home = () => {
  const [product, setProduct] = useState(null);
  const [productsList, setProductsList] = useState<any>([]);

  const handleResult = (result: any) => {
    console.log(result)
    setProduct(result);
  }

  const handleAddProduct = (productData: any) => {
    if (productsList.find((list: any) => list.code === productData.code)) {
      console.log('booya')
    } else {
      setProductsList((productsList: any) => [...productsList, productData])
    }
  }

  return (
    <JaomachTemplate>
      <div className="jaomach__container">
        <h1>Inicio</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <h2>Lista de compra</h2>
            {productsList && productsList.map((productItem: any, index: number) => (
              <div key={index}>
                <span>{productItem.name}</span>&nbsp;
                <span>{productItem.currency.symbol}</span>&nbsp;
                <span>{productItem.price}</span>
              </div>
            ))}
          </div>
          <div>
            <SearchProduct handleResult={handleResult} />
            {product && <ProductDetail
              handleAddProduct={handleAddProduct}
              productData={product}
            />}
          </div>
        </div>
      </div>
    </JaomachTemplate>
  )
};

export default Home;