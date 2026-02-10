import { useState } from "react";

function BookingCard() {
  const [mode, setMode] = useState("place");
  const [openClass, setOpenClass] = useState(false);
  const [openPassenger, setOpenPassenger] = useState(false);

  const classes = [
    "General",
    "Sleeper (SL)",
    "Second Sitting (2S)",
    "AC 3 Tier (3A)",
    "AC 2 Tier (2A)",
    "AC 1 Tier (1A)",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto relative">

      <div className="bg-[#D4D4D4] rounded-3xl shadow-xl p-8 relative">

        {/* Toggle */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-4">

          <button
            onClick={() => setMode("train")}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200
              ${mode === "train"
                ? "bg-[#FFFFFF] text-[#2B2B2B] shadow-md scale-105"
                : "bg-[#B3B3B3] text-[#2B2B2B] hover:scale-105"}
            `}
          >
            Search by Train
          </button>

          <button
            onClick={() => setMode("place")}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200
              ${mode === "place"
                ? "bg-[#2B2B2B] text-white shadow-md scale-105"
                : "bg-[#B3B3B3] text-[#2B2B2B] hover:scale-105"}
            `}
          >
            Search by Place
          </button>
        </div>

        {/* Place Mode */}
        {mode === "place" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 items-end">

            <input
              placeholder="Enter source"
              className="bg-white border border-[#B3B3B3] rounded-xl px-4 py-3"
            />

            <input
              placeholder="Enter destination"
              className="bg-white border border-[#B3B3B3] rounded-xl px-4 py-3"
            />

            <input
              type="date"
              className="bg-white border border-[#B3B3B3] rounded-xl px-4 py-3"
            />

            <button className="bg-[#2B2B2B] text-white rounded-xl px-6 py-3
              hover:scale-105 active:scale-95 transition-all duration-200">
              SEARCH TRAIN
            </button>
          </div>
        )}

        {/* Train Mode */}
        {mode === "train" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 items-end">

            <input
              placeholder="Enter train number or name"
              className="md:col-span-3 bg-white border border-[#B3B3B3] rounded-xl px-4 py-3"
            />

            <button className="bg-[#2B2B2B] text-white rounded-xl px-6 py-3
              hover:scale-105 active:scale-95 transition-all duration-200">
              SEARCH TRAIN
            </button>
          </div>
        )}

        {/* Quick Filters */}
        <div className="bg-[#B3B3B3] rounded-2xl p-6 mt-8 flex flex-wrap items-center gap-4">

          <span className="font-medium text-[#2B2B2B]">Quick Filters:</span>

          <button className="px-4 py-2 bg-[#FFFFFF] rounded-full border border-[#2B2B2B]/20 hover:scale-105 transition">
            AC Only
          </button>

          <button className="px-4 py-2 bg-[#FFFFFF] rounded-full border border-[#2B2B2B]/20 hover:scale-105 transition">
            Confirmed Seats
          </button>

          <button className="px-4 py-2 bg-[#FFFFFF] rounded-full border border-[#2B2B2B]/20 hover:scale-105 transition">
            Morning (06–12)
          </button>

        </div>
      </div>
    </div>
  );
}

export default BookingCard;
