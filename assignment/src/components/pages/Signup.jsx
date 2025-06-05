const Signup = () => {
  return (
    <div className='min-h-screen bg-blue-900 flex items-center justify-center px-4'>
      <div className='bg-blue-900 text-white max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold'>Sign up</h2>
        </div>
        <form className='mt-8 space-y-6'>
          <div className='space-y-4'>
            <div>
              <label htmlFor='username' className='block text-sm font-medium'>
                Username
              </label>
              <input
                id='username'
                name='username'
                type='text'
                placeholder='Enter Name'
                required
                className='w-full px-4 py-2 mt-1 bg-blue-800 border border-white text-white placeholder-gray-300 rounded'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium'>
                Email Address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='abcd@gmail.com'
                required
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
                placeholder='Enter Password'
                required
                className='w-full px-4 py-2 mt-1 bg-blue-800 border border-white text-white placeholder-gray-300 rounded'
              />
            </div>
          </div>

          <div className='flex items-center text-sm mt-2'>
            <input
              id='terms'
              name='terms'
              type='checkbox'
              className='form-checkbox text-blue-600 mr-2'
              required
            />
            <label htmlFor='terms'>
              I accept the{' '}
              <a href='#' className='underline'>
                terms & conditions
              </a>
            </label>
          </div>

          <div>
            <button
              type='submit'
              className='w-full bg-white text-blue-900 font-bold py-2 rounded hover:bg-gray-200 transition'
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
