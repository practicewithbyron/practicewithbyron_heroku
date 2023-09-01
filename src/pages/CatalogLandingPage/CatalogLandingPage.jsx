import React, { useState } from "react";
import { ReadCatalog } from "../../db/Read/ReadCatalog";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/loading";

import "./CatalogLandingPage.css";
import "../../App.css";
import { StatItem } from "./StatItem";

export const CatalogLandingPage = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const {name} = useParams(); 

    if(isFetching){
        ReadCatalog(name)
        .then(res => {
            setData(res.data.detail[0]);
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => {
            setIsFetching(false)
        });  
    }

    console.log(data);

    if(error)
    {
        return(
            <Loading/>
        )
    }
    else if (data){
        return (
            <div className="catalog-landing-page center-text">
                <div className="catalog-landing-head-container">
                    <h1 className="catalog-landing-title">
                        {data.name}
                    </h1>
                    <h2 className="catalog-landing-subtitle">
                        {data.shortDescription}
                    </h2>
                    <div className="catalog-landing-button fit-content complete-center hoverElement">
                        🛒 Enroll in Course
                    </div>
                </div>

                <div className="catalog-landing-content-container flex-row">
                    <div className="catalog-landing-desc-container flex-column" >
                        <h2 className="bold" style={{marginBottom: "25px"}}>
                            {data.name}: An {data.shortDescription}
                        </h2>
                        <p style={{textAlign: "left"}}>
                            {data.description}
                        </p>
                    </div>
                    <div className="catalog-landing-stats-container flex-column">
                      <StatItem text="Intermediate" img="glyphicon glyphicon-stats"/>  
                      <StatItem text="Lifetime Access" img="glyphicon glyphicon-bell"/>  
                      <StatItem text="140 Questions" img="glyphicon glyphicon-question-sign"/>  
                    </div>
                </div>
            </div>
        )
    }
}