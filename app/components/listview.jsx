'use client'
import { Box, Button } from "@chakra-ui/react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { addedtofav } from "../redux/action"

export const Listview = ({total}) => {
    
    const allnews = useSelector(e => e.newsData.articles)
    const favnews=useSelector(e=>e.favourite)
    const count = useSelector(e => e.toggle)
    const dispatch=useDispatch()

    const addtofav=(el)=>{
        dispatch(addedtofav(el))
    }

    return (
        <>
        {
            total&&<Box w='90%' m='auto' mt='50px'>
            {
                allnews !== undefined && allnews.length && count % 2 !== 0 &&
                <ul>
                    {
                        allnews.map((el, id) => {
                            return (
                                <li key={id}><Link href={`/news/${el.publishedAt}`}>{el.description}</Link>
                                <Button onClick={()=>addtofav(el)}>add to fav</Button>
                                </li>
                            )
                        })
                    }
                </ul>

            }
            {
                allnews !== undefined && allnews.length && count % 2 === 0 &&
                <Box display='grid' gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))' gridAutoRows='auto' gap="50px">
                    {
                        allnews.map((el, id) => {
                            return (
                                <Box key={id}>
                                <Link href={`/news/${el.publishedAt}`} >
                                    {el.description}
                                </Link>
                                <Button onClick={()=>addtofav(el)}>add to fav</Button>
                                </Box>
                            )
                        })
                    }
                </Box>

            }
        </Box>
        }
        {
            !total&&<Box w='90%' m='auto' mt='50px'>
                {
                    favnews !== undefined && favnews.length &&
                    <Box display='grid' gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))' gridAutoRows='auto' gap="50px">
                        {
                            favnews.map((el, id) => {
                                return (
                                    <Link href={`/news/${el.publishedAt}`} key={id}>
                                        <Box >{el.description}</Box>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                }
            </Box>
        }
        </>
    )
}