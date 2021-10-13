import React, { useState } from 'react'
import { FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/outline'
import SidebarMobile from './components/SidebarMobile'
import SidebarDesktop from './components/SidebarDesktop'
import Header from './components/Header'

const navigation = [
  { name: 'Home', href: '/dashboard/home', icon: HomeIcon },
  { name: 'Invite Friends', href: '/dashboard/invite', icon: UsersIcon },
  { name: 'Connections', href: '/dashboard/connections', icon: FolderIcon },
  { name: 'Integrations', href: '/dashboard/integrations', icon: FolderIcon },
]

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 dark:bg-background-color-dark">
      <SidebarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navigation={navigation} />
      <SidebarDesktop navigation={navigation} />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 relative overflow-y-auto lg:p-6 focus:outline-none">{children}</main>
      </div>
    </div>
  )
}

export default Layout
