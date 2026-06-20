'use client';

import Image from 'next/image';
import { useInView } from '@/lib/hooks';

const clients = [
  { image: '/client1.png', name: 'MIAL' },
  { image: '/client2.png', name: 'Sanofi' },
  { image: '/client3.png', name: 'FedEx' },
  { image: '/client4.png', name: 'Aramex' },
  { image: '/client5.png', name: 'BEST' },
  { image: '/client6.png', name: 'EICI' },
  { image: '/client7.png', name: 'IndiGo' },
  { image: '/client8.png', name: 'DHL' },
];

export function Industries() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Clients We Serve</h2>
        </div>

        {/* Two column layout: logos left, text right */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left — Logo Grid */}
          <div ref={ref} className="w-full lg:w-3/5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 border-l border-t border-gray-100">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: isInView ? `${index * 80}ms` : '0ms' }}
              >
                <div className="group flex items-center justify-center border-r border-b border-gray-100 p-4 sm:p-5 cursor-pointer hover:bg-gray-50 transition-all duration-300">
                  <div className="relative w-full h-20 sm:h-24">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-all duration-400"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Text */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center group cursor-default pt-2">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed transition-smooth group-hover:text-gray-900">
                Over the years we have successfully partnered with leading organizations across diverse sectors. Our commitment to quality execution, safety standards, reliability and timely delivery has helped us build long-term professional relationships with reputed clients across India.
              </p>
              <p className="text-gray-600 leading-relaxed transition-smooth group-hover:text-gray-900">
                We take pride in contributing to projects for globally recognized companies and prestigious infrastructure organizations through our expertise in electrical contracting, material supply, civil works and interior infrastructure solutions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}