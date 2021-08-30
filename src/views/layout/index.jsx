import React, { useState } from 'react'
import { FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/outline'
import SidebarMobile from './components/SidebarMobile'
import SidebarDesktop from './components/SidebarDesktop'
import Header from './components/Header'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  { name: 'Invite Friends', href: '#', icon: UsersIcon, current: true },
  { name: 'Connections', href: '#', icon: FolderIcon, current: false },
]

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
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
