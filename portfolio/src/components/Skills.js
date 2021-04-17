import React from 'react'
import './../Skills.css'

const Skills = () => {
    return (
        <div className = "skills-container">
            <h1>Skills</h1>
            <div className = "skills">
                <div className = "card-skill">
                    <img src = "https://img.icons8.com/color/144/000000/python.png"/>
                </div>
                <div className = "card-skill">
                    <img src = "https://img.icons8.com/color/128/000000/java-coffee-cup-logo.png"/>
                </div>
                <div className = "card-skill">
                    <img src = "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png"/>
                </div>
                <div className = "card-skill">
                <img src="https://img.icons8.com/color/96/000000/javascript.png"/>
                </div>
                <div className = "card-skill">
                    <img src="https://img.icons8.com/color/96/000000/react-native.png"/>
                </div>
                <div className = "card-skill">
                <img src="https://img.icons8.com/color/96/000000/linux.png"/>
                </div>
            </div>
        </div>
    )

}


export default Skills
