import { createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const DarkModeContext = createContext({
  enabled: true,
  on: () => null,
  off: () => null,
  toggle: () => null,
});

const DarkModeProvider = ({ children }) => {
  const [enabled, setDarkMode] = useLocalStorage('dark', false);

  useEffect(() => {
    const html = document.querySelector('html');
    enabled ? html.classList.add('dark') : html.classList.remove('dark');
  }, [enabled]);

  const on = () => setDarkMode(true);
  const off = () => setDarkMode(false);
  const toggle = () => setDarkMode((dark) => !dark);

  return (
    <DarkModeContext.Provider value={{ enabled, on, off, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
