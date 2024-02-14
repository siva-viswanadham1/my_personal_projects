import React from 'react'

const Contact = () => {
    
  return (
    <div>
        <div className='flex flex-wrap'>
            <div className='px-4 pt-10 pl-4 text-teal-600 text-xl'>Contact</div>
            <div className='pt-10 text-gray-400 leading-3 '>_______________________________________________________________________________________________________</div>
        </div>
        <div className='flex flex-wrap '>
            <div className='flex flex-wrap w-1/2 pr-8'>
                <div  className='font-semibold text-xl flex justify-start px-4 pt-4 '>G-Mail:</div>
                <div  className='text-xl flex justify-start px-1 pt-4 '>nssp.siva@gmail.com</div>
            </div>
            <div className='flex flex-wrap w-1/2 pr-8'>
                <div  className='font-semibold text-xl flex justify-start px-4 pt-4 '>Mobile Number:</div>
                <div  className='text-xl flex justify-start px-1 pt-4 '>+91 7981762333</div>
            </div>
            <div className='flex flex-wrap w-1/2 pr-8'>
                <div  className='font-semibold text-xl flex justify-start px-4 pt-4 '>Linkedin:</div>
                <a href="https://www.linkedin.com/in/sivaviswanadham" target="_blank" rel="noopener noreferrer" className='  flex justify-start px-0 pt-5 '>Click here</a>
            </div>
            <div className='flex flex-wrap w-1/2 pr-8'>
                <div  className='font-semibold text-xl flex justify-start px-4 pt-4 '>Git:</div>
                <a href="https://github.com/siva-viswanadham1/my_personal_projects.git" target="_blank" rel="noopener noreferrer" className='  flex justify-start px-0 pt-5 '>Click here</a>
            </div>
        </div>
    </div>
  )
}

export default Contact