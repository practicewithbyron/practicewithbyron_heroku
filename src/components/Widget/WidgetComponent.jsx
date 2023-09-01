import React from "react";
import "../../App.css";
import "./WidgetComponent.css";
import { StarRating } from "../StarRating/StarRating";

export const WidgetComponent = ({img, text, desc}) => {
    return (
        <div className="flex-column widgetComponent">
            <div className="widget-image-container">
                <img src={require(`../../imgs/${img}`)} className="widgetImage" alt={img}></img>
            </div>
            <div className="widget-text-container">
                <p className="widgetDifficulty widgetDifficulty-beginner">Beginner</p>
                <h3 className="widgetTitle">{ text }</h3>
                <p className="widgetDesc center-text">{ desc }</p>
                <div className="flex-row" style={{marginTop: "15px"}}>
                    <h1 className="widgetTitle">
                        £14.99
                    </h1>
                    <StarRating num={3.1}/>
                </div>
            </div>
        </div>
    )
}