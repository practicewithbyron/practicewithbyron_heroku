import React from "react";
import { Post } from "../post";

export const ReadAllCatalogQuestions = (catalogName) => {
    return (
        Post("http://127.0.0.1:8000/api/readAllCatalogQuestions", {
            catalogName: catalogName
        })
    )
}