function aboutSection() {
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

            {/* Minimal Content Inside */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl font-semibold text-[#A3E635] tracking-wide">
                About Us
              </h3>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE – CLEAN CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Smart Routes. Faster Booking.{" "}
            <span className="text-[#A3E635]">
              Seamless Journeys.
            </span>
          </h2>

          <div className="space-y-8">

            <div>
              <h4 className="text-xl font-semibold mb-2">
                01 Discover
              </h4>
              <p className="text-white/70">
                Explore optimized routes with real-time data and AI-powered travel insights.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">
                02 Personalize
              </h4>
              <p className="text-white/70">
                Select seats intelligently with predictive availability and smart recommendations.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">
                03 Experience
              </h4>
              <p className="text-white/70">
                Travel effortlessly with digital tickets, live tracking, and seamless updates.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default aboutSection;

