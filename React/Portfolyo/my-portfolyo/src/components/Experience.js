import React from 'react'

const Experience = () => {
  return (
    <div>
         <div className='flex flex-wrap'>
            <div className='px-4 pt-10 pl-4 text-teal-400 text-xl'> Work Experience</div>
            <div className='pt-10 text-gray-400 leading-3 '>_______________________________________________________________________________________________________</div>
        </div>
        <p className='font-semibold text-xl flex justify-start px-4 pt-2 '>Software Engineer</p>
        <p className=' text-xl flex justify-start px-4 pt-2 mb-1 text-cyan-400'>Concentrix Catalyst</p>
        <div className='flex flex-wrap container mx-auto flex px-4 '>
            <div className='w-1/8 pr-8 flex flex-wrap '>November 2021 to July 2023</div>
            <div className='w-1/8 pr-8 flex flex-wrap px-4 text-white'>Hyderabad, India</div>
        </div>
        <div className='font-semibold text-xl flex justify-start px-4 pt-2'>Project Details:</div>
        <div className='font-semibold  flex justify-start px-4 pt-2'>SCM Connect</div>
        <div className=' flex justify-start px-4 pt-2 text-start'>Designed a responsive web application using React, focusing on the end-to-end design and development for T-Mobile's Supply Chain Management Team, with priority on optimizing logistics and inventory processes, particularly in interactions with FedEx and retail partners.</div>
        <div className=' flex justify-start px-4 pt-2 text-start font-semibold'>Tasks:</div>
        <div className=' flex justify-start px-4 pt-2 text-start'>Created robust and reusable components using React DOM to enhance a scalable and maintainable architecture.</div>
        <div className=' flex justify-start px-4 pt-2 text-start'>Implemented dynamic forms and event handling mechanisms to enhance user interactivity and data input efficiency.</div>
        <div className=' flex justify-start px-4 pt-2 text-start'>Used React Router to establish a seamless navigation experience within the application, ensuring a user-friendly interface for supply chain analysts.
        </div>
        <div className=' flex justify-start px-4 pt-2 text-start'>Implemented the Redux architecture to manage global state efficiently, ensuring a consistent application state across various components.</div>
        <div className=' flex justify-start px-4 pt-2 text-start'>Used Redux Thunk middleware for handling asynchronous operations, such as making API calls to the backend services.</div>

    </div>
  )
}

export default Experience