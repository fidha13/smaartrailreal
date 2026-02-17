function AboutSection() {
  return (
    <section className="w-full bg-[#0F1C2E] text-white py-20 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE – BLENDED EDGE TRIANGLE */}
        <div className="relative flex items-center justify-start -ml-6 md:-ml-16">
          <div
            className="relative w-[420px] h-[320px] 
                       bg-gradient-to-br from-[#0F1C2E] to-[#0B1626]"
            style={{
              clipPath: "polygon(0 0, 100% 50%, 0 100%)"
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl font-semibold text-[#A3E635] tracking-wide">
                About Us
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – UPDATED CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Smart Routes. Faster Booking.{" "}
            <span className="text-[#A3E635]">
              Better Travel Experience.
            </span>
          </h2>

          <div className="space-y-8">

            <div>
              <h4 className="text-xl font-semibold mb-2">
                01 Discover
              </h4>
              <p className="text-white/70">
                Explore optimized routes and compare trains easily to choose the most convenient option for your journey.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">
                02 Trusted Reviews
              </h4>
              <p className="text-white/70">
                View genuine passenger ratings and feedback to make informed travel decisions based on comfort and reliability.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">
                03 Digital Ticketing
              </h4>
              <p className="text-white/70">
                Book tickets quickly and access secure digital confirmations, making your travel process smooth and paperless.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;


