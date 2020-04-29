import React from "react";

function Star(props){
    return (
        props.check?<span className="fa fa-star" style={{color:"red"}}></span>:<span className="fa fa-star"></span>
    );
}

export default Star;