import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-3 items-center mb-6">
      <p className="text-xl sm:text-2xl md:text-3xl font-medium  text-indigo-600">
        {text1}{' '}
        <span className="font-medium text-xl sm:text-3xl md:text-4xl">
          {text2}
        </span>
      </p>

      <span className="w-6 sm:w-10 h-[2px] bg-gray-700"></span>
    </div>
  )
}

export default Title
