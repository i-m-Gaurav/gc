import React from 'react';

const Login = () => {
  return (
    <div className='flex justify-center items-center my-20'>
      <div className='w-96 p-8 bg-white border rounded-lg shadow-lg'>

        <h1 className='text-3xl font-semibold mb-4'>Login</h1>
        <form>
          <div className='mb-4'>
            <label htmlFor='login-email' className='block text-gray-600'>Email</label>
            <input type='email' id='login-email' className='w-full border rounded-lg p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor='login-password' className='block text-gray-600'>Password</label>
            <input type='password' id='login-password' className='w-full border rounded-lg p-2' />
          </div>
          <div className='text-center'>
            <button className='bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
