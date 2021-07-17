import Logo from '../assets/logo.svg'

export const NavBar = ({location}) => {
  return (
    <header className="bg-custom-01 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-custom-01 mb-4 md:mb-0">
          <img src={Logo} alt="Logo" className="w-14 h-14" />
          <span className="ml-3 text-xl">Link Ring</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          {/*
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          */}
        </nav>
        <button onClick={() => location('/new')} className="inline-flex items-center font-semibold border-2 border-custom-01 py-1 px-3 rounded-md text-gray-900 text-base mt-4 md:mt-0 hover:bg-gray-800 hover:text-gray-200 hover:border-transparent">
          Make your page
        </button>
      </div>
    </header>
  )
}
