import React from 'react'

function ShowImage(props) {
    const img = `https://source.unsplash.com/600x400/?${props.name}`
  return (
    <>
    <div className='imgDiv'>
        <img src={img} alt="Search Img" />
    </div>
    
      
    </>
  )
}

export default ShowImage
