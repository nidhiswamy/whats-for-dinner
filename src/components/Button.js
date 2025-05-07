function Button({ onClick, disabled = false, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mt-4 px-4 py-2 text-white font-semibold rounded-lg shadow-xl ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
