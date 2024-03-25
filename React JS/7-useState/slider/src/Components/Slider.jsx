import React from 'react'
import { useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";

function Slider() {

    const [slide, setSlide] = useState(false);

    const [slider, setSlider] = useState(0);
  return (
    <div className='h-screen w-full bg-zinc-200 flex items-center justify-center flex-col'>
        <div className="relative card h-52 w-72 bg-zinc-400 rounded-md flex overflow-hidden">
            <img className={`${slide ? "-translate-x-[100%]" : "translate-x-[0%]"} transition-transform duration-700 shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1707343846292-0c11438d145f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`${slide ? "-translate-x-[100%]" : "translate-x-[0%]"} transition-transform duration-700 shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1711044899535-3fc99daaeb46?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={()=>setSlide(()=>!slide)} className={`${slide ? "-rotate-180" : "rotate-[360deg]"} transition-transform ease-in-out duration-700 absolute bottom-10 left-[50%] -translate-x-[50%] bg-[#ffffff77] p-5 rounded-full cursor-pointer`}>
            <AiOutlineArrowRight size={"1.2em"} />
            </span>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <div>
          
        </div>
        <div className="relative h-52 w-80 bg-slate-600 rounded-md flex overflow-hidden">
            <img className={`translate-x-[-${slider*100}%] ${slider==0 ? "duration-[2s]": "duration-700"} transition-translate ease-in-out shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1698345470411-4e9cb72d8284?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" alt="" />
            <img className={`translate-x-[-${slider*100}%] ${slider==0 ? "duration-[2s]": "duration-700"} transition-translate ease-in-out shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1711008376725-16d1d7d2a897?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`translate-x-[-${slider*100}%] ${slider==0 ? "duration-[2s]": "duration-700"} transition-translate ease-in-out shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1710871329594-b962eb958bc9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`translate-x-[-${slider*100}%] ${slider==0 ? "duration-[2s]": "duration-700"} transition-translate ease-in-out shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1710775571472-c09e196ccf58?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            {/* <img className={`translate-x-[-100%] ${slider==0 ? "duration-[2s]": "duration-700"} transition-translate ease-in-out shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1698345470411-4e9cb72d8284?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D" alt="" /> */}
            {/* <img className={`translate-x-[-100%] ${slider==0 ? "duration-[2s]": "duration-700"} transition-translate ease-in-out shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1711008376725-16d1d7d2a897?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            {/* <img className={`translate-x-[-100%] ${slider==0 ? "duration-[2s]": "duration-700"} transition-translate ease-in-out shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1710871329594-b962eb958bc9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            {/* <img className={`translate-x-[-100%] ${slider==0 ? "duration-[2s]": "duration-700"} transition-translate ease-in-out shrink-0 h-full w-full object-cover`} src="https://images.unsplash.com/photo-1710775571472-c09e196ccf58?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

            <span onClick={()=>setSlider(()=> slider<3 ? slider+1 : 0)} className={`${slider==3 ?"rotate-180":"rotate-0"} transition-transform ease-in-out duration-700 absolute bottom-10 left-[50%] -translate-x-[50%] bg-[#ffffff77] p-5 rounded-full cursor-pointer`}>
            <AiOutlineArrowRight size={"1.2em"} />
            </span>
        </div>
    </div>
  )
}

export default Slider;