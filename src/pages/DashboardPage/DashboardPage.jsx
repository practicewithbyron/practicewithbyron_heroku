import React, { useEffect, useState } from "react";
import "../../App.css";
import { WidgetComponent } from "../../components/Widget/WidgetComponent";
import "./DashboardPage.css";
import { Loading } from "../Loading/loading";
import { ReadUserCatalog } from "../../db/Read/ReadUserCatalog";
import { Error } from "../Error/Error";
import { Link } from "react-router-dom";

export const DashboardPage = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    const [filteredList, setFilteredList] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        setFilteredList(data?.detail?.filter(el => {
            return(
                el.toLowerCase().startsWith(input.toLowerCase())
            )
        }))
    }, [input])

    console.log(data);

    if(isFetching){
        ReadUserCatalog("643278ad2fb059fe23d19872")
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => {
            setIsFetching(false)
        });  
    }
        

    if(error){
        console.log(error);
        return(
            <Error title="Internal Server Error" message={error.message}/>
        )
    }
    else if(isFetching){
        return (
            <Loading/>
        )
    }
    else{
        return(
            <div id="dashboardpage-entry" className="flex-column center-content page-margin">
                <div id="dashboard-form" className="dashboardForm">
                    <h1 className="dashboardDashboardText" >Dashboard</h1>
                    <div className="flex-row">
                        <input placeholder="Find a product" className="dashboardInput" type="text" onChange={event => {setInput(event.target.value)}}/>
                    </div>
    
                    <div className="flex-row flex-wrap dashboardWidgetContainer">
                        {
                            input == "" ?
                            (
                                data.detail.map(el => {
                                    return(
                                        <Link to={`/practice/${el}`}>
                                            <WidgetComponent img={`${el}.png`} text={el} desc="Some desc"/>
                                        </Link>
                                    )
                            })) : (
                                filteredList?.map(el => {
                                    return(
                                        <Link to={`/practice/${el}`}>
                                            <WidgetComponent img={`${el}.png`} text={el} desc="Some desc"/>
                                        </Link>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }




}