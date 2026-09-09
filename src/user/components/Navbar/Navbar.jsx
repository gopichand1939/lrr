import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, ArrowUpRight, Phone, Clock, MapPin } from 'lucide-react';
import { readingRoomData } from '../../data/siteData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Facilities', path: '/#facilities' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Seats', path: '/seats' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.includes('#')) {
      const elementId = path.split('#')[1];
      const elem = document.getElementById(elementId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Main Ultra-Sleek Transparent Glass Navbar */}
      <header className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'fixed bg-white/95 py-3.5 shadow-md border-b border-slate-200 text-slate-900' 
          : 'absolute bg-transparent py-4 border-b border-white/10 text-white'
      }`}>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
          
          {/* Logo (Far Left with Divider) */}
          <div className="flex items-center gap-4 xl:gap-6 shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-extrabold shadow-glow-orange transition-transform group-hover:scale-105">
                <BookOpen className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <span className={`text-base sm:text-lg font-extrabold tracking-tight block leading-none font-display whitespace-nowrap ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  LOUKYA'S <span className="text-orange-400">READING ROOM</span>
                </span>
                <span className={`text-[9px] sm:text-[10px] font-extrabold tracking-[0.18em] uppercase block mt-1 whitespace-nowrap ${
                  isScrolled ? 'text-amber-800' : 'text-orange-300'
                }`}>
                  24/7 STUDY HALL • VIZAG
                </span>
              </div>
            </Link>

            {/* Vertical Divider separating Logo from Menu */}
            <div className={`hidden 2xl:block w-px h-6 ${isScrolled ? 'bg-slate-300' : 'bg-white/20'}`} />
          </div>

          {/* Desktop Navigation Links (Cleanly Centered & High Contrast) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3 shrink">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }
                }}
                className={`px-3.5 py-1.5 text-xs xl:text-sm font-extrabold tracking-wide transition-all rounded-lg whitespace-nowrap ${
                  location.pathname === link.path || (location.pathname === '/' && link.path === '/')
                    ? 'text-orange-400 bg-orange-500/20 border border-orange-500/40 shadow-xs'
                    : isScrolled ? 'text-slate-700 hover:text-orange-600 hover:bg-slate-100' : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons (Far Right) */}
          <div className="hidden md:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <Link
              to="/seats"
              className={`px-3.5 py-2 text-xs font-extrabold border rounded-xl transition-all flex items-center gap-1.5 shadow-sm whitespace-nowrap ${
                isScrolled 
                  ? 'text-slate-900 border-amber-300 hover:border-orange-400 bg-white' 
                  : 'text-white border-white/30 hover:border-white/70 bg-slate-900/60 hover:bg-slate-900'
              }`}
            >
              <span>Check Seats</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 text-xs font-extrabold text-white orange-gradient-btn rounded-xl shadow-glow-orange transition-all transform hover:scale-[1.02] flex items-center gap-1.5 tracking-wider uppercase whitespace-nowrap"
            >
              <span>BOOK YOUR SEAT</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-orange-600 hover:bg-amber-100/80 rounded-xl transition-colors shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-slate-950 border-l border-white/10 p-6 shadow-2xl overflow-y-auto flex flex-col justify-between z-10 animate-fade-in text-white">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold shadow-glow-orange">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-white text-base block leading-none font-display">LOUKYA'S</span>
                    <span className="text-[9px] font-bold text-orange-400 uppercase tracking-widest block mt-0.5">READING ROOM</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                      if (link.path.startsWith('/#')) {
                        e.preventDefault();
                        handleNavClick(link.path);
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="px-4 py-3 text-base font-extrabold text-slate-200 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href="tel:+918688768597"
                className="w-full py-3 rounded-xl border border-white/20 bg-slate-900 text-center font-bold text-xs text-slate-300 block shadow-xs"
              >
                Call Us: +91 86887 68597
              </a>
              <Link
                to="/seats"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl border border-white/20 bg-slate-900 text-center font-bold text-xs text-white block shadow-xs"
              >
                Check Available Seats
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl orange-gradient-btn text-white text-center font-extrabold text-xs block shadow-glow-orange uppercase tracking-wider"
              >
                Book Your Seat ↗
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
