import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return(
      <div className='about-me'>
          <div className='card'>
            <div className='side'><h2>ABOUT TOM</h2></div>
            <div className='side back'>
              <p>
                I am a self-taught programmer with previous career experience in international
                travel, international education and mixology. I started learning to programmer
                because I wanted to turn interesting ideas and concepts into working applications.
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='side'><h2>TECHNOLOGIES</h2></div>
            <div className='side back'>
              <h4>BACK END</h4>
              <ul>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
              <h4>FRONT END</h4>
              <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML5</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>REST API"'s"</li>
              </ul>
              <h4>OTHER</h4>
              <ul>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
