import { LockClosedIcon } from '@heroicons/react/20/solid'
// import { Navigate } from 'react-router'
// import { routes } from 'src/config'
import { useAuth } from 'src/hooks/useAuth'
import { Navigate } from 'react-router-dom'
import browserStorage from 'store'
import { routes } from 'src/config'

export const Login = () => {
  const { signIn } = useAuth()

  if (browserStorage.get('userData')) {
    return <Navigate to={routes.home} />
  }

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt='Your Company'
            />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Sign in to your Github account
            </h2>
          </div>
          <form className='mt-8 space-y-6'>
            <div>
              <button
                type='button'
                onClick={() => signIn()}
                className='group relative 
                  flex 
                  w-full 
                  justify-center 
                  rounded-md border 
                  border-gray-900 
                  text-gray-900 
                  py-2 px-4 
                  text-sm font-medium 
                  hover:bg-gray-100 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-offset-2'
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon className='h-5 w-5 border-gray-900 text-gray-900' aria-hidden='true' />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
