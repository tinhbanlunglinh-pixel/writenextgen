import React from 'react';

export const BrandLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img 
    src="https://i.postimg.cc/qB1tK6QH/bead166f8a480b165259.jpg" 
    alt="Nextgen English Logo" 
    className={`${className} object-contain rounded-full`} 
  />
);
