import React from 'react'
import {Card} from './card'
import { FaArrowRight } from "react-icons/fa";


export const Allproject = () => {
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
            {/*card two*/}

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


            <Card>
            {/*card one*/}
           <div>
           <img alt="logio" src={require ("../components/assests/images/Original-Logo.png") } className="w-[6.5rem]" />
            <p className="text-left mt-3 text-gray-500">NGO Web App</p>
          </div>
            </Card>

            <Card>
            {/*card one*/}
           <div>
             <img alt="logio" src={require ("../components/assests/images/veri.png") }/>
            <p className="text-left mt-3 text-gray-500">Ecommerce Application</p>
          </div>
            </Card>
          
          <Card>
            {/*card one*/}
           <div>
             <img alt="logio"className="ml-[-1.8em]" src={require ("../components/assests/images/uni.png") }/>
            <p className="text-left mt-3 text-gray-500">Ecommerce Application</p>
          </div>
            </Card>

          <Card>
            {/*card one*/}
           <div>
             <img alt="logio" src={require ("../components/assests/images/akemshow.png") }/>
            <p className="text-left mt-3 text-gray-500">Ecommerce Application</p>
          </div>
            </Card>


            <Card>
            {/*card one*/}
           <div>
            <img alt="logio" src={require ("../components/assests/images/TANA HEALTHCARE LTD LOGO-06 1.png") }/>
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

            <Card>
            {/*card one*/}
           <div>
            <img alt="logio" className="w-[5.6em]" src={require ("../components/assests/images/victex logo 1.png") }/>
            <p className="text-left mt-3 text-gray-500">Ecommerce Application</p>
          </div>
            </Card>



          </div>

	)
	
}