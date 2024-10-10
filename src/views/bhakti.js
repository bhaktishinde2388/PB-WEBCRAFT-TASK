import React from 'react'
import Header from "./../components/Header.js";
import Footer from "./../components/Footer.js";
import WebsiteBuildingIcon from "./icons/real-estate.png"
import AppDevlopment from "./icons/mobile-coding.png"

function Bhakti() {
  return (
  <>
  <Header/>
   

   {/* heading.... */}
   <div className='bg-gradient-to-r from-indigo-100 via-purple-300 to-pink-100 p-6'>
    <h1 className='text-center font-bold text-5xl'>
      <span className='text-black'>PBwebcraft:</span><br></br>
      <span  className='text-white '>"Elevating</span>  <span className='text-purple-700'>Digital Expressionces</span>
      <span className='text-white'>&nbsp;with <br></br> Precision and Innovation"</span>
      </h1>
      <br></br>
      <div className='flex flex-col'>
      <h4 className='text-black  text-xl drop-shadow-2xl font-semibold text-center p-6 '>Crafting Digital Brilliance for Tomorrow's Success</h4>
      <button className='text-white bg-black hover:bg-slate-600  py-2 px-4 mx-auto rounded-full mb-12 font-thin '>Learn More</button>
    </div>
   </div>


{/*services..............  */}
   <div className='text-center p-6 '>
      <h2 className='text-center text-xl text-violet-600 m-5'>SERVICES</h2>
      <h1 className='text-4xl text-violet-700 font-bold '><span>We Will Give What WE </span>
          <br></br>
     <span>Have The Best</span> </h1>

     <div className='min-h-screen grid place-items-center'>
      <div className='grid md:grid-cols-3 gap-24 '>
          <div className='container m-auto'>
          <img className='h-24 w-24 m-auto' src={WebsiteBuildingIcon}/>
          <h2 className='text-black m-2 font-semibold'> Website Building</h2>
          <p className='mx-10 '>
          Revolutionize your online presence with our expert website development services.
           We specialize in custom designs, responsive solutions, and seamless functionality.
            Elevate your business – contact us today!"
          </p>
          </div>

          <div>
          <img className='h-24 w-24 m-auto' src={WebsiteBuildingIcon}/>
          <h2 className='text-black m-2 font-semibold'>Digital Growth Solution </h2>
          <p className='mx-10'>
          "Transform your digital presence with our expert marketing solutions.
           From strategic campaigns to impactful online strategies, we elevate your brand's visibility.
           Take the lead in the digital landscape – partner with us!"
          </p>
          </div>

          <div>
          <img className='h-24 w-24 m-auto' src={WebsiteBuildingIcon}/>
          <h2 className='text-black m-2 font-semibold'>App Devlopment </h2>
          <p className='mx-10'>
          "Capture moments that last a lifetime! Book our professional photoshoot services for stunning visuals and timeless memories.
           From events to portraits, we bring your vision to life. Contact us to schedule your photoshoot today!"
          </p>
          </div>
      </div>
     </div>
   </div>


{/* zero............ */}
<div className='bg-black text-white p-8'>
  <h1 className='text-center font-bold text-4xl'>
  Just Every Journey Begin with ZERO
  </h1>

  <div className='text-center font-bold m-2    flex text-5xl md:text-7xl px-48'>
    <h1 className='' >  <span>2</span><br></br><span className='text-lg '>Years of Experience</span></h1>
    <span className='px-1'>.</span>
    <h1 className='px-4'>  <span>22</span><br></br><span className='text-lg'>Years of Experience</span></h1>
    <span className=' px-4'>.</span>
    <h1 className='px-4'>  <span>15</span><br></br><span className='text-lg'>Years of Experience</span></h1>
    <span className=' px-4'>.</span>
    <h1 className='px-4'>  <span>0</span><br></br><span className='text-lg'>Years of Experience</span></h1>
  </div>
</div>


{/* about/.............. */}
<div className='w-96 mx-40 font-50 m-8'>
<h1 className=' text-violet-500 font-semibold m-4'>ABOUT</h1>
<h1 className='text-4xl text-black font-bold'>
About 
<br></br>
  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; (PBwebcrafts)
</h1>

<p className=' text-black '>At PBwebcrafts, we are the architects of your digital success. Specializing in website development and digital marketing, we bring innovation and creativity to the forefront. Our team is dedicated to crafting seamless online experiences that propel your brand forward. Whether it's through captivating websites or strategic digital campaigns, we transform ideas into impactful realities. With a passion for precision and a commitment to excellence, PBwebcrafts is your trusted partner for a thriving digital presence.

Services:
- Website Development
- Digital Growth Solution
- Application Devlopment

Elevate your brand with PBwebcrafts – where every pixel tells a story, and every strategy builds success."</p>
</div>

{/* TESTIMONIALS
 */}

 <div className=' bg-violet-400 px-64 py-10'>
<h1 className='text-center text-xl text-white m-5'>TESTIMONIALS</h1>
<p className='text-center  text-white text-4xl font-bold'>Revolutionize your online landscape with PBwebcrafts. 
  From cutting-edge website development to dynamic digital marketing strategies, we're here to innovate your digital presence.</p>
  <h1 className='Cr text-xl text-white m-5'>Where Vision Meets Pixels:</h1>

 </div>
 <h1 className='bg-red-50 p-8 text-center text-black font-bold'>OUR HAPPY CLIENTS</h1>



{/* contact */}
<div className='bg-red-50 p-8 my-18'>
  <h1 className=' text-violet-500 font-semibold  text-left'>CONTACT</h1>
  <h1 className='text-3xl text-black font-bold'>Let’s Work Together</h1>

</div>

   <Footer/>
    </>
  )
}

export default Bhakti