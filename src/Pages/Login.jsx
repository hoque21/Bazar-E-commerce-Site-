import React from 'react';
import { google, github } from '../Assets';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const auth = getAuth(); // Call getAuth function to get auth object

  const handleSignIn = (provider) => (e) => {
    e.preventDefault();

    if (provider === 'google') {
      signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast.success('Sign-in with Google successful!');
        })
        .catch((error) => {
          console.error(error);
          toast.error('Sign-in with Google failed.');
        });
    } else if (provider === 'github') {
      signInWithPopup(auth, new GithubAuthProvider())
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast.success('Sign-in with GitHub successful!');
        })
        .catch((error) => {
          console.error(error);
          toast.error('Sign-in with GitHub failed.');
        });
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
        toast.success('Sign-out successful!');
      })
      .catch((error) => {
        console.error('Sign-out error:', error);
        toast.error('Sign-out failed.');
      });
  };

  return (
    <div className="flex cursor-pointer flex-col items-center border border-gray-300 p-4">
      {/* Toast Container */}
      <ToastContainer />
      {/* Google Sign In */}
      <div className='cursor-pointer'>
        <div className='flex items-center my-4 border-b border-gray-300 pb-4'>
          <img src={google} alt="Google Logo" className="w-8 h-8 mr-2" />
          <span className="text-lg" onClick={handleSignIn('google')}>Sign In with Google</span>
        </div>
        {/* Sign Out */}
        <div className="flex items-center">
          <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded">Sign Out</button>
        </div>
      </div>
      {/* GitHub Sign In */}
      <div className='cursor-pointer'>
        <div className='flex  items-center my-4 border-b border-gray-300 pb-4'>
          <img src={github} alt="GitHub Logo" className="w-8 h-8 mr-2 cursor-pointer" />
          <span className="text-lg" onClick={handleSignIn('github')}>Sign In with GitHub</span>
        </div>
        {/* Sign Out */}
        <div className="flex items-center">
          <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
