import React from 'react'

const Tag = ({text}) => {
  return (
    <div className="text-xs font-bold border-white border rounded-sm p-1 my-2 mr-2">{text}</div>
  )
}

export default Tag