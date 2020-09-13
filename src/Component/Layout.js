import React, { Component } from 'react';
import '../css/Layout.css';
import Header from './Header';
import Footer from './Footer';
import UnderConstruction from './UnderConstruction';

export default class Layout extends Component {
  render(){
    return (
      <div className='Layout'>
          <Header/>
          <UnderConstruction/>
          <Footer/>
      </div>
    );
  }
}