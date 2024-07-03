import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import Products from '../Components/Products';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapiserver.reactbd.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
