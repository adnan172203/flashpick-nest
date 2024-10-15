import React from 'react';
import Navtop from './ui/Header/Navtop/Navtop';
import Navbar from './ui/Header/Navbar/Navbar';

const Header = () => {
  return (
    <div>
      <header className='sticky top-0 z-[999]'>
        {/* <!-- nav top  --> */}
        <Navtop />
        {/* <!-- nav bar  --> */}
        <nav className='relative bg-white h-60px md:h-100px px-5 md:pl-50px md:pr-5 xl:px-50px shadow-navdesktop z-[998]'>
          <Navbar />
        </nav>
      </header>
    </div>
  );
};

export default Header;
