import React from 'react'

const MatchCard = () => {
  return (
    <div key={'unique'}>
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex space-x-4 flex-basis-3">
          <img className="h-10 w-10 rounded-full" src={`https://github.com/pankajdagar.png?size=200`} alt="" />
          <div>
            <p className="text-sm font-medium text-blue-600 truncate dark:text-link-dark">Pankaj Dagar</p>
            <p className="flex items-center text-sm text-gray-500">
              <span className="truncate">pankajdagar</span>
            </p>
          </div>
        </div>
        <div className="hidden md:flex md:flex-basis-3">
          <div>
            <p className="text-sm text-gray-700 dark:text-link-dark">Popular Repo</p>
            <p className="flex items-center text-sm text-blue-600 dark:text-link-dark">repo-name</p>
            <p className="text-xs text-gray-500 dark:text-text-dark">repo descritpion lorem</p>
          </div>
        </div>
        <div className="flex-basis-3 flex justify-between">
          <div className="flex flex-col space-y-2 dark:text-text-dark font-semibold">
            <p className="text-sm">Mon 26</p>
            <p className="text-sm">04:30 PM PST</p>
          </div>
          <button className="bg-btngreen text-white rounded-md py-2 px-3 mb-6 text-sm font-medium dark:text-black">Schedule</button>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
