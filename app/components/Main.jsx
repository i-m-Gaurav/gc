
"use client"
import React, { useState } from 'react';
import Register from './Register';

import Image from 'next/image';

import { useRouter } from 'next/navigation';

const Main = () => {

  const [showRegisterForm, setShowRegisterForm] = useState(false);
  
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/Register');
  }

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center mx-4 my-52 ${showRegisterForm ? 'hidden' : ''}`}>

      <div className="md:w-1/2 p-4 text-center mx-32">

        <div>
          <h1 className="text-3xl font-semibold text-gray-800">Garbage Collector</h1>
          <p className="mt-4 text-gray-600">We provide some out of the world services</p>  
        </div>

        <div className="mt-8">
          {!showRegisterForm && (
            <button
              className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleRegisterClick}
            >
              Register to continue
            </button>
          )}
        </div>

      </div>

      {showRegisterForm && <Register />}

      
 <div className='md:w-1/2'>
        <Image src="/garbage.jpg" width={550} height={700} alt="Garbage Collector" />
      </div>

    </div>
  );

};

export default Main;