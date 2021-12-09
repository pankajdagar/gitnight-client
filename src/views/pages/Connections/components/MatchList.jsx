import React from 'react'
import { FilterIcon, SearchIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../../../../api/pastConnectionHandlers'

const directory = [
  {
    id: 1,
    name: 'Mrinal Raj',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://github.com/mrinalraj.png?size=200',
    username: 'mrinalraj',
  },
  {
    id: 2,
    name: 'Pankaj Dagar',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://github.com/pankajdagar.png?size=200',
    username: 'pankajdagar',
  },
]

const MatchList = () => {
  const dispatch = useDispatch()
  const { allConnectionsData } = useSelector((state) => state.home)
  return (
    <div>
      <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 bg-white dark:bg-card-color-dark mr-6">
        <div className="px-6 pt-6 pb-4 dark:text-text-dark">
          <h2 className="text-lg font-medium text-gray-900 dark:text-title-dark">Directory</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-text-dark">Search directory of past matches</p>
          <form className="mt-6 flex space-x-4" action="#">
            <div className="flex-1 min-w-0">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        {/* Directory list */}
        <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
          {!!allConnectionsData?.length &&
            allConnectionsData.map((person) => (
              <div key={person.id} className="relative" onClick={() => dispatch(getUserProfile(person.username))}>
                <ul role="list" className="relative z-0 divide-y divide-gray-200 dark:divide-text-dark">
                  <li key={person.id}>
                    <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-hover-dark focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={person.avatar} alt="" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a className="focus:outline-none">
                          {/* Extend touch target to entire panel */}
                          <span className="absolute inset-0" aria-hidden="true" />
                          <p className="text-sm font-medium text-gray-900 dark:text-title-dark">{`${person.firstName} ${person.lastName}`}</p>
                          <p className="text-sm text-gray-500 truncate dark:text-text-dark">{person.role}</p>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
        </nav>
      </aside>
    </div>
  )
}

export default MatchList
