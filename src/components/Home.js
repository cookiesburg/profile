import React, { Component } from 'react';
import Typist from 'react-typist';

export default class Home extends Component {
  render() {
    return(
      <div className='home-container'>
        <Typist cursor={{show:false}} avgTypingSpeed={80}>
          <div className='name'>Tom DeFeo</div>
          <div>Web Developer</div>
        </Typist>
      </div>
    );
  }
}
