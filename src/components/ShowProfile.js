export const ShowProfile = ({profile={}}) => {
  const handleErrorImgDefault = (evt) => {
    evt.target.src = 'default-image.svg'
  }
  
  if (Object.keys(profile).length === 0) return null

  return (
    <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400" alt="Thumbnail" src={(profile?.thumbnail)} onError={handleErrorImgDefault} />
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{profile?.title}</h2>

        <p className="mt-2 text-gray-600 dark:text-gray-200">{profile?.description}</p>
        
        <div className="flex justify-end mt-4">
            <span className="text-xl font-medium text-indigo-500 dark:text-indigo-300">{profile?.nickname}</span>
        </div>
    </div>    
  ) 
}
