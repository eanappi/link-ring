import { useState, useEffect } from 'react'
import { Links } from './Links'
import { v4 as uuidv4 } from 'uuid'

export const FormLink = ({hashlinks}) => {
  const [links, setLinks] = useState([])
  
  const handleLink = (evt) => {
    evt.preventDefault()

    let title = evt.target.title.value
    let url = evt.target.url.value

    if (title === '' || url === '') return

    let id = uuidv4()

    setLinks(prevLinks => {
      return [...prevLinks, {id, title, url}]
    })
  }
  
  useEffect(() => hashlinks(links), [links])

  const changeLinks = (linkId) => {
    setLinks(links.filter(({id}) => id !== linkId))
  }
  
  return (
    <>
      <section className="my-10 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Links
        </h2>
        <form onSubmit={handleLink}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <input type="text" autoComplete="off" name="title" placeholder="Title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            
            <div>
              <input type="url" autoComplete="off" name="url" placeholder="https://" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>    
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add
            </button>
          </div>
        </form>
      </section>
      
      <Links links={links} changeLinks={changeLinks} />
    </>
  )
}
