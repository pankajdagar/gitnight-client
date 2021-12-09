import React from 'react'

const Tags = ({ isSelected, text, onTagClick, index }) => {
  return (
    <div
      className={`flex justify-center items-center m-1 font-medium py-2 px-3 rounded-lg text-blue-10  ${!!onTagClick && 'cursor-pointer'} ${
        isSelected ? 'bg-blue-500 border border-blue-500' : 'bg-gray-200 border border-gray-200'
      }`}
      onClick={() => !!onTagClick && onTagClick(index)}
    >
      <div className={`text-xs font-normal leading-none max-w-full flex-initial ${isSelected ? 'text-white' : ''}`}>
        {text}
      </div>
    </div>
  )
}

export default Tags
