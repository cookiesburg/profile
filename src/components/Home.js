import React, { Component } from 'react';
import Typist from 'react-typist';
import socicon from 'socicon';

export default class Home extends Component {
  render() {
    return(
      <div className='home-container'>
        <Typist cursor={{show:false}} avgTypingSpeed={80}>
          <div><strong>Tom DeFeo</strong></div>
          <div className='title'>Web Developer.</div>
        </Typist>

        <div className='links'>
          <a href='https://www.linkedin.com/in/tom-defeo-b7955b42/'><i className='socicon-linkedin'></i></a>
          <a href='https://www.instagram.com/cookiesburg/'><i className='socicon-instagram'></i></a>
          <a href='https://github.com/cookiesburg'><i className='socicon-github'></i></a>
        </div>
      </div>
    );
  }
}
