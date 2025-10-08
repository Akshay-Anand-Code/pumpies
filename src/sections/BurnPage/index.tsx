import { FireIcon } from "@/components/FireIcon";
import { useEffect, useState } from "react";

export const BurnPage = () => {
  const [burnCount, setBurnCount] = useState(275000000000);

  // Animate the burn counter
  useEffect(() => {
    const interval = setInterval(() => {
      setBurnCount((prev) => prev + Math.floor(Math.random() * 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Split number into individual digits for flip animation
  const digits = formatNumber(burnCount).split("");

  return (
    <div className="min-h-screen bg-[#FEF9C3] relative overflow-hidden">
      {/* Fire icon at top */}
      <div className="flex justify-center pt-20 md:pt-32">
        <FireIcon className="w-32 h-32 md:w-48 md:h-48 animate-pulse" />
      </div>

      {/* Title */}
      <div className="text-center mt-8 md:mt-12 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-8">
          PUMPIES Burn
        </h1>

        {/* Description */}
        <p className="text-base md:text-xl text-black max-w-5xl mx-auto leading-relaxed px-6">
          In the spirit of $PUMPIES all of the funds raised during the mint were
          burned, reducing the supply thus making the token more valuable in
          theory. Since launch we have burned millions of US dollars worth of
          $PUMPIES, putting a larger dent into the burning movement than any of
          the projects before us combined.
        </p>
      </div>

      {/* Burn counter */}
      <div className="flex justify-center items-center mt-16 md:mt-24 gap-1 px-4">
        {digits.map((digit, index) => (
          <div
            key={index}
            className={`
              ${digit === "," ? "w-4" : "bg-[#FF6B6B] rounded-lg shadow-lg w-16 md:w-24 h-20 md:h-32"}
              flex items-center justify-center
              transition-all duration-300
            `}
          >
            {digit === "," ? (
              <span className="text-4xl md:text-6xl font-bold text-[#FF6B6B]">
                ,
              </span>
            ) : (
              <span className="text-4xl md:text-6xl font-bold text-white">
                {digit}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <FireIcon className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <FireIcon className="w-20 h-20" />
      </div>
      <div className="absolute top-1/2 left-5 opacity-10">
        <FireIcon className="w-12 h-12" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-15">
        <FireIcon className="w-14 h-14" />
      </div>
    </div>
  );
};


