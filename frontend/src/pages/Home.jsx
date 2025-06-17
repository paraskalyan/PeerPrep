import React from 'react'
import FriendCard from '../components/FriendCard'
import { Separator } from '../components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
import { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../lib/api'
import PageLoader from '../components/PageLoader'
const Home = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers

    })

    if (isLoading) return <PageLoader />

    return (
        <div className=' min-h-screen  p-4'>

            <h1 className='font-bold text-2xl my-3'>Meet new learners</h1>
            <div>
                {data.map((user, index) => {
                    return (
                        <FriendCard user={user} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home