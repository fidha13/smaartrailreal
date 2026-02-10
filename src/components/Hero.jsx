
function Hero() {
  return (
<section className="relative w-full flex items-center justify-center text-center px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#FFFFFF] via-[#D4D4D4] to-[#B3B3B3]">

      <div className="w-full max-w-6xl mx-auto">

        {/* MAIN HEADING */}
        <h1 className="
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          lg:text-6xl 
          font-bold 
          text-[#2B2B2B] 
          leading-tight
         ">
          Book Smarter
          <br className="hidden sm:block" />
          <span className="block sm:inline">Travel Faster</span>
        </h1>

        {/* SUBHEADING */}
        <div className="mt-6 overflow-hidden w-full">
          <h3 className="
            text-[14px]
            sm:text-base 
            md:text-lg 
            lg:text-l 
            text-[#2B2B2B]/80 
            font-medium 
            max-w-3xl 
            mx-auto
            whitespace-nowrap 
            sm:whitespace-normal 
            animate-marquee
          ">
            India’s intelligent railway booking platform powered by AI prediction and real-time insights.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
