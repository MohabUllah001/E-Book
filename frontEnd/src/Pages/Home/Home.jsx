import React from 'react';
import Hore from './Componenets/Hero';
import Hero from './Componenets/Hero';
import FeaturesBar from './Componenets/FeaturesBar';
import BookCategoryBar from './Componenets/BookCategoryBar';
import TopSell from './Componenets/TopSell';

const Home = () => {
    return (
        <div>
          <Hero/>
          <FeaturesBar/>
          <TopSell />
          <BookCategoryBar/>
          
           </div>
    );
};

export default Home;