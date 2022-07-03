import { HiMoon, HiSearch, HiUser } from 'react-icons/hi';
import useDarkMode from '../hooks/useDarkMode';

const NavBarLink = ({ children, href }) => (
  <a className='font-bold text-md' href={href}>
    {children}
  </a>
);

const NavBar = () => {
  const darkMode = useDarkMode();

  return (
    <nav className='w-full h-14 hidden lg:flex p-4 bg-white dark:bg-gray-800 text-primary dark:text-white sticky top-0 left-0 z-10 justify-between items-center'>
      <div>
        <p className='text-xl font-bold'>Platzi Travel</p>
      </div>
      <div className='flex space-x-4'>
        <NavBarLink href='#home'>Home</NavBarLink>
        <NavBarLink href='#recommended'>Recommended</NavBarLink>
        <NavBarLink href='#trending-stays'>Stays</NavBarLink>
        <NavBarLink href='#faqs'>FAQs</NavBarLink>
        <NavBarLink href='#about'>About</NavBarLink>
      </div>
      <div className='flex space-x-2'>
        <HiSearch className='w-5 h-5' />
        <HiMoon className='w-5 h-5' onClick={() => darkMode.toggle()} />
        <HiUser className='w-5 h-5 text-gray-300 dark:text-white' />
      </div>
    </nav>
  );
};

export default NavBar;
