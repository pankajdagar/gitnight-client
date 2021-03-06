import dayjs from 'dayjs'
import React from 'react'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'

const LoginPage = (props) => {
  const { location } = props
  const history = useHistory()
  
  useEffect(() => {
    location?.state?.from?.pathname && localStorage.setItem('landingUrl', location?.state?.from?.pathname)
  }, [location])

  useEffect(() => {
    return window.removeEventListener("message", loginListener)
  },[])
  const [, setCookie] = useCookies(['token'])

  const loginListener = useCallback((event) => {
    console.log("message", event)
    if(event.origin === window.origin) {
      if(event.data.hasOwnProperty("login") && event.data?.login?.success) {
        const token = event.data.login.token
        setCookie('token', token, { path: '/', maxAge: 172800 })
        const landingUrl = localStorage.getItem('landingUrl')
        if (landingUrl?.length && landingUrl !== '/dashboard') {
          history.replace(`${landingUrl}`)
        } else {
          history.replace('/dashboard')
        }
      }
    }
  }, [history])

  const openLogin = useCallback(() => {
    const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=200,height=300,left=100,top=100`
    const loginWindow = window.open(`${process.env.REACT_APP_API_URL}/auth/login/github?origin=${window.location.origin}`, params)
    loginWindow.focus()
    loginWindow.addEventListener("message", loginListener, false)
  }, [])

  return (
    <div>
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-7/12">
          <div className="mx-auto w-full max-w-lg text-center">
            <div>
              <img className="h-12 w-auto m-auto" src="/assets/images/faces.png" alt="Workflow" />
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Happy {dayjs().format('dddd')}</h2>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm mb-4 font-medium text-gray-700">
                    Gitnight makes relevant connections between developers across globe to help each other and
                    collaborate on your next project
                  </p>

                  <div>
                    <button
                      className="w-full lg:w-80 inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-black text-sm font-medium text-white hover:bg-gray-900 focus:outline-none"
                      onClick={openLogin}
                    >
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-2.5">Sign in with GitHub</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-5/12">
          <img className="absolute inset-0 h-full w-full object-cover" src={`/assets/images/login_page.jpg`} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
