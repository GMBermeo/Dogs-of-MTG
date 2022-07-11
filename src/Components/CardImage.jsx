import React from 'react'

const CardImage = ({src}) => {
    function enlarge(e) {
        e.preventDefault();
        window.open(src, '_blank');
    }

  return (
    <img className="mr-4 mb-4 float-left max-h-[200px] rounded-md"
              src={src}
              alt={src}
              onClick={enlarge}
            />
  )
}

export default CardImage