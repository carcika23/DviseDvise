import React, { Component } from 'react';
import Home from '../home/home';
import About from '../about/about';
import Portfolio from '../portfolio/portfolio';
import Services from '../services/services';
import Packages from '../packages/packages';

function Helper() {
  return (
    <>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Packages/>
    </>
  );
}

export default Helper;
