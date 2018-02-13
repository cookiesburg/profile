import React, { Component } from 'react';

export default class Projects extends Component {
  constructor() {
    super();
    this.state =  {
                    projectDetail: 'Please select a project'
                  };

    this.selectProject = this.selectProject.bind(this);
  }

  selectProject(project) {
    this.setState(() => {
      return {
          projectDetail: project.description
      }
    });
  }

  render() {
    var projects =  [
      {
        title: 'SoupLady',
        description: 'A community-driven approach to better food',
        img: '/img/souplady.png'
      },
      {
        title: 'Golf',
        description: 'Personal handicap tracking application',
        img: '/img/souplady.png'
      },
      {
        title: 'Forty-Five',
        description: 'Literary and arts collective',
        img: '/img/fortyfive.png'
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
          {this.state.projectDetail}
        </div>

      </div>
    );
  }
}
