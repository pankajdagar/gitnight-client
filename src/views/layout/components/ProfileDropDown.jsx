import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { classNames } from '../../../utils/helper'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

const userNavigation = [
  { name: 'New Update', href: '#' },
  { name: 'Help', href: '#' },
  { name: 'Settings', href: '/dashboard/schedule' },
]

const ProfileDropDown = () => {
  const { profileData } = useSelector((state) => state.user)
  const [, , removeCookie] = useCookies(['token'])
  const handleLogout = () => {
    removeCookie('token', { path: '/' })
  }
  return (
    <Menu as="div" className="ml-3 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src={`https://github.com/${profileData.username}.png?size=200`} alt="" />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <Menu.Item key="user-info">
                {({ active }) => (
                  <Link
                    to={'/dashboard/profile'}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 border-b',
                    )}
                  >
                    <p>Signed in as</p>
                    <p className="font-semibold">{profileData.username}</p>
                  </Link>
                )}
              </Menu.Item>
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item key="sign-out">
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 border-t cursor-pointer',
                    )}
                  >
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default ProfileDropDown
