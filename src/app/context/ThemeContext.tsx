import { createContext, useContext, useState, ReactNode } from 'react';

type ThemeVariant = 'scandinavian' | 'industrial' | 'tropical';

interface ThemeContextType {
  themeVariant: ThemeVariant;
  setThemeVariant: (variant: ThemeVariant) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>('scandinavian');

  return (
    <ThemeContext.Provider value={{ themeVariant, setThemeVariant }}>
      <div className={`theme-${themeVariant}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}