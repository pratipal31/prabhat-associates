'use client';

import Image from 'next/image';
import { useInView } from '@/lib/hooks';

const services = [
  { image: '/service1.jpg', title: 'Electrical Contracting' },
  { image: '/service2.jpg', title: 'Electrical Material Supply' },
  { image: '/service3.jpg', title: 'Industrial Electrical Works' },
  { image: '/service4.jpg', title: 'Commercial Electrical Works' },
  { image: '/service5.jpg', title: 'Warehouse Interior Works' },
  { image: '/service6.jpg', title: 'Civil Construction' },
  { image: '/service7.jpg', title: 'Interior Fit-Out Solutions' },
  { image: '/service8.jpg', title: 'Maintenance Services' },
];

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">Our Services</h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isInView ? `${index * 80}ms` : '0ms' }}
            >
              <div className="group relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Top gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"></div>

                {/* Hover tint */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Title centered at top */}
                <div className="absolute top-0 left-0 right-0 flex flex-col items-center pt-5 px-4 text-center">
                  <h3 className="text-white font-bold text-sm leading-snug drop-shadow-lg tracking-wide group-hover:scale-105 transition-all duration-500">
                    {service.title}
                  </h3>
                  <div className="mt-2 h-0.5 w-0 group-hover:w-10 bg-white transition-all duration-500 rounded-full"></div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}