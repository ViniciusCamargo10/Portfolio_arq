import { Link, useLocation } from 'react-router';
import { Menu, X, Palette } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeSwitcherOpen, setIsThemeSwitcherOpen] = useState(false);
  const location = useLocation();
  const { themeVariant, setThemeVariant } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/experiencia', label: 'Experiência' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/certificados', label: 'Certificados' },
    { path: '/contato', label: 'Contato' },
  ];

  const themes = [
    { id: 'scandinavian' as const, name: 'Minimalista Escandinavo' },
    { id: 'industrial' as const, name: 'Industrial Chic' },
    { id: 'tropical' as const, name: 'Tropical Moderno' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif tracking-tight">
            Ana Ferreira
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-colors hover:text-[var(--color-primary)] ${
                  location.pathname === item.path ? 'text-[var(--color-primary)]' : ''
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsThemeSwitcherOpen(!isThemeSwitcherOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Mudar tema"
              >
                <Palette className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {isThemeSwitcherOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 p-2"
                  >
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => {
                          setThemeVariant(theme.id);
                          setIsThemeSwitcherOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors ${
                          themeVariant === theme.id ? 'bg-gray-100' : ''
                        }`}
                      >
                        {theme.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              to="/contato"
              className="hidden md:block px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Fale comigo
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors text-center"
                >
                  Fale comigo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}