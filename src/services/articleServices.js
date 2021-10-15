import axiosWithAuth from "../utils/axiosWithAuth";
import React, { useState } from "react";

const articleService = ()=> {   
    
    return axiosWithAuth()
    .get('/articles')
    .then(res=> {
        dispatch(res.data);
    })
    .catch(err=> {
        console.log(err.response);
    }, [])
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.