import {Listview} from "../components/listview"
import { Navbar } from "../components/navbar"

export default function Favourties(){
    return(
        <>
        <Navbar/>
        <Listview total={false}/>
        </>
    )
}