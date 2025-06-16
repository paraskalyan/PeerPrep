import React from 'react'
import { SidebarProvider, SidebarTrigger } from './ui/sidebar'
import AppSidebar from './AppSidebar'

const Layout = ({ children }) => {
    return (
        <SidebarProvider>
            <div className='flex-1'>
                <AppSidebar />
            </div>
            <main className='w-full'>
                {/* <SidebarTrigger /> */}
                {children}
            </main>
        </SidebarProvider>
    )
}

export default Layout