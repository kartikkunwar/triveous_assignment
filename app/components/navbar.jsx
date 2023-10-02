'use client'
import { Box, Button } from "@chakra-ui/react"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { changecount } from "../redux/action"

export const Navbar=()=>{
   const dispatch=useDispatch()
    const toggleitem=()=>{
        dispatch(changecount)
    }
    return(
        <Box display='flex' justifyContent='space-around' alignItems='center' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px;' p='20px 0 20px 0'>
            <Link href="/signup">Signup</Link>
            <Link href="/signin">Signin</Link>
            <Link href="/news">News</Link>
            <Link href="/favourites">Fav news</Link>
            <Button onClick={()=>toggleitem()}>toggle</Button>
        </Box>
    )
}