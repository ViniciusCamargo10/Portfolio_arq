import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/experiencia', label: 'Experiência' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/certificados', label: 'Certificados' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif tracking-tight">
            Marcelo Mascia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-colors hover:text-(--color-primary) ${
                  location.pathname === item.path ? 'text-(--color-primary)' : ''
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-(--color-primary)"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <Link
              to="/contato"
              className="hidden md:block px-6 py-2 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) transition-colors"
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
              <div className="py-4 space-y-1 border-t border-gray-100 mt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 transition-colors font-medium ${
                      location.pathname === item.path
                        ? 'text-(--color-primary)'
                        : 'text-gray-700 hover:text-(--color-primary)'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-3 px-4">
                  <Link
                    to="/contato"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) transition-colors text-center font-medium"
                  >
                    Fale comigo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
