import React from 'react';

const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 p-8 bg-white border rounded-lg shadow-lg'>

        <h1 className='text-3xl font-semibold mb-4'>Register</h1>
        <form>
          <div className='mb-4'>
            <label htmlFor='register-name' className='block text-gray-600'>Name</label>
            <input type='text' id='register-name' className='w-full border rounded-lg p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor='register-username' className='block text-gray-600'>Username</label>
            <input type='text' id='register-username' className='w-full border rounded-lg p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor='register-email' className='block text-gray-600'>Email</label>
            <input type='email' id='register-email' className='w-full border rounded-lg p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor='register-password' className='block text-gray-600'>Password</label>
            <input type='password' id='register-password' className='w-full border rounded-lg p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor='register-confirm-password' className='block text-gray-600'>Confirm Password</label>
            <input type='password' id='register-confirm-password' className='w-full border rounded-lg p-2' />
          </div>
          <div className='text-center'>
            <button className='bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
