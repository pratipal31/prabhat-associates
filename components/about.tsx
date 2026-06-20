'use client';

import Image from 'next/image';
import { useInView } from '@/lib/hooks';

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Column — Text */}
          <div
            className={`transition-smooth duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >

            <h3 className="text-4xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Our Journey
            </h3>

            <div className="space-y-4 group cursor-default">
              <p className="text-gray-600 leading-relaxed transition-smooth group-hover:text-gray-900">
                Established in 1995 by Sujit Kumar Ojha under the name Priya Electricals, the
                company began its journey with a strong commitment to quality electrical
                contracting and reliable material supply services.
              </p>
              <p className="text-gray-600 leading-relaxed transition-smooth group-hover:text-gray-900">
                In 2014 it was restructured and renamed as Prabhat Associates, marking a new
                phase of growth and expansion into multiple sectors including civil and warehouse
                interior works.
              </p>
              <p className="text-gray-600 leading-relaxed transition-smooth group-hover:text-gray-900">
                Today, Prabhat Associates operates under the proprietorship of Shashidhar S. Ojha
                and continues to deliver dependable, high-quality and timely project execution
                across industrial, commercial, and infrastructure sectors. With over three decades
                of industry experience, Prabhat Associates has built a reputation for
                professionalism, technical expertise and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
            </div>
          </div>

          {/* Right Column — Image */}
          <div
            className={`transition-smooth duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none rounded-2xl"></div>
              <Image
                src="/about.jpg"
                alt="About Prabhat Associates"
                fill
                className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}