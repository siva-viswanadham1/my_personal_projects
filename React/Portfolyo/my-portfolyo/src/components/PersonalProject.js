import React from 'react'

const PersonalProject = () => {
  return (
    <div>
        <div className='flex flex-wrap'>
            <div className='px-4 pt-10 pl-4 text-teal-600 text-xl'> Personal Project</div>
            <div className='pt-10 text-gray-400 leading-3 '>_______________________________________________________________________________________________________</div>
        </div>
        <div>
        <div>
            <p className='font-semibold text-xl flex justify-start px-4 pt-2 '>Weather App</p>
            <div className=' flex justify-start px-4 pt-2 text-start'>Created Weather app using      Vanilla JavaScript. user can fetch Real-time weather data.</div>
            </div>
        </div>
        <div>
            <div>
                <p className='font-semibold text-xl flex justify-start px-4 pt-2 '>IMDB Clone React Website</p>
                <div className=' flex justify-start px-4 pt-2 text-start'>Created an IMDB clone, where user can fetch Real-time trending movies data and will show it in grid format, designed the whole application by using React and Tailwind CSS</div>
            </div>
            <div>
                <p className='font-semibold  flex justify-start px-4 pt-2 '>Features of the project:</p>
                <div className=' flex justify-start px-4 pt-2 text-start'>User will be able to view all the latest & trending movies.</div>
                <div className=' flex justify-start px-4 pt-2 text-start'>User can create his own separate watchlist and in that watchlist they can filter movies according to genre.</div>
                <div className=' flex justify-start px-4 pt-2 text-start'>Search
                feature will be there for movies in Watchlist.</div>
            </div>
            <div className='flex flex-wrap'>
                <p className='font-semibold  flex justify-start px-4 pt-2 '>Link:</p>
                <a href="https://6595c0f9c648e8006e3dc3a5--teal-pothos-6c7ff8.netlify.app/" target="_blank" rel="noopener noreferrer" className='  flex justify-start px-4 pt-2 '>Click here</a>
            </div>
        </div>
    </div>
  )
}

export default PersonalProject