import React from 'react'
import { ReactComponent as LogoLight } from 'icons/LogoLight.svg'
import { classNames } from 'utils/helper'

const SidebarDesktop = ({navigation}) => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-black opacity-90">
            <LogoLight className="h-10 w-40" />
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-white space-y-1">
              <button className=" w-full bg-green-500 text-white rounded-md py-2 mb-4 text-sm font-medium">
                Schedule connections
              </button>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? ' text-white bg-gray-900' : 'text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-white' : 'text-gray-900',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarDesktop
