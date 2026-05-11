import { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {}

const ThemeContext = createContext<ThemeContextType>({});

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={{}}>
      <div className="theme-tropical">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
