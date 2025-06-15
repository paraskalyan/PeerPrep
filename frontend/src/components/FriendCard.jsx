import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { MessageCircle, UserPlus } from 'lucide-react'
import { Button } from './ui/button'
const FriendCard = () => {
    return (
        <Card className=' w-[340px]'>
            <CardHeader className=' flex justify-between'>
                <img className='rounded-full' width={100} src='https://unavatar.io/github/1stevengrant' />
                <div className='space-x-3'>

                    <Button className=' bg-[#f1f4ff] rounded-lg hover:bg-[#f8f8f8]  '>
                        <UserPlus color='blue' />
                    </Button>
                    <Button className=' bg-[#f1f4ff] rounded-lg hover:bg-[#f8f8f8]  '>
                        <MessageCircle color='blue' />
                    </Button>
                </div>

            </CardHeader>
            <CardContent className=' space-y-1'>
                <h3 className=' text-xl font-bold'>Paras Kalyan</h3>
                <p className=' text-sm'>@paraskalyan</p>
                <p>Engineer, designer and developer that can be found everywhere</p>
            </CardContent>
            <CardFooter className=' space-x-4'>
                <Badge>Advanced</Badge>
                <div className=' text-sm'>30 Friends</div>
                <div className=' text-sm'>Joined Apr 2020</div>
            </CardFooter>
        </Card>
    )
}

export default FriendCard