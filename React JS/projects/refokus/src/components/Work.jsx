import React from 'react'

function Work() {
    const images = [
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "60%", left: "50%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "66%", left: "47%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "53%", left: "54%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "68%", left: "50%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "61%", left: "56%", isActive: false},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "58%", left: "49%", isActive: false},
    ] 
  return (
    <div className='w-full bg-[#161618] relative'>
    <div className='max-w-screen-xl select-none text-center text-[40vw] mx-auto font-medium leading-none'>
        work
    </div>
    {images.map(img => ( img.isActive &&
        <img className='rounded-3xl absolute h-[52%] -translate-x-[50%] -translate-y-[50%]' style={{top: img.top, left: img.left}} src={img.url} alt="" />
    ))}
    </div>
  )
}

export default Work