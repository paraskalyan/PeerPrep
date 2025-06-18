import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { MessageCircle, UserPlus } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router'
import { convertDate } from '../lib/utils'
import { useAuth } from '@clerk/clerk-react'
import { useMutation } from '@tanstack/react-query'
import { sendFriendReq } from '../lib/api'
import { axiosInstance } from '../lib/axiosInstance'
const FriendCard = ({ user }) => {
    const { userId, getToken } = useAuth()

    const { name, image, friends, experienceLevel, createdAt, clerkId, _id } = user;

    const sendFriendReq = async (id) => {
        const token = await getToken()
        try {
            const res = await axiosInstance.post(`/friends/request/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    const { mutate, isPending } = useMutation({
        mutationFn: sendFriendReq
    })

    return (
        <Card className='w-fit'>
            <CardHeader className=' flex justify-between'>
                <img className='rounded-full' width={80} src={image} />
                <div className='space-x-3'>

                    {friends.includes(userId) ?
                        <Link to='/chat'>
                            <Button className=' bg-[#f1f4ff] rounded-lg hover:bg-[#f8f8f8]  '>
                                <MessageCircle color='blue' />
                            </Button>
                        </Link> :

                        <Button onClick={() => mutate(clerkId)} className=' bg-[#f1f4ff] rounded-lg hover:bg-[#f8f8f8]  '>
                            <UserPlus color='blue' />
                        </Button>
                    }

                </div>

            </CardHeader>
            <CardContent className=' space-y-1'>
                <h3 className=' text-lg font-bold'>{name}</h3>
                <p className=' text-sm'>@paraskalyan</p>
                {/* <p>Engineer, designer and developer that can be found everywhere</p> */}
            </CardContent>
            <CardFooter className=' space-x-2'>
                <Badge>{experienceLevel}</Badge>
                <div className=' text-sm'>{friends.length} Friends</div>
                <div className=' text-sm'>Joined <span className='font-semibold'>{convertDate(createdAt)}</span></div>
            </CardFooter>
        </Card>
    )
}

export default FriendCard