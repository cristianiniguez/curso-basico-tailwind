import { HiHeart, HiHome, HiMoon, HiSearch, HiUser } from 'react-icons/hi';
import useDarkMode from '../hooks/useDarkMode';

const TabBarItem = ({ href, icon: Icon, onClick }) => {
  const As = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <As {...props}>
      <Icon className='w-8 h-8 text-gray-300 hover:text-primary' />
    </As>
  );
};

const TabBar = () => {
  const darkMode = useDarkMode();

  return (
    <nav
      className='w-full h-16 bg-white dark:bg-gray-800 sticky left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center lg:hidden'
      id='tab-bar'
    >
      <TabBarItem href='#home' icon={HiHome} />
      <TabBarItem href='#recommended' icon={HiSearch} />
      <TabBarItem href='#trending-stays' icon={HiHeart} />
      <TabBarItem icon={HiMoon} onClick={() => darkMode.toggle()} />
      <TabBarItem href='#' icon={HiUser} />
    </nav>
  );
};

export default TabBar;
