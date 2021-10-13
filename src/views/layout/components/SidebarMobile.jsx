import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { classNames } from 'utils/helper'
import { FolderIcon, HomeIcon, UsersIcon, XIcon } from '@heroicons/react/outline'
import { ReactComponent as LogoLight } from 'icons/LogoLight.svg'
import SidebarBottom from './SidebarBottom'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  { name: 'Invite Friends', href: '#', icon: UsersIcon, current: true },
  { name: 'Connections', href: '#', icon: FolderIcon, current: false },
]

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 flex z-40 lg:hidden" open={sidebarOpen} onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 bg-gray-800">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 flex items-center px-4">
              <LogoLight className="h-10 w-40" />
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2 space-y-1">
                <button className=" w-full bg-green-500 text-white rounded-md py-2 mb-4 text-sm font-medium">
                  Schedule connections
                </button>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-black opacity-90 text-white' : 'text-gray-300',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-300' : 'text-gray-400',
                        'mr-4 flex-shrink-0 h-6 w-6',
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <SidebarBottom />
          </div>
        </Transition.Child>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Sidebar
