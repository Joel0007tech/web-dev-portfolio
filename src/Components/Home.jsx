import React from 'react'
import { homeText } from '../constants'

const Home = () => {
  return (
    <>
<div>
    <h3>{homeText.first}</h3>
    <h2>{homeText.second}</h2>
</div>
<div>
    <button className='bg-orange-500 text-white'>{homeText.button}</button>
</div>
    </>
  )
}

export default Home