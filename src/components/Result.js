function Result({ selectedCuisine, spinning, openMaps }) {
  if (!selectedCuisine || spinning) return null;

  return (
    <div className="space-y-2">
      <h2 className="mt-4 text-xl font-semibold text-gray-800">
        You got: {selectedCuisine}
      </h2>
      <button
        onClick={openMaps}
        className="px-4 py-2 bg-[#005F73] text-white rounded-lg"
      >
        Find Nearby {selectedCuisine} Restaurants
      </button>
    </div>
  );
}

export default Result;
