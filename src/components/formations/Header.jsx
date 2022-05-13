import React from 'react'
import bgImg from '../../assets/hero.png'
const Header = () => {
  return (
     <div className='w-full bg-teal flex flex-col justify-between pt-20'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full text-white px-2 py-8'>
                    {/* <p className='text-xl md:text-2xl text-center md:text-left font-semibold'>
                        MacroInfos la solution aux problèmes informatiques</p> */}
                    <h1 className=' py-3 text-3xl md:text-5xl text-center md:text-left font-bold'>MacroInfos offre des formations de qualité en informatiques et en IT</h1>
                    {/* <p className='text-xl md:text-2xl text-center md:text-left font-semibold'>Vente des équipements informatiques</p> */}
                    <button className='py-3 px-3 sm:w-[60%] my-4 b-info hidden sm:block'>Commencer</button>
                </div>
                <div>
                    <img className=' w-full' src={bgImg} alt="" />
                </div>

            </div>
        </div>
  )
}

export default Header