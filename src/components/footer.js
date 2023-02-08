// import React from 'react'

export const Footer = () => {
	return( 

		<footer className="bg-bg-three bg-cover bg-repeat px-6 py-16 text-left lg:px-16 text-gray-400 lg:text-[1.2em]">
		
		
		<div className="md:flex md:flex-wrap md:justify-between">
		<div className="flex flex-col  w-[70%] md:w-[16em] ">
		<a href="/"><img alt="logo"  src={require("./assests/images/footerlogo.png") } className="mb-1 lg:mb-3 w-[7em]" /></a>
		<p className=" ">We are one of Nigeria’ Leading website design and development agency whose core values are Quality, Relationship, and Trust.</p>
		</div>


		<ol className="mt-8 md:mt-0">
		<li className="text-bold text-white mb-1 lg:mb-3">Contact</li>
		<li className="mb-1">info@unikcreativetech.com</li>
		<li>+234 8118982337</li>
		</ol>


		<ol className="mt-8 md:mt-0">
		<li className="text-bold text-white mb-1 lg:mb-3">Address</li>
		<li className="mb-1">13 Ibom layout, Marian</li>
		<li>Cross River State</li>
		</ol>

		</div>

		<div>
		<div className="border-t-2 border-gray-400 mt-4"></div>
		<p className="md:text-center mt-3">Copyright @ UnikCreativetech All Right Reserve</p>
		</div>

		
		</footer>

		)
	
	
}