import React from 'react'
import FriendCard from '../components/FriendCard'
import { Separator } from '../components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
import { useEffect } from 'react'
import axios from 'axios'
const Home = () => {
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/users/newUsers')
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers();
    }, [])
    return (
        <div className=' min-h-screen  p-4'>

            <h1 className='font-bold text-2xl my-3'>Meet new learners</h1>
            {/* Recommended Users */}
            <div>
                <FriendCard />
            </div>
        </div>
    )
}

export default Home