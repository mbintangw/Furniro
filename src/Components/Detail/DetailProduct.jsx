import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data.json'

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id, 10));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product['additional-information']}</p>
      <h4>Rp. {product.price}</h4>
    </div>
  )
}

export default DetailProduct
