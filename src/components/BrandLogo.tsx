interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className = '', size = 36 }: BrandLogoProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      fill="none"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Hawu Base (Clay Stove) */}
      <path 
        d="M18 72C18 64 24 58 32 58H68C76 58 82 64 82 72L80 84C80 87 77 90 74 90H26C23 90 20 87 20 84L18 72Z" 
        fill="#8C2E0B"
      />
      {/* Firebox Arch (Tungku Bara) */}
      <path 
        d="M38 90C38 78 43 72 50 72C57 72 62 78 62 90H38Z" 
        fill="#1C1917"
      />
      {/* Glowing Embers inside Hawu */}
      <circle cx="50" cy="83" r="4.5" fill="#F59E0B" />
      <path 
        d="M50 76C48 79 46 81 46 83C46 85.2 47.8 87 50 87C52.2 87 54 85.2 54 83C54 81 52 79 50 76Z" 
        fill="#EF4444"
      />

      {/* Surabi Cake Body */}
      <path 
        d="M22 56C22 42 34 32 50 32C66 32 78 42 78 56C78 58 76 60 73 60H27C24 60 22 58 22 56Z" 
        fill="#FDFBF7" 
        stroke="#D97706" 
        strokeWidth="2.5"
      />
      {/* Crispy Golden Crust Edge */}
      <path 
        d="M25 58C32 60 41 61 50 61C59 61 68 60 75 58" 
        stroke="#92400E" 
        strokeWidth="3" 
        strokeLinecap="round"
      />

      {/* Caramelized Palm Sugar / Kinca Droplet */}
      <path 
        d="M50 36C45 42 41 46 41 50C41 54.5 45 57 50 57C55 57 59 54.5 59 50C59 46 55 42 50 36Z" 
        fill="#92400E"
      />
      <circle cx="47" cy="48" r="1.5" fill="#FBBF24" />

      {/* Rising Fragrant Steam Curves */}
      <path 
        d="M42 26C40 22 43 18 42 14" 
        stroke="#D97706" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M50 24C48 20 52 16 50 10" 
        stroke="#B45309" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M58 26C60 22 57 18 58 14" 
        stroke="#D97706" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
