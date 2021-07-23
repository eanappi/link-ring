import { useRef, useEffect } from 'react'

export const HashMaker = ({hashurl='', generate}) => {
  const inputUrl = useRef('')

  useEffect(() => {
    inputUrl.current.value = hashurl
  }, [hashurl])
  
  return (
    <section className="bg-white dark:bg-gray-800">
        <div className="max-w-full px-6 py-16 mx-auto text-center">
            <p className="max-w-7xl mx-auto mt-5 text-gray-500 dark:text-gray-400">Press the button, copy and share the profile url generated</p>

            <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
              <input type="url" ref={inputUrl} autoComplete="off" className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Profile url generated" />
                
              <button onClick={() => generate()} className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Generate
                </button>
            </div>
        </div>
    </section>
  )
}
