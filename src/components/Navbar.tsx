import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: '브랜드', id: 'brand' },
    { name: '메뉴', id: 'menu' },
    { name: '창업', id: 'cost' },
    { name: '고객리뷰', id: 'reviews' },
    { name: '가맹점이야기', id: 'success' },
    { name: '창업문의', id: 'inquiry' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 text-white pointer-events-none mix-blend-difference transition-all duration-300">
        {/* Logo */}
        <a 
            href="#" 
            onClick={(e) => scrollToSection(e, 'top')} 
            className="flex items-center gap-2 pointer-events-auto hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://postfiles.pstatic.net/MjAyNjAyMTBfMTgz/MDAxNzcwNjkxNjE2Mzk5.lhMPm4g9UV60zLADO_YAyO6gN2QaYgjSrwq7QA_VZDEg.wD_AdbEYhwqrLurOJ-f6dZamXWMzAoWEbcZ5k4WtHHYg.PNG/logo.png?type=w773" 
            alt="족발사관학교" 
            className="h-10 w-auto object-contain" 
          />
          <div className="font-display font-bold text-xl tracking-tight">족발사관학교</div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-sm font-semibold uppercase tracking-widest pointer-events-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="hover:text-amber-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden pointer-events-auto text-white"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#1a1510] z-[60] flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button 
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-2xl font-bold text-white hover:text-amber-400 transition-colors font-display"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-12">
            <a href="tel:1600-8769" className="px-8 py-3 border border-amber-400 text-amber-400 rounded-full font-bold hover:bg-amber-400 hover:text-black transition-colors">
                창업문의 1600-8769
            </a>
        </div>
      </div>
    </>
  );
};
