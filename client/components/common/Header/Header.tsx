import React from 'react';
import Navtop from './Navtop/Navtop';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <div>
      <header className='sticky top-0 z-[999]'>
        <Navtop />

        <nav className='relative bg-white h-60px md:h-100px px-5 md:pl-50px md:pr-5 xl:px-50px shadow-navdesktop z-[998]'>
          <Navbar />
        </nav>
      </header>
    </div>
  );
};

export default Header;
