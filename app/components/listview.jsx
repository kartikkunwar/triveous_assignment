'use client'
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import {useSelector} from "react-redux" 

export const Listview=()=>{
    const allnews=useSelector(e=>e.newsData.articles)
    const count=useSelector(e=>e.toggle)

    return(
        <Box m='auto' mt='50px' w='90%' >
        {
            allnews!==undefined&&allnews.length&&count%2!==0&&
            <ul>
                {
                    allnews.map((el,id)=>{
                        return(
                             <Link href={`/news/${el.publishedAt}`} key={id}><li key={id}>{el.description}</li></Link>      
                        )
                    })
                }
            </ul>
            
        }
        {
            allnews!==undefined&&allnews.length&&count%2===0&&
            <Box display='grid' gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))' gridAutoRows='auto' gap="20px">
                {
                allnews.map((el,id)=>{
                    return(
                         <Box key={id}>{el.author}</Box>      
                    )
                })
            }  
            </Box>
            
        }
        </Box>
    )
}