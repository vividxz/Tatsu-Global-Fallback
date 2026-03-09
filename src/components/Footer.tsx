import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Telecom Infrastructure', path: '/telecom' },
    { name: 'OFC Solutions', path: '/ofc' },
    { name: 'Networking', path: '/networking' },
    { name: 'Solar Solutions', path: '/solar' },
    { name: 'Technical Manpower', path: '/manpower' },
    { name: 'IT Solutions', path: '/it-solutions' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/contact' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Service', path: '#' },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold font-['Space_Grotesk']">
                <span className="text-white">TATSU</span>
                <span className="text-[#00F0FF]"> GLOBAL</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Engineering the future of connectivity. From fiber optics to 5G towers, 
              we build the invisible infrastructure that powers the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white/60 hover:text-[#00F0FF] hover:bg-[#222] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white/60 hover:text-[#00F0FF] hover:bg-[#222] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white/60 hover:text-[#00F0FF] hover:bg-[#222] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-['Space_Grotesk']">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-white/60 hover:text-[#00F0FF] text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-['Space_Grotesk']">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-[#00F0FF] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-['Space_Grotesk']">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  12.9735° N, 77.6164° E<br />
                  Bengaluru, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00F0FF] flex-shrink-0" />
                <span className="text-white/60 text-sm">+91 7991103488, +91 9123286165</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00F0FF] flex-shrink-0" />
                <span className="text-white/60 text-sm">aditya.singh@tatsuglobal.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-lg overflow-hidden border border-[#222] h-48 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15551.986884022872!2d77.6164!3d12.9735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzI0LjYiTiA3N8KwMzYnNTkuMCJF!5e0!3m2!1sen!2sin!4v1715456958467!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TATSU Global Location"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#222] flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/40 text-sm">
            © 2026 TATSU Global. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-white/40 text-sm">ISO 9001:2015 Certified</span>
            <span className="text-[#00F0FF] text-sm">|</span>
            <span className="text-white/40 text-sm">OHSAS 18001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
