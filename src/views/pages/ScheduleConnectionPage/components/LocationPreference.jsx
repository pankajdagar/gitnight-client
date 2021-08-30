import React from 'react'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { classNames } from 'utils/helper'

const locations = [
  { name: 'Anywhere on Gitnight' },
  { name: 'Best Match in Bangalore' },
  { name: 'Best Match in India' },
]

const LocationPreference = () => {
  const [selected, setSelected] = useState(locations[0])
  return (
    <>
      <p className="mb-4">📍 Where</p>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Where</RadioGroup.Label>
        <div className="bg-white rounded-md -space-y-px">
          {locations.map((location, locationIdx) => (
            <RadioGroup.Option
              key={location.name}
              value={location}
              className={({ checked }) =>
                classNames(
                  locationIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                  locationIdx === locations.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                  checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                  'relative border p-4 flex cursor-pointer focus:outline-none',
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <span
                    className={classNames(
                      checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                      active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                      'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center',
                    )}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <div className="ml-3 flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium')}
                    >
                      {location.name}
                    </RadioGroup.Label>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  )
}

export default LocationPreference
