import React from 'react'
import { XIcon } from '@heroicons/react/solid'

const Chips = ({ onDelete, text, index }) => {
  return (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-indigo-100 bg-indigo-700 border border-indigo-700 ">
      <div className="text-xs font-normal leading-none max-w-full flex-initial">{text}</div>
      {!!onDelete && <div className="flex flex-auto flex-row-reverse">
        <XIcon className="h-4 w-4 ml-1.5 text-white cursor-pointer" onClick={() => onDelete(index)} />
      </div>}
    </div>
  )
}

export default Chips
