import { useLocation } from "react-router-dom";

function Ticket() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F1C2E] text-red-400">
        No Ticket Data Found
      </div>
    );
  }

  const { name, train, from, to, date, seat, classType } = data;
  const pnr = Math.floor(1000000000 + Math.random() * 9000000000);

  return (
    <section className="min-h-screen bg-[#0F1C2E] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#16263E] to-[#1E3354] rounded-3xl shadow-2xl p-8 border border-[#2E4A75]">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            🎟 RailSmart Ticket
          </h1>
          <span className="text-sm text-gray-300">PNR: {pnr}</span>
        </div>

        {/* Route Section */}
        <div className="flex justify-between items-center text-white mb-8">
          <div>
            <p className="text-gray-400 text-sm">From</p>
            <h2 className="text-xl font-semibold">{from}</h2>
          </div>

          <div className="text-blue-400 text-2xl">→</div>

          <div className="text-right">
            <p className="text-gray-400 text-sm">To</p>
            <h2 className="text-xl font-semibold">{to}</h2>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-500 mb-6"></div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-6 text-gray-200">
          <div>
            <p className="text-gray-400 text-sm">Passenger</p>
            <p className="font-medium">{name}</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Train</p>
            <p className="font-medium">{train}</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Date</p>
            <p className="font-medium">{date}</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Seat</p>
            <p className="font-medium">{seat}</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Class</p>
            <p className="font-medium">{classType}</p>
          </div>
        </div>

        {/* Print Button */}
        <button
          onClick={() => window.print()}
          className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-all duration-300 font-semibold"
        >
          Print Ticket
        </button>
      </div>
    </section>
  );
}

export default Ticket;