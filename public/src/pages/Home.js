// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner image="/assets/banner.jpg" title="Featured Video" />
    </div>
  );
};

export default Home;
