import checkImage from '../assets/check-box-fill.svg'
import deleteImage from '../assets/delete-icon.svg'
import { useLocation } from "wouter"

export const Links = ({links, changeLinks}) => {
  const [location, setLocation] = useLocation()

  return (
    <>
    {
      links.map((link) => (
        <div key={link?.id} className="flex w-full justify-between max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md my-5 dark:bg-gray-800"> 
          <div className="flex items-center justify-center w-12 bg-gray-700"> 
            <img src={checkImage} alt="title" className="w-6 h-6" /> 
          </div> 

          <div className="px-4 py-4 -mx-3"> 
            <div className="mx-3"> 
              <p className="text-sm text-gray-600 dark:text-gray-200"> 
                <a href={link?.url} target="_blank" className="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline"> 
                 {link?.title} 
                </a> 
              </p> 
            </div>
          </div> 
          
          {
          (location == '/new') ? (
            <button onClick={() => changeLinks(link?.id)} className="flex items-center justify-center w-12 bg-red-500 hover:bg-red-200"> 
              <img src={deleteImage} alt="title" className="w-6 h-6" /> 
            </button>
          ) : null
          }
        </div> 
      ))
    }
    </>
  )
 }


