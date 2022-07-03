import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkMode';

const useDarkMode = () => useContext(DarkModeContext);

export default useDarkMode;
