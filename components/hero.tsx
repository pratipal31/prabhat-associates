'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  { image: '/home.jpg' },
  { image: '/home2.jpg' },
  { image: '/home3.jpg' },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-32 pb-20">

      {/* Carousel Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      {/* Content — unchanged */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Strategic Business
              <span className=" font-bold text-whiteblock mt-2">Excellence</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
              Since 1995, Prabhat Associates has been delivering transformative business solutions
              and strategic consultancy to enterprises across diverse industries. We partner with
              you to unlock growth, optimize operations, and build sustainable success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#services" className="bg-primary text-white px-8 py-4 rounded-lg hover:shadow-elegant-hover shadow-elegant transition-smooth text-center font-semibold hover:bg-opacity-90">Explore Services</a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-smooth text-center font-semibold">Let&apos;s Connect</a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-white">30+</div>
                <p className="text-sm text-white/70 mt-1">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <p className="text-sm text-white/70 mt-1">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                <p className="text-sm text-white/70 mt-1">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Right side intentionally empty — image fills background */}
          <div></div>

        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 border border-white/20 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-smooth backdrop-blur-sm"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 border border-white/20 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-smooth backdrop-blur-sm"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? 'bg-white w-8 h-2.5' : 'bg-white/40 hover:bg-white/70 w-2.5 h-2.5'}`}
          />
        ))}
      </div>

    </section>
  );
}