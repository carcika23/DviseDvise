import React, { Component, lazy, Suspense } from 'react';


const Portfolio = lazy(() => import('../portfolio/portfolio'));
const Home = lazy(() => import('../home/home'));
const About = lazy(() => import('../about/about'));
const Services = lazy(() => import('../services/services'));
const Packages = lazy(() => import('../packages/packages'));
const Footer = lazy(() => import('../footer/footer'));



function Helper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Packages/>
      <Footer/>
    </Suspense>
  );
}

export default Helper;
