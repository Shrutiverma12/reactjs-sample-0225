import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div className='min-h-screen bg-blue-900 flex items-center justify-center px-4'>
      <div className='bg-blue-900 text-white max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold'>Log in!</h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleLogin}>
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium'>
                Email Address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                placeholder='abcd@gmail.com'
                className='w-full px-4 py-2 mt-1 bg-blue-800 border border-white text-white placeholder-gray-300 rounded'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                placeholder='Enter Password'
                className='w-full px-4 py-2 mt-1 bg-blue-800 border border-white text-white placeholder-gray-300 rounded'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <label className='flex items-center text-sm'>
              <input
                type='checkbox'
                className='form-checkbox text-blue-600 mr-2'
              />
              Remember me
            </label>
            <div className='text-sm'>
              <a href='#' className='text-white hover:underline'>
                Forgot Password?
              </a>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='w-full bg-white text-blue-900 font-bold py-2 rounded hover:bg-gray-200 transition'
            >
              Log in
            </button>
          </div>
        </form>
        <div className='text-center mt-4 opacity-10 text-sm'>
          campus.build <br /> CAREERS, NOT JOBS
        </div>
      </div>
    </div>
  );
};

export default Login;
