import { HiHeart, HiHome, HiMoon, HiSearch, HiUser } from 'react-icons/hi';

const TabBar = () => {
  return (
    <nav
      className='w-full h-16 bg-white sticky left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center'
      id='tab-bar'
    >
      <a href='#home'>
        <HiHome className='w-8 h-8 text-gray-300 hover:text-primary' />
      </a>
      <a href='#recommended'>
        <HiSearch className='w-8 h-8 text-gray-300 hover:text-primary' />
      </a>
      <a href='#trending-stays'>
        <HiHeart className='w-8 h-8 text-gray-300 hover:text-primary' />
      </a>
      <button>
        <HiMoon className='w-8 h-8 text-gray-300 hover:text-primary' />
      </button>
      <a href='#'>
        <HiUser className='w-8 h-8 text-gray-300 hover:text-primary' />
      </a>
    </nav>
  );
};

export default TabBar;
