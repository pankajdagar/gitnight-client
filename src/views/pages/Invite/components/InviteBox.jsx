import { PlusSmIcon } from '@heroicons/react/solid'
import React from 'react'

const peopleData = [
  { name: 'Pankaj Dagar', description: 'FTE', imageUrl: 'https://github.com/pankajdagar.png?size=200' },
  { name: 'Mrinal Raj', description: 'SDE', imageUrl: 'https://github.com/mrinalraj.png?size=200' },
]

const InviteBox = () => {
  return (
    <div className="bg-white dark:bg-card-color-dark h-full px-10 py-10 flex items-center justify-center flex-col">
      <form className="flex items-center justify-center w-3/5">
        <div className="w-4/5">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter an email"
          />
        </div>
        <button
          type="submit"
          className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Send Invite
        </button>
      </form>
      <div className="w-3/5 mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide text-left dark:text-title-dark">
          TEAM MEMBERS PREVIOUSLY ADDED TO PROJECTS
        </h3>
        <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
          {!!peopleData?.length &&
            peopleData.map((people) => (
              <li key={people.id} className="py-4 flex items-center justify-between space-x-3">
                <div className="min-w-0 flex-1 flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={people.imageUrl} alt="" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-title-dark">{people.name}</p>
                    <p className="text-sm font-medium text-gray-500 truncate dark:text-title-dark">{people.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    // onClick={() => handleAddOrRemovepeople(people)}
                  >
                    <PlusSmIcon className="-ml-1 mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="text-sm font-medium text-gray-900">Invite</span>
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default InviteBox
