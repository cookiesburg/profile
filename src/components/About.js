import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return(
      <div className='about-me'>
          <div className='about-box'>
              <h2>A Little About Me</h2>
              <p>
                I am a self-taught Full-Stack Web Developer.
                I am currently developing my own web applications while I continue to explore and
                learn more technologies.
                Prior to programming, I worked in the fields of international travel, international
                education and hospitality. When I`m not working I like to enjoy the finer points in life -
                golf, big sandwiches, mountain biking, taking pictures, indian food and good company.
              </p>
          </div>

          <div className='about-box'>
            <h2>Technologies</h2>
            <p>
                <strong>BACK END: </strong>Ruby on Rails, PHP, PostgreSQL, MySQL
                <br/>
                <strong>FRONT END: </strong>React.js, ES6, Responsive Design, REST API`s, WordPress, Bootstrap, JQuery, CSS, HTML5, Bootstrap
                <br/>
                <strong>OTHER: </strong>Git
            </p>
        </div>
      </div>
    );
  }
}
