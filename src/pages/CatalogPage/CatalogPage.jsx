import React from "react";
import { useState, useEffect } from "react";
import "../../App.css"
import "./CatalogPage.css";
import { Loading } from "../Loading/loading";
import { CatalogWidget } from "../../components/CatalogWidget/CatalogWidget";
import { WidgetComponent } from "../../components/Widget/WidgetComponent";
import { ReadAllCatalogs } from "../../db/Read/ReadAllCatalogs";
import { Error } from "../Error/Error";

export const CatalogPage = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState("Java");
    const [filteredArray, setFilteredArray] = useState([]);

    if(isFetching){
        ReadAllCatalogs()
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

    useEffect(() => {
        setFilteredArray([]);
        console.log(filteredArray);
        var temp = []
        data?.detail?.forEach(el => {
            if(el.catagory == filter)
            {
                temp.push(el);
            }
        })
        setFilteredArray(temp);
    }, [filter, data])

    if(error){
        console.log("error");
        return <Error title="Internal Server Error" message={error.message}/>
    }
    else if(isFetching){
        return (
            <Loading/>
        )
    }else if(filteredArray){
        return (
            <div className="flex-column complete-center full-height page-margin" style={{marginLeft:"60px"}}>
                <h1 style={{padding: "15px"}}>Catalog</h1>
                <div id="catalogpage-entry" className="flex-row catalogPage">
                    <div id="catalog" className="catalogMenu flex-column">
                        <CatalogWidget text="Java" setFilter={setFilter}/>
                        <CatalogWidget text="C++" setFilter={setFilter}/>
                        <CatalogWidget text="Javascript" setFilter={setFilter}/>
                    </div>
                    <div id="catalog-items" className="flex-row flex-wrap" style={{gap: "20px", padding: "20px", height: "fit-content"}}>
                        {
                            filteredArray?.map(el => 
                                {
                                    console.log(filteredArray);
                                    return(
                                        <WidgetComponent text={el.name} img={el.name+".png"} desc={el.description}/>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        )
    }
}