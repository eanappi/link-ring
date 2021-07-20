import { useState } from 'react'
import { Links } from './Links'
import { v4 as uuidv4 } from 'uuid'

export const FormLink = () => {
  const [links, useLinks] = useState([])
  
  const addLink = (evt) => {
    evt.preventDefault()

    let title = evt.target.title.value
    let url = evt.target.url.value

    if (title === '' || url === '') return

    let id = uuidv4()

    useLinks(prevLinks => {
      return [...prevLinks, {id, title, url}]
    })
  }
  
  return (
    <>
      <section className="my-10 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Link
        </h2>
        <form onSubmit={addLink}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <input type="text" name="title" placeholder="Title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            
            <div>
              <input type="url" name="url" placeholder="https://" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>    
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add
            </button>
          </div>
        </form>
      </section>
      
      <Links links={links} />
    </>
  )
}
