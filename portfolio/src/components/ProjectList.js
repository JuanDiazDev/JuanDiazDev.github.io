import React from 'react'
import Project from './Project'
import './../ProjectList.css'

const ProjectList = () => {
      return (
        <div className = "container">
          <h1>Projects</h1>
          <div className = "project-list">
            <Project 
              name = "Shamir's Secret Sharing Scheme" 
              link = "https://github.com/JuanDiazDev/ShamirSecretSharingScheme"
              image ="https://img.icons8.com/cute-clipart/128/000000/github.png" />
            <Project 
              name = "Football Data" 
              link = "https://github.com/JuanDiazDev/Football-Data" 
              image ="https://img.icons8.com/cute-clipart/128/000000/github.png"/>
            <Project 
              name = "Cloud Coverage Index" 
              link = "https://github.com/JuanDiazDev/CloudCoverageIndex" 
              image ="https://img.icons8.com/cute-clipart/128/000000/github.png"/>
            <Project 
              name = "Solutions to coding challenges" 
              link = "https://github.com/JuanDiazDev/Solutions" 
              image ="https://img.icons8.com/cute-clipart/128/000000/github.png"/>
            <Project 
              name = "Weather" 
              link = "https://github.com/JuanDiazDev/WeatherProject" 
              image ="https://img.icons8.com/cute-clipart/128/000000/github.png"/>
            <Project 
              name = "Discrete Mathematics" 
              link = "https://github.com/JuanDiazDev/DiscreteMath"
              image ="https://img.icons8.com/cute-clipart/128/000000/github.png" />
        </div>
      </div>
      );
}


export default ProjectList;