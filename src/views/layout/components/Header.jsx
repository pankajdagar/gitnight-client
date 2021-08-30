import React from 'react'
import ProfileDropDown from './ProfileDropDown'
import { MenuAlt2Icon } from '@heroicons/react/solid'

const Header = ({ setSidebarOpen }) => {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-black opacity-90 shadow">
      <button
        className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between items-center">
        <div className="text-white">Schedule a meeting</div>
        <div className="ml-4 flex items-center lg:ml-6">
          <ProfileDropDown />
        </div>
      </div>
    </div>
  )
}

export default Header
