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
      <div>
        
      </div>
    </section>
  );
};

export default Home;
