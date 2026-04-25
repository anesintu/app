import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Упрощенная навигация - только 4 пункта
  const navItems = [
    { name: 'Цветная печать', path: '/color-printing' },
    { name: 'Черно-белая печать', path: '/bw-printing' },
    { name: 'Требования к макетам', path: '/requirements' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`flex flex-col transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            <span className="font-heading font-bold text-xl md:text-2xl text-charcoal tracking-tight">
              ЛитАРы
            </span>
            <span className="text-xs text-charcoal-60 tracking-wider">
              Цифровая типография · г. Гродно
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-gold ${
                  isActive(item.path) ? 'text-gold' : 'text-charcoal'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold animate-slide-in-left" />
                )}
              </Link>
            ))}
          </nav>

          {/* Phone in Header */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+375333063068"
              className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              +375 (33) 306-30-68
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown under header */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-charcoal shadow-lg z-40 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col p-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 text-lg font-heading border-l-2 pl-4 transition-colors ${
                  isActive(item.path)
                    ? 'text-gold border-gold'
                    : 'text-eggshell border-transparent hover:text-gold hover:border-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="mt-6 pt-6 border-t border-eggshell/20">
              <a
                href="tel:+375333063068"
                className="flex items-center gap-3 text-gold text-lg"
              >
                <Phone className="w-5 h-5" />
                +375 (33) 306-30-68
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
