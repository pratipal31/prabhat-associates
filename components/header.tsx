'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Clients', href: '#industries' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-gray-200'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
  <div className="relative w-16 h-16 transition-smooth group-hover:scale-105">
    <Image
      src="/logo.jpeg"
      alt="Prabhat Associates"
      fill
      className="object-contain"
      priority
    />
  </div>

  <div className="flex flex-col justify-center h-16">
    <h1 className="text-2xl font-bold text-primary leading-none">
      PBA
    </h1>
    <p className="text-sm text-muted-foreground leading-tight">
      Prabhat Associates
    </p>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-smooth text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-smooth shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-smooth"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-smooth ${isOpen ? 'rotate-45' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-lg transition-smooth text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-smooth text-sm font-medium text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
