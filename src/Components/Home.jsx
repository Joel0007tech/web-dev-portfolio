import { React } from 'react'
import { homeText,link } from '../constants'
import image from "../assets/FB_IMG_1632361671640__2_-removebg-preview.png"

const Home = () => {
  
  return (
    <>
<div className='w-full h-full bg-slate-50 flex space-x-4'>
  <img src={image} alt="my image"/>
  <div className='flex flex-col'>
  <h3 className='text-5xl font-bold leading-normal'>{homeText.first}</h3>
    <h2 className='text-5xl font-bold leading-normal relative right-9'>{homeText.second}</h2>
    <a href='' className='font-bold w-[150px] p-3 bg-blue-700 text-white'>{link.firstText}</a>
  </div>
  
</div>
    </>
  )
}

export default Home