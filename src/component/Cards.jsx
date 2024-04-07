import React from 'react'

const Cards = () => {
  return (
    <div className="w-full h-screen  bg-[#F1F1F1] flex flex-col md:flex-row items-center px-4 md:px-20 gap-5 pt-10 md:pt-0">
        <div className="cardcontainer  w-full h-[50vh] md:w-1/2">
            <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute rounded-full px-5 py-2 border-2 border-[#CDEA68] left-10 bottom-10 text-[#CDEA68] text-xl">&copy;2020-2024</button>
            </div>
        </div>
        <div className="cardcontainer flex flex-col md:flex-row  gap-5 h-full w-full md:h-[50vh] md:w-1/2">
            <div className="card relative flex items-center justify-center rounded-xl h-[30vh] w-full md:w-1/2 md:h-full bg-[#0f221f]">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className="absolute rounded-full px-5 py-2 border-2 border-white left-10 bottom-10 text-white text-xl">RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative flex items-center justify-center rounded-xl w-full h-[30vh] md:w-1/2 md:h-full bg-[#0f221f]">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className="absolute rounded-full px-5 py-2 border-2 border-white left-10 bottom-10 text-white text-xl">BUSINESS BOOTCAMP ALUMNI</button> 
            </div>

        </div>
    </div>
  )
}

export default Cards