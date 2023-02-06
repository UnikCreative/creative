import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {Routes, Route} from 'react-router-dom'



export const Button = ({children, heading, icon, action}) => {
	return( 
		<div className='text-center flex justify-center  mt-3 text-primary'>
				<a href="/contact"><div className="flex items-center md:text-2xl gap-2 mt-6 cursor-pointer"> <span className="border-2 border-primary p-4 rounded-full"><FaArrowRight /></span> {action} </div></a> 
		</div>

		)
	
}