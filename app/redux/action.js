import axios from "axios";
import * as types from "./actionTypes"


export const getNews = (dispatch) => {
    dispatch({type:types.GET_REQUEST_NEWS})
    return axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-09-01&sortBy=publishedAt&apiKey=863bd76d7b4942db88d5485a4dbed19c')
    .then((res)=>{
        return dispatch({type:types.GET_SUCCESS_NEWS,payload:res.data})
    }).catch((err)=>{
        return dispatch({type:types.GET_FAIL_NEWS})
    })
} 

export const changecount=(dispatch)=>{
    dispatch({type:types.GET_SUCCESS_TOGGLE})
}

export const addedtofav=(data)=>(dispatch)=>{
    dispatch({type:types.GET_SUCCESS_FAV,payload:data})
}