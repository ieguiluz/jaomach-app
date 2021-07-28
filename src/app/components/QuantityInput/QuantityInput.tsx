import React from 'react'
import { useState } from 'react';

interface Props {

}

const QuantityInput = (props: Props) => {
  const [quantity, setQuantity] = useState(0);

  const handleClickRemove = () => {
    setQuantity(quantity - 1);
  }

  const handleClickAdd = () => {
    setQuantity(quantity + 1);
  }

  return (
    <div>
      <input type="text" value={quantity} />
      <button disabled={quantity < 1} onClick={handleClickRemove}>-</button>
      <button onClick={handleClickAdd}>+</button>
    </div>
  );
}

export default QuantityInput;
