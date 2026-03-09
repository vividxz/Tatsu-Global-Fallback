import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isScrolled = scrollY > 50;

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'Telecom Infrastructure', path: '/telecom' },
    { name: 'OFC Solutions', path: '/ofc' },
    { name: 'Networking', path: '/networking' },
    { name: 'Solar Solutions', path: '/solar' },
    { name: 'Technical Manpower', path: '/manpower' },
    { name: 'IT Solutions', path: '/it-solutions' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#222]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold font-['Space_Grotesk'] tracking-tight">
              <span className="text-white">TATSU</span>
              <span className="text-[#00F0FF]"> GLOBAL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#00F0FF] ${
                location.pathname === '/' ? 'text-[#00F0FF]' : 'text-white/80'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center space-x-1 text-sm font-medium text-white/80 hover:text-[#00F0FF] transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-[#0A0A0A] border border-[#222] rounded-lg shadow-xl overflow-hidden"
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-white/80 hover:text-[#00F0FF] hover:bg-[#111] transition-colors border-b border-[#222] last:border-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[#00F0FF] ${
                location.pathname === '/about' ? 'text-[#00F0FF]' : 'text-white/80'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#00F0FF] ${
                location.pathname === '/contact' ? 'text-[#00F0FF]' : 'text-white/80'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#00F0FF] text-black text-sm font-semibold rounded hover:bg-[#00D0DD] transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-[#0A0A0A] border-t border-[#222]">
            <div className="px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block py-2 text-white/80 hover:text-[#00F0FF]"
              >
                Home
              </Link>

              <div className="py-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-white/80"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-sm text-white/60 hover:text-[#00F0FF]"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block py-2 text-white/80 hover:text-[#00F0FF]"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="block py-2 text-white/80 hover:text-[#00F0FF]"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                className="block mt-4 px-5 py-2.5 bg-[#00F0FF] text-black text-center font-semibold rounded"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
