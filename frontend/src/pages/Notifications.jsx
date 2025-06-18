import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import { axiosInstance } from '../lib/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import { BellIcon } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router'

const Notifications = () => {
    const { getToken } = useAuth()
    const { data, isLoading, error } = useQuery({
        queryKey: ['incomingRequests'],
        queryFn: async () => {
            const res = await axiosInstance.get('/friends/requests/incoming', {
                headers: {
                    Authorization: `Bearer ${await getToken()}`
                }
            })
            return res.data
        }
    })
    if (data) console.log(data)
    if (error) console.log(error)
    return (
        <div className='max-w-2xl flex flex-col items-start mx-auto  px-3 py-6 h-full'>
            <h1 className='font-semibold text-2xl mx-auto mb-5'>Notifications</h1>
            {
                data?.length > 0 ?
                    <div className='mx-auto'>
                        {
                            data.map((request, index) => {
                                return (

                                    <div className='flex items-center gap-3 border-b py-3'>
                                        <Link to={`/profile/${request.from._id}`}><img width={40} className='rounded-full' src={request.from.image} /></Link>
                                        <p>{request.from.name}</p>
                                        <p className='text-[#616161]'>sent you a friend request</p>
                                        <Button onClick={acceptRequest} className='bg-blue-700 rounded-full ml-3'>Accept</Button>
                                        <Button variant='' className=' rounded-full bg-red-700'>Reject</Button>
                                    </div>
                                )
                            })
                        }
                    </div>

                    :
                    <div className='mx-auto mt-6 flex flex-col items-center gap-3'>
                        <BellIcon size={40} color='gray' />
                        <h3 className='text-2xl text-gray-500'>No Notifications</h3>
                    </div>
            }
        </div>
    )
}

export default Notifications