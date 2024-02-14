import React from 'react'
import Pic from '../siva.jpg'

const AboutMe = () => {
  return (
    <div>
        <div className='flex flex-wrap'>
            <div className='px-4 pt-10 pl-4 text-teal-400 text-xl '>About Me</div>
            <div className='pt-10 text-gray-400 leading-3 '>_______________________________________________________________________________________________________</div>
        </div>
        <div className='flex flex-wrap container mx-auto flex p-8'>
            <div className='w-3/4 pr-8 flex flex-wrap'>
                <p className='mb-8'>Greetings! I'm Naga Sai Siva Panchakshari Viswanadham, and I'm passionate about designing web applications as a React developer. I am from Narasapur in Andhra Pradesh, my journey has led me to the exciting world of software engineering.</p>
                <p className='mb-8'>I completed my graduation in 2021, earning a B.Tech degree in Electrical and Electronics Engineering from C R Reddy College of Engineering. This educational background has equipped me with a solid foundation in engineering principles and problem-solving, which I now apply to the dynamic and ever-evolving realm of software engineering.</p>
                <p>In my role at Concentrix, I am passionate about leveraging technology to create innovative solutions and enhance user experiences. The challenges of software engineering continually fuel my curiosity, and I am dedicated to staying abreast of industry trends and emerging technologies.</p>
            </div>
            <div className='w-1/4 pr-8 flex flex-wrap mx-auto sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                <img src={Pic} className='rounded-full overflow-hidden sm:w-20 sm:w-20 w-40 h-40 object-cover'/>
            </div>
        </div>
            
    </div>
  )
}

export default AboutMe