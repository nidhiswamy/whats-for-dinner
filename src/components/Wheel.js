function Wheel({ rotation }) {
  return (
    <div className="relative w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] mx-auto">
      <div
        className="w-full h-full rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-[4000ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
        style={{
          transform: `rotate(${rotation}deg)`,
          background: `conic-gradient(
            #E9D8A6 0deg 24deg,
            #001219 24deg 48deg,
            #94D2BD 48deg 72deg,
            #BB3E03 72deg 96deg,
            #1d9bb4 96deg 120deg,
            #b5838d 120deg 144deg,
            #0A9396 144deg 168deg,
            #AE2012 168deg 192deg,
            #305d8c 192deg 216deg,
            #EE9B00 216deg 240deg,
            #6a4c93 240deg 264deg,
            #ffddd2 264deg 288deg,
            #005F73 288deg 312deg,
            #CA6702 312deg 336deg,
            #9B2226 336deg 360deg
          )`,
        }}
      />
      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 translate-y-[10%] rotate-180 text-2xl text-[#E53935]">
        ▲
      </div>
    </div>
  );
}

export default Wheel;
