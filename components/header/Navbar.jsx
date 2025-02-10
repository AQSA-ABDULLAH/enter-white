import React from 'react';

function Navbar() {
  return (
    <div className="flex justify-between items-center tracking-widest text-center px-6 desktop:px-16 pt-6 text-white text-[16px] desktop:text-[22px] uppercase">
      <p className="w-[170px]">Real Estate</p>
      <p className="w-[120px]">Private Islands</p>
      <p className="w-[120px]">Yachts</p>
      <p className="w-[120px]">Jets</p>
      <p className="w-[120px]">Cars</p>
      <p className="w-[120px]">Watches</p>
      <p className="w-[120px]">Diamonds</p>
      <p className="w-[160px]">Travel the World</p>
    </div>
  );
}

export default Navbar;
