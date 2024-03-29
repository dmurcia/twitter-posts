import React, { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useAuth } from '../../hooks'

const Login: React.FC = () => {
  const { signIn } = useAuth()
  const [error, setError] = useState()
  return (
    <>
      {error && <h2>There was an error</h2>}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your Github account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <button
                type="button"
                onClick={() => signIn().catch((err: any) => setError(err))}
                className="group relative 
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
                  focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 border-gray-900 text-gray-900" aria-hidden="true" />
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
