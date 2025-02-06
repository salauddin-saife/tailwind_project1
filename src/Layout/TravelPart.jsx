import React from 'react'
import Contain from '../components/Contain'

const TravelPart = () => {
  return (
    <div className='pt-[100px]'>
        <Contain className={' ml-auto mr-auto '}>
            <div className='flex justify-center text-center'>
            <h1 className='text-[40px] font-semibold font-poppins text-font_primary text-center' >Travel Benefit For User</h1>
            </div>
            <div className='flex justify-center text-center pt-[50px]'>
            <p className='text-[16px] font-normal leading-[30px] text-font_paragraph w-[682px] text-center font-poppins '>We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</p>
            </div>
           
            
            
        </Contain>
    </div>
  )
}

export default TravelPart