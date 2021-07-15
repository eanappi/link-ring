export const Footer = () => {
  return (
    <footer className="bg-custom-03 text-custom-02 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-custom-02">
          <span className="ml-3 text-xl">Link Ring</span>
        </a>
        <p className="text-sm text-custom-02 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 —
          <a href="https://twitter.com/eanappi" className="text-custom-02 ml-1" rel="noopener noreferrer" target="_blank">@eanappi</a>
        </p>
      </div>
    </footer>
  )
}
