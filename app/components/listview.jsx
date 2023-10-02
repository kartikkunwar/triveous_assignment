'use client'
import { Box } from "@chakra-ui/react"
import Link from "next/link"
import { useSelector } from "react-redux"

export const Listview = () => {
    const allnews = useSelector(e => e.newsData.articles)
    const count = useSelector(e => e.toggle)

    return (
        <Box m='auto' mt='50px' w='90%' >
            {
                allnews !== undefined && allnews.length && count % 2 !== 0 &&
                <ul>
                    {
                        allnews.map((el, id) => {
                            return (
                                <Link href={`/news/${el.publishedAt}`} key={id}><li key={id}>{el.description}</li></Link>
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
                                <Link href={`/news/${el.publishedAt}`} key={id}>
                                    <Box >{el.description}</Box>
                                </Link>
                            )
                        })
                    }
                </Box>

            }
        </Box>
    )
}