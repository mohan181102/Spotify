import React, { useState } from 'react'

function Row({img,genre}) {
  const [data, setdata] = useState([])

  async function genredata(){
    
  }
  return (
    <>
    <h1>{genre}</h1>
    <div>
      {
        data.map
      }

    </div>
    </>
  )
}

export default Row