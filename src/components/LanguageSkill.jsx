import React from "react";
import Star from "./Star";

function Skill(props){
  const [margin,setMargin]=React.useState("");
  function changeModeOver(){
    setMargin("animate");
  }
  function changeModeOut(){
    setMargin("");
  }
    return(
        <div className="col-6 hoverSkill" style={{padding:"11px 0px"}} onMouseOver={changeModeOver} onMouseOut={changeModeOut}>
        <span style={{cursor:"context-menu",marginLeft:"10px"}}>{props.skills.title}</span>
        <span style={{position: 'absolute',right:'10px'}}>
          {props.skills.star.map(val=>{
              return <Star check={val} displacement={margin} />
          })}
        </span>
      </div>
    );
}

export default Skill;