import React from "react";
import Skill from './LanguageSkill';

function App(props){
    return (
        <div className="row">
            {props.skills.map(skill=>{
                return <Skill skills={skill} />
            })}
        </div>
    );
}

export default App;