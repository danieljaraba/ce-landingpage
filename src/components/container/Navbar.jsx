import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-start py-8 px-16'>
        <a href='#form-screen' className='flex items-center'>
          <img src="/construkta.svg" className='navbar-logo' />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
