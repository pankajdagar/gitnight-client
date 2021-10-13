import React from 'react'
import { Switch } from '@headlessui/react'
import { useDarkMode } from '../../../hooks/useDarkMode'
import { classNames } from 'utils/helper'

const SidebarBottom = () => {
  const [isDark, setIsDark] = useDarkMode()
  return (
    <div className="bg-white dark:bg-sidebar-dark">
      <div className="flex p-4 items-center justify-between border-t dark:border-text-dark">
        <p className="text-sm font-bold dark:text-text-dark">Dark Mode</p>
        <Switch
          checked={isDark}
          onChange={setIsDark}
          className={classNames(
            isDark ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
          )}
        >
          <span className="sr-only">Dark Mode</span>
          <span
            aria-hidden="true"
            className={classNames(
              isDark ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
            )}
          />
        </Switch>
      </div>
      <div className="flex px-4 py-2 items-center justify-between border-t dark:text-text-dark dark:border-text-dark">
        <p className="text-sm">© 2021 Gitnight</p>
        <p className="text-sm">Privacy policy</p>
      </div>
    </div>
  )
}

export default SidebarBottom
