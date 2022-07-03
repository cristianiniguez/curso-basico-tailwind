import { HiMoon, HiSearch, HiUser } from 'react-icons/hi';

const NavBar = () => {
  return (
    <nav className='w-full h-14 hidden lg:flex p-4 bg-white sticky top-0 left-0 z-50 justify-between items-center'>
      <div>
        <p className='text-xl text-primary font-bold'>Platzi Travel</p>
      </div>
      <div className='flex space-x-4'>
        <a className='font-bold text-md text-primary' href='#home'>
          Home
        </a>
        <a className='font-bold text-md text-primary' href='#recommended'>
          Recommended
        </a>
        <a className='font-bold text-md text-primary' href='#trending-stays'>
          Stays
        </a>
        <a className='font-bold text-md text-primary' href='#faqs'>
          FAQs
        </a>
        <a className='font-bold text-md text-primary' href='#about'>
          About
        </a>
      </div>
      <div className='flex space-x-2'>
        <HiSearch className='w-5 h-5 text-primary' />
        <HiMoon className='w-5 h-5 text-primary' />
        <HiUser className='w-5 h-5 text-gray-300' />
      </div>
    </nav>
  );
};

export default NavBar;
