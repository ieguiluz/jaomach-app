import React from 'react';
import JaomachTemplate from '../../components/JaomachTemplate';
import SearchProduct from '../../components/SearchProduct';

const Home = () => {
  return (
    <JaomachTemplate>
      <div className="jaomach__container">
        <h1>Home body</h1>
        <SearchProduct />
      </div>
    </JaomachTemplate>
  )
};

export default Home;