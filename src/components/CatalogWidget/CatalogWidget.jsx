import React from "react";
import "../../App.css";
import "./CatalogWidget.css";

export const CatalogWidget = ({text, setFilter}) => {
    return (
        <div className="catalogWidgetContainer" onClick={() => {
            setFilter(text);
        }}>
            <h3 className="center-text catalogWidgetText">{text}</h3>
        </div>
    )
}