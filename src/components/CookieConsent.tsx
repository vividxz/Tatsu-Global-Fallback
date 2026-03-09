import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A] border-t border-[#222] p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1 pr-4">
          <p className="text-white/80 text-sm leading-relaxed">
            We use essential cookies to make our site work. With your consent, we may also use 
            non-essential cookies to improve user experience and analyze website traffic. 
            By clicking "Accept," you agree to our website's cookie use as described in our{' '}
            <a href="#" className="text-[#00F0FF] hover:underline">
              Cookie Policy
            </a>
            .
          </p>
        </div>
        <div className="flex items-center space-x-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-white/60 hover:text-white border border-[#333] hover:border-[#555] rounded transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="p-2 text-white/40 hover:text-white md:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
