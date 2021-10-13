import React from 'react'
import { ReactComponent as LogoLight } from 'icons/LogoLight.svg'
import { Link, NavLink } from 'react-router-dom'
import { Switch } from '@headlessui/react'
import { useDarkMode } from '../../../hooks/useDarkMode'
import { classNames } from 'utils/helper'
import SidebarBottom from './SidebarBottom'

const SidebarDesktop = ({ navigation }) => {
  const [isDark, setIsDark] = useDarkMode()
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-header opacity-90 dark:bg-header-dark">
            <LogoLight className="h-10 w-40" />
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-white space-y-1 dark:bg-sidebar-dark">
              <Link to={{ pathname: '/dashboard/schedule' }}>
                <button className="w-full bg-btngreen text-white dark:text-black rounded-md py-2 mb-4 text-sm font-medium">
                  Schedule connections
                </button>
              </Link>
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={{ pathname: item.href }}
                  activeClassName="text-white bg-blue-200 dark:bg-hover-dark"
                  className={
                    'text-gray-900 dark:text-title-dark group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  }
                >
                  <item.icon
                    className={'text-gray-900 dark:text-title-dark mr-3 flex-shrink-0 h-6 w-6'}
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        <SidebarBottom />
      </div>
    </div>
  )
}

export default SidebarDesktop
