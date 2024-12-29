import React from 'react';

const Home = () => {
  return (
    <section className='m-0'>
      {/*top section introduction*/}
      <div class="flex flex-col md:flex-row items-center bg-transparent min-h-1/2 m-0 w-full p-0">
        <div class="md:w-1/2 p-12 text-center md:text-center">
          <h1 class="text-5xl font-bold text-gray-800 leading-tight">Dengue Shield</h1>
          <p class="text-lg text-gray-600 mt-4">
            A sensor-based system detects mosquito breeding conditions and provides real-time alerts to prevent dengue outbreaks.
          </p>
          <button class="mt-6 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
            Learn More
          </button>
        </div>

        <div class="md:w-1/2 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-white to-transparent md:block hidden"></div>
          <img src="images/home_top.png" alt="Illustration" class="w-full h-auto object-cover"/>
        </div>
      </div>

      {/*second section */}
      <div className='md:m-8 m-4 rounded-3xl border-2 border-lime-500 container md:w-full w-11/12'>
        <div className='flex flex-col md:flex-row items-center text-center'>           
          <div className='md:m-5 m-5 text-start'>
            <h1 className='text-3xl antialiased font-bold text-gray-600'>Key Features</h1>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center text-center'>           
          <div className='md:m-4 m-4 rounded-full border-2 border-lime-500 md:w-1/3 w-11/12 '>
            <h1 className='p-1 text-xl font-bold text-gray-600'>Real-time Monitoring</h1>
            <p className='py-1 px-10 text-md font-normal text-gray-600'>Uses IoT sensors to detect stagnant water sources and monitor weather patterns.</p>
          </div>
          <div className='md:m-4 m-4 rounded-full border-2 border-lime-500 md:w-1/3 w-11/12 '>
            <h1 className='p-1 text-xl font-bold text-gray-600'>Predictive Analytics</h1>
            <p className='py-1 px-10 text-md font-normal text-gray-600'>Analyzes historical and current data to predict potential outbreaks.</p>
          </div>
          <div className='md:m-4 m-4 rounded-full border-2 border-lime-500 md:w-1/3 w-11/12 '>
            <h1 className='p-1 text-xl font-bold text-gray-600'>Mosquito Surveillance</h1>
            <p className='py-1 px-10 text-md font-normal text-gray-600'>Maps areas with high mosquito populations and sends automated 
            alerts.</p>
          </div>
        </div>   
        <div className='flex flex-col md:flex-row items-center text-center'>           
          <div className='md:m-4 m-4 rounded-full border-2 border-lime-500 md:w-1/3 w-11/12 '>
            <h1 className='p-1 text-xl font-bold text-gray-600'>Community Engagement</h1>
            <p className='py-1 px-10 text-md font-normal text-gray-600'>Encourages community involvement through reporting and educational resources..</p>
          </div>
          <div className='md:m-4 m-4 rounded-full border-2 border-lime-500 md:w-1/3 w-11/12 '>
            <h1 className='p-1 text-xl font-bold text-gray-600'>Data-Driven Insights</h1>
            <p className='py-1 px-10 text-md font-normal text-gray-600'>Data is analyzed with machine learning to provide actionable insights for mosquito prevention.</p>
          </div>
          <div className='md:m-4 m-4 rounded-full border-2 border-lime-500 md:w-1/3 w-11/12 '>
            <h1 className='p-1 text-xl font-bold text-gray-600'>Mapping Breeding Sites</h1>
            <p className='py-1 px-10 text-md font-normal text-gray-600'>The system maps high mosquito population areas, focusing on stagnant water sites.</p>
          </div>
        </div>     
      </div>
    </section>
  );
};

export default Home;
