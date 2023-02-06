import React from 'react'
import { FaArrowRight } from "react-icons/fa";


export const Card = ({children, heading, icon, action}) => {
	return( 
		<div className='text-center bg-white flex justify-center shadow md:w-[46%] lg:w-[31%] flex-col rounded-xl my-6 md:my-0 py-16 px-5 '>
		<div className="flex  justify-center items-center mb-4">
		< img src={icon} className="w-[65px] "alt="" />
		</div>
		<h3 className="text-[rgb(62,180,167)] font-bold text-3xl mb-3">{heading}</h3>
		{children}
		</div>

		)
	
}