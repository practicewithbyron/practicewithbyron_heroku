import React from "react";
import { Post } from '../post';

export const ReadUserCatalog = (userId) => {
    // return(
    //     Post("http://127.0.0.1:8000/api/readUserCatalog", {
    //         userId: userId
    //     })
    // )
    return(Post("http://127.0.0.1:8000/api/readUserCatalog", {
        userId: userId
    }))
}