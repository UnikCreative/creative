import React from 'react'
import { FaArrowRight } from "react-icons/fa";


export const Button = ({children, heading, icon, action}) => {
	return( 
		<div className='text-center flex justify-center  '>
				<div className="flex items-center gap-2 mt-6"><FaArrowRight /> {action} </div> 
		</div>

		)
	
}