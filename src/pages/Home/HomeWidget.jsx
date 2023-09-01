import React from "react";

export const HomeWidget = ({subtext, title, paragraph, img}) => {
    return(
        <div className="widget-container flex-row" style={{textAlign: "left"}}>
            <div className="widget-text-container">
                <div className="color-text ">
                    {subtext}
                </div>
                <h3 className="widget-title">
                    {title}
                </h3>
                <p className="paragraph">
                    {paragraph}
                </p>
            </div>
            <div>
                <img className="widget-img" src={require(`../../imgs/${img}`)}></img>
            </div>
        </div>
    )
}