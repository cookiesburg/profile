import React, { Component } from 'react';

export default class Projects extends Component {
  constructor() {
    super();
    this.state =  {
                    projectDetail: 'Please select a project',
                    url: ''
                  };

    this.selectProject = this.selectProject.bind(this);
  }

  selectProject(project) {
    this.setState(() => {
      return {
          projectDetail: project.description,
          url: project.url
      }
    });
  }

  render() {
    var projects =  [
      {
        title: 'SoupLady',
        description: 'An online platform that connects community members and with homecooks in their area in order to provide healthy, community-driven food solutions while creating an economic engine for the community.',
        img: '/img/souplady.png',
        url: 'https://protected-shelf-23688.herokuapp.com',
      },
      {
        title: 'Golf Tracker',
        description: 'A personal application that stores information regarding a player\'s scoring history, courses played and current handicap index',
        img: '/img/souplady.png',
        url: 'https://protected-shelf-23688.herokuapp.com',
      },
      {
        title: 'Forty-Five',
        description: ' A literary and arts collective and online journal',
        img: '/img/fortyfive.png',
        url: 'https://protected-shelf-23688.herokuapp.com',
      }
    ];

    return(
      <div className='projects-container'>

        <div className='projects-list'>
          {projects.map((project) => {
            return (
              <div className='project-thumb'
                   onClick = {this.selectProject.bind(null, project)}>
                <img src={process.env.PUBLIC_URL + project.img} alt='landing page'/>
              </div>
            );
          })}
        </div>

        <div className='project-details'>
          <div>{this.state.projectDetail}</div>
          <br/>
          {
            this.state.url === '' || this.state.url === null ?
              <div></div>
            :
            <a href={this.state.url}>VISIT</a>
          }
        </div>

      </div>
    );
  }
}
