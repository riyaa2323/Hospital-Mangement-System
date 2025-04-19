import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log({ name, email, password, mode: state });
  };

  return (
    <form
      className="min-h-[80vh] flex items-center justify-center px-4"
      onSubmit={onSubmitHandler}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {state === 'Sign up' ? 'Create an account' : 'Login'}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please {state === 'Sign up' ? 'sign up' : 'log in'} to book appointments
        </p>

        {state === 'Sign up' && (
          <div className="mb-4">
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
        >
          {state === 'Sign up' ? 'Sign Up' : 'Login'}
        </button>

        <p className="text-center text-sm mt-4">
          {state === 'Sign up' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            className="text-blue-500 cursor-pointer underline"
            onClick={() => setState(state === 'Sign up' ? 'Login' : 'Sign up')}
          >
            {state === 'Sign up' ? 'Login' : 'Sign up'}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
