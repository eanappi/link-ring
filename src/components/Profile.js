import { useState, useEffect } from 'react'
import { ShowProfile } from './ShowProfile'

export const Profile = ({hashprofile}) => {
  const [profile, setProfile] = useState({})

  const handleAddProfile = (evt) => {
    evt.preventDefault()
    const thumbnail = evt.target.thumbnail.value
    const title = evt.target.title.value
    const nickname = evt.target.nickname.value
    const description = evt.target.description.value

    if (thumbnail === '' || title === '') return

    setProfile({thumbnail, title, nickname, description})
  }
  
  useEffect(() => hashprofile(profile), [profile])

  return (
    <>
      <section className="my-10 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Profile
        </h2>
        <form onSubmit={handleAddProfile}>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
              <input type="url" name="thumbnail" autoComplete="off" placeholder="https://Url-Of-Thumbnail" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <input type="text" name="title" autoComplete="off" placeholder="title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div>
              <input type="text" name="nickname" autoComplete="off" placeholder="NickName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
            </div>
            <div className="col-span-full">
              <textarea name="description" maxLength="140" placeholder="Description" className="block w-full h-40 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add
            </button>
          </div>
        </form>
      </section>
      
      <ShowProfile profile={profile} />
    </>
  )
}
