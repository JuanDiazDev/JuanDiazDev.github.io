import React from 'react'
import Project from './Project'
import CardDeck from 'react-bootstrap/CardDeck'

const ProjectList = () => {
      return (
        <CardDeck>
          <Project name = "Shamir's Secret Sharing Scheme" link = "https://github.com/JuanDiazDev/ShamirSecretSharingScheme" />
          <Project name = "Football Data" link = "https://github.com/JuanDiazDev/Football-Data" />
          <Project name = "Cloud Coverage Index" link = "https://github.com/JuanDiazDev/CloudCoverageIndex" />
          <Project name = "Solutions to coding challenges" link = "https://github.com/JuanDiazDev/Solutions" />
          <Project name = "Weather" link = "https://github.com/JuanDiazDev/WeatherProject" />
          <Project name = "Discrete Mathematics" link = "https://github.com/JuanDiazDev/DiscreteMath" />
      </CardDeck>
      );
}


export default ProjectList;