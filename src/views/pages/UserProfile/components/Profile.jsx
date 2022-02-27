import React from 'react'
import { ChevronLeftIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import { classNames } from 'utils/helper'
import { useSelector } from 'react-redux'

const fields = {
  LinkedIn: 'linkedin',
  Twitter: 'twitter',
  Website: 'website',
  GitHub: 'username',
  Country: 'country',
  City: 'city',
}

const tabs = [
  { name: 'Profile', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Recognition', href: '#', current: false },
]
// const profileData = {
//   name: 'Pankaj Dagar',
//   imageUrl: 'https://github.com/pankajdagar.png?size=200',
//   coverImageUrl:
//     'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
//   about: `
//     <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
//     <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
//   `,
//   fields: {
//     LinkedIn: 'linkedin',
//     Twitter: 'twitter',
//     Website: 'website',
//     GitHub: 'username',
//     Country: 'country',
//     City: 'city',
//   },
// }

const Profile = ({ isProfilePage = true }) => {
  const { profileData } = useSelector((state) => (!!isProfilePage ? state.user : state.connection))
  console.log(profileData)
  return (
    <div className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last bg-white dark:bg-card-color-dark">
      <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
        <button className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
          <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Directory</span>
        </button>
      </nav>

      {!!Object.keys(profileData)?.length && (
        <article>
          <div>
            <div>
              <img
                className="h-32 w-full object-cover lg:h-48"
                src={`https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`}
                alt=""
              />
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  <img
                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                    src={profileData.avatar}
                    alt=""
                  />
                </div>
                <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate dark:text-title-dark">
                      {profileData.firstName + profileData.lastName}
                    </h1>
                  </div>
                  <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>Message</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      <PhoneIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate dark:text-title-dark">{`${profileData.firstName} ${profileData.lastName}`}</h1>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-2 2xl:mt-5">
            <div className="border-b border-gray-200">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={classNames(
                        tab.current
                          ? 'border-pink-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm dark:text-title-dark',
                      )}
                      aria-current={tab.current ? 'page' : undefined}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              {Object.keys(fields).map((field) => (
                <div key={field} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 dark:text-title-dark">{field}</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-text-dark">{profileData[fields[field]]}</dd>
                </div>
              ))}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500 dark:text-title-dark">About</dt>
                <dd
                  className="mt-1 max-w-prose text-sm text-gray-900 space-y-5 dark:text-text-dark"
                  dangerouslySetInnerHTML={{ __html: profileData.introduction }}
                />
              </div>
            </dl>
          </div>

          {/* <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
            <h2 className="text-sm font-medium text-gray-500 dark:text-title-dark">Repos</h2>
            <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {profileData.popularRepo.map((repo) => (
                <div
                  key={repo.handle}
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                >
                  <div className="flex-shrink-0">
                  </div>
                  <div className="flex-1 min-w-0">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">{repo.name}</p>
                      <p className="text-sm text-gray-500 truncate">{repo?.description}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </article>
      )}
    </div>
  )
}

export default Profile
