import React from 'react'
import FriendCard from '../components/FriendCard'
import { Separator } from '../components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
const Home = () => {
    return (
        <div className=' min-h-screen  p-4'>
            {/* Friends section */}
            <h1 className='font-bold text-2xl my-3'>Your Friends</h1>

            <div className='flex flex-wrap gap-6 p-5 rounded-3xl'>
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />

            </div>
            <Separator />
            <h1 className='font-bold text-2xl my-3'>Meet new learners</h1>
            {/* Recommended Users */}
            <div>
                <FriendCard />
            </div>
        </div>
    )
}

export default Home