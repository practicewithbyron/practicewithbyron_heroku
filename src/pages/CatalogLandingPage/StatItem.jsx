import React from "react";
import "../../App.css";

export const StatItem = ({img, text}) => {
    return(
        <div className="flex-row" style={{marginLeft: "50px", margin: "15px 50px"}}>
            <div className={img} style={{fontSize: "20px", marginRight: "10px"}}/>
            <h3><b>{text}</b></h3>
        </div>
    )
}