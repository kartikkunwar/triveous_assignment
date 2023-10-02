'use client'
import { useEffect, useState } from "react"
import {Listview} from "../components/listview"
import {useDispatch,useSelector} from "react-redux" 
import {getNews} from "../redux/action"
import {Navbar} from "../components/navbar"


export default function News(){
    const dispatch=useDispatch()
   

    useEffect(()=>{
        dispatch(getNews)
    },[])
    
    return(
        <>
         <Navbar/>
         <Listview total={true}/>
        </>
    )
}