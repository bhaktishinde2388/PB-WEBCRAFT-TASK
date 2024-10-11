import React from 'react'
import Header from "./../components/Header.js";
import Footer from "./../components/Footer.js";
import WebsiteBuildingIcon from "./icons/real-estate.png"
import AppDevlopment from "./icons/mobile-coding.png"
import { FaLinkedin, FaFacebookF, FaTwitter } from 'react-icons/fa';

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

     <div className='min-h-screen grid place-items-center lg:-mt-20 lg:-mb-32'>
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
<div className='bg-blue-950 text-white p-8'>
  <h1 className='text-center font-bold text-2xl md:text-4xl my-4'>
    Just Every Journey Begin with ZERO
  </h1>

  <div className='flex  justify-center text-center font-bold m-1 text-4xl md:text-3xl lg:text-7xl md:px-14 lg:px-48'>
    <div className='px-4 mb-4'>
      <span>2</span><br />
      <span className='text-sm md:text-lg'>Years of Experience</span>
    </div>
    <span className='px-2 hidden md:inline'>.</span>
    <div className='px-4 mb-4'>
      <span>22</span><br />
      <span className='text-sm md:text-lg'>Years of Experience</span>
    </div>
    <span className='px-2 hidden md:inline'>.</span>
    <div className='px-4 mb-4'>
      <span>15</span><br />
      <span className='text-sm md:text-lg'>Years of Experience</span>
    </div>
    <span className='px-2 hidden md:inline'>.</span>
    <div className='px-4 mb-4'>
      <span>0</span><br />
      <span className='text-sm md:text-lg'>Years of Experience</span>
    </div>
  </div>
</div>




{/* about/.............. */}
<div className='w-full max-w-xl mx-10 auto px-4 md:px-8 lg:px-20 m-8 text-left'>
  <h1 className='text-violet-500 font-semibold text-lg md:text-l lg:text-xl m-4'>ABOUT</h1>
  <h1 className='text-2xl md:text-3xl lg:text-4xl text-black font-bold'>
    About <br />
    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; (PBwebcrafts)
  </h1>

  <p className='text-sm md:text-base lg:text-lg text-black mt-4'>
    At PBwebcrafts, we are the architects of your digital success. Specializing in website development and digital marketing, we bring innovation and creativity to the forefront. Our team is dedicated to crafting seamless online experiences that propel your brand forward. Whether it's through captivating websites or strategic digital campaigns, we transform ideas into impactful realities. With a passion for precision and a commitment to excellence, PBwebcrafts is your trusted partner for a thriving digital presence.
  </p>

  <p className='text-sm md:text-base lg:text-lg text-black mt-4'>
    Services:
    <ul className='list-none ml-6'>
      <li>- Website Development</li>
      <li>- Digital Growth Solution</li>
      <li>- Application Development</li>
    </ul>
  </p>

  <p className='text-sm md:text-base lg:text-lg text-black mt-4'>
    Elevate your brand with PBwebcrafts – where every pixel tells a story, and every strategy builds success.
  </p>
</div>

{/* TESTIMONIALS
 */}

<div className='bg-violet-400 px-8 py-10 md:px-32 lg:px-64'>
  <h1 className='text-center text-lg md:text-xl text-white m-5'>TESTIMONIALS</h1>
  <p className='text-center text-white text-2xl md:text-3xl lg:text-4xl font-bold'>
    Revolutionize your online landscape with PBwebcrafts. From cutting-edge website development to dynamic digital marketing strategies, we're here to innovate your digital presence.
  </p>
  <h1 className='text-xl text-white m-5 text-center'>Where Vision Meets Pixels:</h1>
</div>

<h1 className='bg-gray-100 p-4 md:p-8 text-center text-black font-bold text-lg md:text-xl lg:text-2xl'>
  OUR HAPPY CLIENTS
</h1>



{/* contact */}
<div className="bg-gray-100 min-h-screen flex justify-center items-center my-24">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Let’s Work Together</h2>
            <p className="mb-2">pbwebcrafts22@gmail.com</p>
            <p className="mb-2">Phone: +91-8975434272,</p>
            <p className="mb-6">+91-8767487235</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-600 hover:text-purple-600">
                <FaLinkedin size={24} />
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-purple-600">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-purple-600">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="md:w-1/2">
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <textarea
                  placeholder="Leave us a message..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    
   <Footer/>
    </>
  )
}

export default Bhakti