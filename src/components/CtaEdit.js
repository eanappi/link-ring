export const CtaEdit = () => {
  return (
    <section className="bg-custom-03 text-custom-02 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col justify-center mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center">
          <div className="relative flex-grow w-full">
            <input type="email" id="email" name="email" className="w-full bg-custom-01 bg-opacity-50 rounded-md border-2 border-custom-01 focus:border-gray-200 focus:ring-2 focus:ring-gray-200 text-base outline-none text-custom-01 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="font-semibold text-custom-01 bg-custom-01 border-2 py-2 px-8 rounded-md text-lg focus:outline-none hover:bg-gray-800 hover:border-gray-100 hover:text-gray-200">
            Edit
          </button>
        </div>
      </div>
    </section>
  )
}
