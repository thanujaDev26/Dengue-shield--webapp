import React from 'react';

const About = () => {
  return (
    <section className='m-0'>
      {/*top section introduction*/}
      <div class="flex flex-col md:flex-row items-center bg-transparent min-h-1/2 m-0 w-full p-0">
        <div class="md:w-1/2 p-12 text-center md:text-center">
          <h1 class="text-5xl font-bold text-gray-800 leading-tight">Our Dengue Detection<br/>And<br/>Mitigation System</h1>
        </div>

        <div class="md:w-1/2 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-white to-transparent md:block hidden"></div>
          <img src="images/about_main_img.png" alt="Illustration" class="w-full h-auto object-cover"/>
        </div>
      </div>

      {/*Second section mission vision*/} 
      <div className='flex flex-col md:flex-row items-center justify-center w-full px-12 py-3'>
        <div className='md:w-5/12 flex flex-col items-center justify-center'>
          <div class="w-full flex justify-center items-center bg-transparent md:p-5 md:px-10">
            <div className='text-start'>
              <h1 className='text-4xl antialiased font-bold text-black p-1'>Our Mission</h1>
            </div>        
          </div>
          <img src="images/about_vector1.png" className='hidden sm:block h-auto w-2/5'></img>
        </div>
        <div className='w-2/12 flex items-start'>
          <img src="images/about_arrow_right.png" className='hidden sm:block h-auto w-1/8'></img>
        </div>
        <div className='md:w-5/12 w-full rounded-2xl border-2 border-emerald-200 bg-emerald-200 text-center'>
          <p className='md:p-8 md:px-20 p-2 justify-center'>Our mission is to use advanced technology to prevent and control dengue fever, creating healthier communities through real-time surveillance, predictive analytics, and community engagement.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center w-full px-12 py-3'>   
          <div class="w-full bg-transparent md:p-5 md:px-10 block sm:hidden">
            <div className='flex justify-center items-center text-start'>
              <h1 className='text-4xl antialiased font-bold text-black p-1'>Our Vision</h1>
            </div>        
          </div>     
        <div className='md:w-5/12 w-full rounded-2xl border-2 border-emerald-200 bg-emerald-200 text-center'>
          <p className='md:p-8 md:px-20 p-2 justify-center'>Our vision is a dengue-free world. We strive to achieve this through continuous innovation,collaboration with health organizations and governments, and community engagement in combating dengue.</p>
        </div>
        <div className='w-2/12 flex items-end justify-end'>
          <img src="images/about_arrow_left.png" className='hidden sm:block h-auto w-1/8'></img>
        </div>
        <div className='md:w-5/12 flex flex-col items-center justify-center'>
          <div class="w-full bg-transparent md:p-5 md:px-10 hidden sm:block">
            <div className='flex justify-center items-center text-start'>
              <h1 className='text-4xl antialiased font-bold text-black p-1'>Our Vision</h1>
            </div>        
          </div>
          <img src="images/about_vector2.png" className='hidden sm:block h-auto w-2/5'></img>
        </div>        
      </div>

      {/*Third section */} 
      <div className='w-full px-12 py-3'>
        <div class="w-full rounded-xl border-2 border-emerald-200 bg-gradient-to-b from-white to-emerald-300 md:block">
          <div class="w-full bg-transparent md:p-5 md:px-10">
            <div className='flex items-center justify-center'>
              <h1 className='text-4xl antialiased font-bold text-black p-1'>Our Services</h1>
            </div>     
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='p-3 md:w-1/4 grid place-items-center'>
                  <img src="images/about_service1.png" className='w-20 h-20'></img>
                  <p className='p-2 text-lg font-semibold'>Real-time Surveillance</p>
                </div>
                <div className='p-3 md:w-1/4 grid place-items-center'>
                  <img src="images/about_service2.png" className='w-20 h-20'></img>
                  <p className='p-2 text-lg font-semibold'>Predictive Analytics</p>
                </div>
                <div className='p-3 md:w-1/4 grid place-items-center'>
                  <img src="images/about_service3.png" className='w-20 h-20'></img>
                  <p className='p-2 text-lg font-semibold'>Community Engagement</p>
                </div>
                <div className='p-3 md:w-1/4 grid place-items-center'>
                  <img src="images/about_service4.png" className='w-20 h-20'></img>
                  <p className='p-2 text-lg font-semibold'>Mobile Application</p>
                </div>
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;