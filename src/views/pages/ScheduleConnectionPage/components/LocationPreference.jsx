import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const LocationPreference = () => {
  const { scheduleConnectionData } = useSelector((state) => state.scheduleConnection)
  const locations = [
    { name: 'Anywhere on Gitnight' },
    { name: `Best Match in ${scheduleConnectionData?.city ? scheduleConnectionData?.city : 'your city'}` },
    { name: `Best Match in ${scheduleConnectionData?.country ? scheduleConnectionData?.country : 'your country'}` },
  ]

  const [selected, setSelected] = useState(locations[0])
  return (
    <>
      <p className="mb-4 dark:text-title-dark">📍 Where</p>
      <div className="bg-white rounded-md -space-y-px">
        {locations.map((location, locationIdx) => (
          <div
            key={locationIdx}
            className="flex items-center relative border p-4 cursor-pointer focus:outline-none dark:bg-card-color-dark dark:text-text-dark"
            onClick={() => setSelected(location)}
          >
            <input
              id={location.name}
              name="notification-method"
              type="radio"
              value={selected}
              defaultChecked={location.name === 'Anywhere on Gitnight'}
              className="focus:blue-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label htmlFor={location.name} className="ml-3 block text-sm font-medium text-gray-700 dark:text-text-dark w-full">
              {location.name}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default LocationPreference
