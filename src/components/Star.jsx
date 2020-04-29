import React from "react";

function Star(props){
    var fullClass="fa fa-star "+ props.displacement
    return (
        props.check?<span className={fullClass} style={{color:"red"}}></span>:<span className="fa fa-star"></span>
    );
}

export default Star;