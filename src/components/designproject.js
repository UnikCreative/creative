import React from 'react'
import {Card} from './card'
import { FaArrowRight } from "react-icons/fa";


export const Design = () => {
	return( 
   
    <div className="md:flex md:justify-center md:flex-wrap md:gap-[1.75rem]">
    
    
    
    <Card>
            {/*card one*/}
    <div>
    <img alt="logio" src={require ("../components/assests/images/oho.png") }/>
    <p className="text-left mt-3 text-gray-500">Ecommerce Application</p>
    </div>
    </Card>

    <Card>
            {/*card one*/}
    <div>
    <img alt="logio" src={require ("../components/assests/images/easylear.png") }/>
    <p className="text-left mt-3 text-gray-500">Ecommerce Application</p>
    </div>
    </Card>

    <Card>
            {/*card one*/}
    <div>
    <img alt="logio" src={require ("../components/assests/images/oho.png") }/>
    <p className="text-left mt-3 text-gray-500">Ecommerce Application</p>
    </div>
    </Card>


    </div>

    )
	
}