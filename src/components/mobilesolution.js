import React from 'react'
import {Card} from './card'
import { FaArrowRight } from "react-icons/fa";


export const Mobilesolution = () => {
	return( 
	
			 <div className="md:flex md:justify-center md:flex-wrap md:gap-[1.75rem]">
              <Card >
            {/*card one*/}
           <div className="">
            <img alt="logio" src={require ("../components/assests/images/urban.png") }/>
            <p className="text-left mt-3 text-gray-500">Blockchain Web Application</p>
          </div>
            </Card>


            <Card>

           <div>
            <img alt="logio" src={require ("../components/assests/images/ovolo.png") }/>
            <p className="text-left mt-3 text-gray-500">Listing Web Application</p>

          </div>
            </Card>


            <Card>
            {/*card three*/}
           <div>
             <img alt="logio" src={require ("../components/assests/images/afritickets.png") }/>
            <p className="text-left mt-7 text-gray-500">Events Ticket Web App</p>
          </div>
            </Card>



          </div>

	)
	
}