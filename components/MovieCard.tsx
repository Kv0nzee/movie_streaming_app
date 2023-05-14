/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { BsFillPlayFill } from 'react-icons/bs';

interface MovieCardProps {
    data: Record<string, any>
}

const MovieCard:React.FC<MovieCardProps> = ({data}) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
        <img className="cursor-pointer object-cover 
                        transition duration-300 shadow-xl 
                        rounded-md group-hover:opacity-90 
                        sm:group-hover:opacity-0 delay-300 
                        w-full h-[12vw]
                        " 
            src={data.thumbnailUrl} alt="Thumbnail" 
        />
        <div className="
            opacity-0
            absolute
            top-0
            transition
            duration-300
            z-10
            invisible
            sm:visible
            delay-300
            w-full
            scale-0
            group-hover:scale-110
            group-hover:-translate-y-[6vw]
            group-hover:translate-x-[2vw]
            group-hover:opacity-100
        ">
            <img src={data.thumbnailUrl} alt="Movie" draggable={false} className="
            cursor-pointer
            object-cover
            transition
            shadow-xl
            rounded-t-md
            w-full
            h-[12vw]
            " />
            <div className="absolute z-10 w-full p-2 transition bg-zinc-800 lg:p-4 shadow-b-md roundex-b-md">
                <div className="flex flex-row items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 transition bg-white cursor-pointer lg:w-10 lg:h-10 roundex-full hover:bg-neutral-300 " 
                        onClick={() => {}}>
                        <BsFillPlayFill size={30}/>
                    </div>
                </div>
                <p className="mt-4 font-semibold text-green-400"> 
                    New <span className="text-white ">2023</span>
                </p>

                <div className='flex flex-row items-center gap-3 mt-4'>
                    <p className='text-white text-[10px] lg:text-sm'>{data.duration}</p>
                </div>

                <div className='flex flex-row items-center gap-3 mt-4'>
                    <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard