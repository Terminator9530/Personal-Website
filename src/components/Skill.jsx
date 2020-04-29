import React from "react";
import Star from "./Star";

function Skill(props){
    return(
        <div className="col-6" style={{padding:"20px 0px"}}>
        <span>{props.skills.title}</span>
        <span style={{position: 'absolute',right:'20px'}}>
          {props.skills.star.map(val=>{
              return <Star check={val} />
          })}
        </span>
      </div>
    );
}

export default Skill;