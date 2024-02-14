
import { Link } from 'react-scroll';
import Skills from './Skills';

import React from 'react'

const NavBar = () => {
  const handleDownload = () => {
    // URL to your document file
    const documentUrl = 'https://drive.google.com/file/d/1PvGW59K28WGA7jfW3CEjST_oFLM9Fw8J/view?usp=drivesdk';

    // Create a link element
    const link = document.createElement('a');
    link.href = documentUrl;
    link.target = '_blank'; // Open the document in a new tab if needed
    link.rel = 'noopener noreferrer'; // Security best practice for target="_blank"

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up: remove the link from the DOM
    document.body.removeChild(link);
  };
  return (
    <div className=' flex flex-wrap flex-row-reverse bg-gray-400 sm:py-2 sm:pl-1 pl-3 py-4 w-full border-transparent text-fuchsia-500'>
      <button className=' px-3 mx-2 hover:scale-110 duration-300 hover:bg-sky-700 cursor-pointer' onClick={handleDownload}>Resume</button>
      <Link to='Contact' smooth className=' px-3 mx-2 hover:scale-110 duration-300 hover:bg-sky-700 cursor-pointer'>Contact</Link>
      <Link to='PersonalProject' smooth className=' px-3 mx-2 hover:scale-110 duration-300 hover:bg-sky-700 cursor-pointer'>Personal Project</Link>
      <Link to='Skills' smooth className=' px-3 mx-2 mr-4 hover:scale-110 duration-300 hover:bg-sky-700 cursor-pointer' >Skills</Link>
      <Link to='Experience' smooth className=' px-3 mx-2 hover:scale-110 duration-300 hover:bg-sky-700 cursor-pointer'>Work Experience</Link>
      <Link to='About me' smooth className=' px-3 mx-2 hover:scale-110 duration-300 hover:bg-sky-700 cursor-pointer'>About me</Link>
    </div>
  )
}

export default NavBar