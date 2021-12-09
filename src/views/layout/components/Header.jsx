import React from 'react'
import ProfileDropDown from './ProfileDropDown'
import { MenuAlt2Icon } from '@heroicons/react/solid'
import { useLocation } from 'react-router'

const moduleNameMapping = {
  "/dashboard/schedule": "Schedule a meeting",
  "/dashboard/integrations": "Integrations",
  "/dashboard/profile": "Profile",
  "/dashboard/connections": "Connections",
  "/dashboard/invite": "Invite Users"
}

const Header = ({ setSidebarOpen }) => {
  let location = useLocation()
  console.log(location.pathname)
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-header opacity-90 shadow dark:bg-header-dark">
      <button
        className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between items-center">
        <div className="text-white">{moduleNameMapping.hasOwnProperty(location.pathname) ? moduleNameMapping[location.pathname] : ''}</div>
        <div className="ml-4 flex items-center lg:ml-6">
          <ProfileDropDown />
        </div>
      </div>
    </div>
  )
}

export default Header
