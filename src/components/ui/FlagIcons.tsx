// French Flag SVG Component
export function FrenchFlag({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="10" width="10" height="20" fill="#FFFFFF" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </svg>
  )
}

// Tunisian Flag SVG Component
export function TunisianFlag({ className = "w-5 h-4" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 30 20" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      aria-hidden="true" 
      role="img" 
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="30" height="20" fill="#E70013" />
      <circle fill="#FFF" cx="15" cy="10" r="5.42" />
      <path 
        fill="#E70013" 
        d="M12.83 10a3.25 3.25 0 0 1 5.45-2.39a4.06 4.06 0 1 0 0 4.78A3.25 3.25 0 0 1 12.83 10z"
      />
      <path 
        fill="#E70013" 
        d="M16.37 8.61l-1.04-1.43v1.77L13.65 10l1.68.55v1.77l1.04-1.43l1.68.55L16.69 10l1.04-1.43z"
      />
    </svg>
  )
}
