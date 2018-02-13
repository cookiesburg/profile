import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return(
      <div className='about-me'>
          <div>
            <h4>me</h4>
            <p>
              I am a self-taught programmer with professinal experience that has spanned
              across the travel industry, international education and mixology. I studied
              history at the University of Connecticut. I enjoy living abroad and have done
              so in Italy, Spain, Thailand and Columbia. I am an avid golfer. I like to cook
              things from scratch and share it with my friends.
            </p>
          </div>
          <div>
            <h4>my tech</h4>
            <p>
              I started programming with Ruby on Rails but have more recently been working
              in the React ecosystem.
            </p>
          </div>
          <div>
            <h4>Backend Skills</h4>
            <ul>
              <li>Ruby on Rails</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
            </ul>
            <h4>Frontend Skills</h4>
            <ul>
              <li>React</li>
              <li>ES6</li>
              <li>CSS</li>
              <li>HTML5</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>REST API"'s"</li>
            </ul>
            <h4>Other Skills</h4>
            <ul>
              <li>Git</li>
            </ul>
          </div>
        </div>
    );
  }
}
