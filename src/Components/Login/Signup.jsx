import React from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted');
    localStorage.setItem('isLoggedIn', true);
    navigate('/dashboard');
  }

  return (
    <section className='m-0'>      
      <div class="flex md:flex-row flex-col p-10 items-center bg-gradient-to-b from-white to-teal-200 min-h-1/2 m-0 w-full">
        <div class="md:w-2/4 p-12 text-center md:text-center">
          <h1 class="text-4xl font-bold text-gray-800 leading-tight pb-5 md:hidden block">Welcome!</h1>
          <h1 class="text-4xl font-bold text-gray-800 leading-tight pb-5 md:block hidden">Welcome to</h1>
          <h2 class="text-3xl font-bold text-gray-800 leading-tight md:block hidden"> Our Dengue Detection and Mitigation System!</h2>
          <img src="images/Sign-up.png" alt="Illustration" class="w-full h-auto object-cover md:block hidden"/>
        </div>

        <div class="md:w-2/4 relative border-2 border-teal-300 rounded-3xl p-4 grid place-items-center">
          <div className='p-2 '>
            <h1 class="text-4xl font-bold text-gray-800 leading-tight pt-5">Sign Up</h1>            
          </div>
          <h2 class="text-xl font-bold text-gray-500 leading-tight pt-5">Create your account to get started</h2>
          <form className='w-full'>
            <div className='w-full grid place-items-center'>                  
              <input type="gmail" className='w-10/12 h-10 bg-transparent m-5 p-4 focus:outline-none border-b-2 border-gray-300 focus:border-blue-400 transition duration-300' placeholder='Enter Your Email'></input>
              <input type="text" className='w-10/12 h-10 bg-transparent m-5 p-4 focus:outline-none border-b-2 border-gray-300 focus:border-blue-400 transition duration-300' placeholder='Enter Username'></input>
              <input type="password" className='w-10/12 h-10 bg-transparent m-5 p-4 focus:outline-none border-b-2 border-gray-300 focus:border-blue-400 transition duration-300' placeholder='Enter Password'></input>
              <input type="password" className='w-10/12 h-10 bg-transparent m-5 p-4 focus:outline-none border-b-2 border-gray-300 focus:border-blue-400 transition duration-300' placeholder='Confirm Password'></input>
              <button class="md:w-1/4 w-1/2 px-6 py-3 my-8 bg-teal-500 text-white rounded-3xl hover:bg-teal-300 hover:text-black" onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
            <div className='w-full px-4 flex justify-center items-center'>
              <p>Already  have an account? <a href="/sign-in" className='font-bold'>Sign In</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;