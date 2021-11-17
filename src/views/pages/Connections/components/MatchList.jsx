import React from 'react'
import { FilterIcon, SearchIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { setUserInView } from '../../../../state/Connections/connectionActions'

const directory = [
  {
    id: 1,
    name: 'Mrinal Raj',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://github.com/mrinalraj.png?size=200',
    data: {
      name: 'Mrinal Raj',
      imageUrl: 'https://github.com/mrinalraj.png?size=200',
      coverImageUrl:
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
      introduction: `
          Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.
          Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.
        `,
      fields: {
        LinkedIn: 'mrinalraj',
        Twitter: 'raj.mrnl@example.com',
        Website: 'Senior Front-End Developer',
        GitHub: 'mrinalraj',
        Location: 'CA',
        Country: 'India',
        City: 'Bangalore',
      },
    },
  },
  {
    id: 2,
    name: 'Pankaj Dagar',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://github.com/pankajdagar.png?size=200',
    data: {
      name: 'Pankaj Dagar',
      imageUrl: 'https://github.com/pankajdagar.png?size=200',
      coverImageUrl:
        'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      introduction: `
      Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.
      Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.
    `,
      fields: {
        LinkedIn: 'pankajdagar',
        Twitter: 'ricardocooper@example.com',
        Website: 'Senior Front-End Developer',
        GitHub: 'pankajdagar',
        Location: 'San Francisco',
        Country: 'India',
        City: 'Delhi',
      },
    },
  },
]

const MatchList = () => {
  const dispatch = useDispatch()
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
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        {/* Directory list */}
        <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
          {directory.map((person) => (
            <div key={person.id} className="relative" onClick={() => dispatch(setUserInView(person.data))}>
              <ul role="list" className="relative z-0 divide-y divide-gray-200 dark:divide-text-dark">
                <li key={person.id}>
                  <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-hover-dark focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900 dark:text-title-dark">{person.name}</p>
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
