import '../App.css';
// import './index.css';
import { FaArrowRight } from "react-icons/fa"
// eslint-disable-next-line
import {Header} from '../components/Header'
import {Herosection} from '../components/Herosection'
import {Heading} from '../components/heading'
import {Subheading} from '../components/Subheadings'
import {Card} from '../components/card'
import serviceIconOne from "../components/assests/images/img two/Vector.png";
import serviceIconTwo from "../components/assests/images/img two/software.png";
import serviceIconThree from "../components/assests/images/img two/consult.png";
import {Button} from "../components/button"
// eslint-disable-next-line
import {Routes, Route} from 'react-router-dom'



export function Home() {
  return (
    <> 
    <Herosection />
    
  <section id="service-section" className="lg:px-16 bg-service-section bg-contain bg-repeat px-6 py-16 ">
    <Heading heading="Our Services" />
    <Subheading  subheading="Sed ventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"/>
  
  <div className="lg:justify-center lg:flex">
  <div className="mt-14 mb-12 md:flex md:flex-wrap md:gap-11 lg:gap-6 md:justify-between lg:justify-between">
    <Card heading="Designs" action="Learn more" className="bg-white" icon={serviceIconOne}>

    <p className="text-gray-800 sm:px-[25px] lg:text-[1.2em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
    
    </Card>

      <Card heading="Software Development" action="Learn more"  icon={serviceIconTwo}>
    <p className="text-gray-800 sm:px-[25px] lg:text-[1.2em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
    
    </Card>

      <Card heading="IT Consulting" action="Learn more"  icon={serviceIconThree}>
    <p className="text-gray-800 sm:px-[25px] lg:text-[1.2em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
    
    </Card>
  </div>
  </div>
  <div className="text-center text-primary mt-10">
    <h3 className="text-xl font-extrabold">What can we help you with today</h3>
    <Button action="Get In Touch" />
  </div>
  </section>

  <section id="whyus_section" className="lg:px-16 px-6 py-16 bg-bg-three bg-cover bg-repeat text-white">

    <div className="md:flex md:justify-between md:gap-11">
    <img src={require("../components/assests/images/img.png") } className="mb-5 min-w-full md:min-w-[53%]" alt=""/>
    <div>
    <h3 className="font-extrabold text-2xl mb-4 mt-10 md:text-4xl">Why choose us?</h3>
    <p className="text-gray-200 lg:text-[1.2em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
    <p className="text-gray-200 lg:text-[1.2em] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
   

    <div className="md:flex mt-7 md:mt-12 md:items-center  md:justify-between justify-center md:gap-[.9em] lg:gap-[2em]">

      <div className="md:mb-0 flex justify-center items-center flex-col mb-8 ">
     <span className="py-5 px-3 border rounded-[100%] border-heading"> <img src={require("../components/assests/images/img two/shake.png") } className="w-[4rem]" alt=""/></span>
    
      <h4 className="md:mt-[.4em] lg:text-[1.2em]">lorem isupm</h4>
      </div>

      <div className="md:mb-0 mb-8 flex justify-center items-center flex-col">
      <span className="py-4 px-6 border rounded-[100%] border-heading"><img src={require("../components/assests/images/img two/creative.png") }  className="w-[2rem]" alt=""/></span>
    
      <h4 className="lg:text-[1.2em]">lorem isupm</h4>
      </div>

      <div className="flex justify-center items-center flex-col md:my-0">
        <span className="py-4 px-4 border rounded-[100%] border-heading"><img src={require("../components/assests/images/img two/award.png") } className="w-[3rem]"  alt=""/></span>
      <h4 className="lg:text-[1.2em]">lorem isupm</h4>
      </div>

     </div>
    </div>
    </div>
    <Button action="Get In Touch" />
  </section>

  <section id="ServiceSection" className="lg:px-16 px-6 py-16 bg-contain bg-repeat bg-service-section ">
    <div className="" >
       <Heading heading="Our Services" />
    <Subheading  subheading="Sed ventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"/>
  
    <div className="mt-8 md:flex md:flex-wrap md:gap-11 md:mt-14 lg:gap-6 md:justify-between lg:justify-between">
      <div className="bg-white rounded-t-md rounded-b-md my-6 md:my-0 md:w-[46%] lg:w-[31%]">
       <img src={require("../components/assests/images/img two/one.jpg") } className="mb-5 min-w-full rounded-t-md" alt=""/>

        <div className="text-center py-6"><h4 className="font-bold">lorem isup</h4> <h5 className="font-thin">lorem misx</h5></div>
        </div>

       <div className="bg-white rounded-t-md rounded-b-md my-6 md:w-[46%] md:my-0 lg:w-[31%]">
       <img src={require("../components/assests/images/img two/Rectangle.jpg") } className="mb-5 min-w-full rounded-t-md" alt=""/>
        <div className="text-center py-6"> <h4 className="font-bold">lorem isup</h4> <h5 className="font-thin">lorem misx</h5></div>
       </div>

       <div className="bg-white rounded-t-md rounded-b-md my-6 md:w-[46%] md:my-0 lg:w-[31%]">
       <img src={require("../components/assests/images/img two/Rectanglel.jpg") } className="mb-5 min-w-full rounded-t-md" alt=""/>
        <div className="text-center py-6"> <h4 className="font-bold">lorem isup</h4> <h5 className="font-thin">lorem misx</h5></div>
      </div>

    </div>
    </div>


  </section>

  <section className="bg-white text-center lg:px-16 py-16 px-6 bg-white">
  {/* social proof */}
  <h3 className="text-primary text-2xl lg:text-4xl font-extrabold mb-2"> Client worked with</h3>
  <h5 className="text-gray-800 lg:text-[1.2em]">lorem lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
  <div className="flex items-center justify-center"> 
  <div className="md:flex  md:gap-[1.5em]">
  <img src={require("../components/assests/images/Original-Logo.png") } className="w-[6em] py-6 md:w-[5.4rem]" alt=""/>
  {/*<span className="bg-blue-400 "><img src={require("./components/assests/images/logo 1.png") } /></span>*/}
  <img src={require("../components/assests/images/TANA HEALTHCARE LTD LOGO-06 1.png") } alt="" className="md:w-[5.4em] py-6 w-[6em]"/>
  <img src={require("../components/assests/images/Vector.png") } className="w-[6em] md:w-[5.4em] py-6" alt=""/>
  <img src={require("../components/assests/images/victex logo 1.png") } className="w-[6em] md:w-[5.4rem] py-6" alt=""/>
</div>
  </div>

  </section>
 
  

  </>
  );
}


