// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import banner_img from '../assets/banner.jpg'; 
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';

const Home = () => {
  const frontendVideos = [
    { image: 'url/to/frontend1.jpg', title: 'Frontend Video 1' },
    { image: 'url/to/frontend2.jpg', title: 'Frontend Video 2' },
    // Agrega más videos aquí
  ];

  const backendVideos = [
    { image: 'url/to/backend1.jpg', title: 'Backend Video 1' },
    { image: 'url/to/backend2.jpg', title: 'Backend Video 2' },
    // Agrega más videos aquí
  ];

  const innovationVideos = [
    { image: 'url/to/innovation1.jpg', title: 'Innovation Video 1' },
    { image: 'url/to/innovation2.jpg', title: 'Innovation Video 2' },
    // Agrega más videos aquí
  ];

  const managementVideos = [
    { image: 'url/to/management1.jpg', title: 'Management Video 1' },
    { image: 'url/to/management2.jpg', title: 'Management Video 2' },
    // Agrega más videos aquí
  ];
  return (
    <div>
      <Header />
      <Banner image={banner_img} title="Featured Video" />
      <main>
        <CategorySection title="Frontend" videos={frontendVideos} />
        <CategorySection title="Backend" videos={backendVideos} />
        <CategorySection title="Innovación" videos={innovationVideos} />
        <CategorySection title="Gestión" videos={managementVideos} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
