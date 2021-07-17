export const Hero = ({location}) => {
  return (
    <section className="bg-custom-01 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-3xl md:text-5xl font-bold title-font mb-2 text-custom-01">
            Pitchfork Kickstarter Taxidermy</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-custom-01">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical 
            gentrify, subway tile poke farm-to-table.</p>
        </div>

        <button onClick={() => location('/new')} className="flex mx-auto font-semibold text-custom-02 bg-custom-02 border-custom-01 border-2 py-2 px-8 rounded-md text-lg hover:bg-transparent hover:text-gray-900">
          Get started
        </button>
      </div>
    </section>
  )
}
