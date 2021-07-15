import IconCheckSquare from '../assets/check-square-features.svg'

export const Features = () => {
  return (
    <section className="text-custom-01 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4">Raw Denim Heirloom Man Braid</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-custom-01 rounded flex p-4 h-full items-center">
              <img src={IconCheckSquare} className="mr-2" />
              <span className="title-font font-medium">Authentic Cliche Forage</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-custom-01 rounded flex p-4 h-full items-center">
              <img src={IconCheckSquare} className="mr-2" />
              <span className="title-font font-medium">Kinfolk Chips Snackwave</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-custom-01 rounded flex p-4 h-full items-center">
              <img src={IconCheckSquare} className="mr-2" />
              <span className="title-font font-medium">Coloring Book Ethical</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-custom-01 rounded flex p-4 h-full items-center">
              <img src={IconCheckSquare} className="mr-2" />
              <span className="title-font font-medium">Typewriter Polaroid Cray</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-custom-01 rounded flex p-4 h-full items-center">
              <img src={IconCheckSquare} className="mr-2" />
              <span className="title-font font-medium">Pack Truffaut Blue</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-custom-01 rounded flex p-4 h-full items-center">
              <img src={IconCheckSquare} className="mr-2" />
              <span className="title-font font-medium">The Catcher In The Rye</span>
            </div>
          </div>
        </div>
        <button className="flex mx-auto mt-16 font-semibold text-custom-02 bg-custom-02 border-custom-01 border-2 py-2 px-8 rounded-md text-lg hover:bg-transparent hover:text-gray-900">Start Now</button>
      </div>
    </section>
  )
}
