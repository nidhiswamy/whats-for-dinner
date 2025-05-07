function SpinButton({ handleSpin, spinning }) {
  return (
    <button
      onClick={handleSpin}
      disabled={spinning}
      className={`mt-4 px-4 py-2 text-white rounded-lg ${
        spinning ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"
      }`}
    >
      {spinning ? "Spinning..." : "Spin"}
    </button>
  );
}

export default SpinButton;
