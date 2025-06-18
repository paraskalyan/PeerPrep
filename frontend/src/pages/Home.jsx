import React from 'react'
import FriendCard from '../components/FriendCard'
import { Separator } from '../components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
import { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../lib/api'
import PageLoader from '../components/PageLoader'
import { useAuth } from '@clerk/clerk-react'
import { axiosInstance } from '../lib/axiosInstance'
const Home = () => {
    const { userId, getToken } = useAuth()


    const getOutgoingRequests = async () => {
        try {
            const res = await axiosInstance.get(`/friends/requests`, {
                headers: {
                    Authorization: `Bearer ${await getToken()}`,
                },
            });
            return res.data.data;
        } catch (error) {
            console.error("Error fetching outgoing requests:", error);
            throw error;
        }
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    })

    const { data: getOutRequests, isLoading: OutRequestLoading, error: OutRequestError } = useQuery({
        queryKey: ['OutgoingRequests'],
        queryFn: getOutgoingRequests,
    })

    if (OutRequestError) console.log(OutRequestError)
    if (isLoading) return <PageLoader />

    return (
        <div className=' min-h-screen  p-4'>

            <h1 className='font-bold text-2xl my-3'>Meet new learners</h1>
            <div>
                {data?.filter(user => !getOutRequests?.some(req => req.to === user.clerkId) && user.clerkId !== userId).map((user, index) => {
                    return (
                        <FriendCard user={user} key={index} />
                    )
                })}
            </div>

        </div>
    )
}

export default Home