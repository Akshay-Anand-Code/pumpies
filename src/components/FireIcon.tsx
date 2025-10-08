export const FireIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main flame */}
      <path
        d="M50 10 C30 30, 25 50, 25 70 C25 90, 35 110, 50 110 C65 110, 75 90, 75 70 C75 50, 70 30, 50 10 Z"
        fill="#FF6B6B"
      />
      
      {/* Mid flame */}
      <path
        d="M50 20 C38 35, 35 50, 35 65 C35 80, 40 95, 50 95 C60 95, 65 80, 65 65 C65 50, 62 35, 50 20 Z"
        fill="#FF8E53"
      />
      
      {/* Inner flame */}
      <path
        d="M50 35 C45 45, 43 55, 43 62 C43 72, 46 80, 50 80 C54 80, 57 72, 57 62 C57 55, 55 45, 50 35 Z"
        fill="#FFD93D"
      />
      
      {/* Core white */}
      <ellipse cx="50" cy="70" rx="5" ry="10" fill="#FFFFFF" opacity="0.8" />
      
      {/* Left flame detail */}
      <path
        d="M35 60 C30 65, 28 70, 30 75 C32 80, 37 82, 40 78 C43 74, 42 68, 35 60 Z"
        fill="#FF8E53"
        opacity="0.7"
      />
      
      {/* Right flame detail */}
      <path
        d="M65 60 C70 65, 72 70, 70 75 C68 80, 63 82, 60 78 C57 74, 58 68, 65 60 Z"
        fill="#FF8E53"
        opacity="0.7"
      />
    </svg>
  );
};


