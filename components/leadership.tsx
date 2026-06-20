'use client';

import Image from 'next/image';
import { useInView } from '@/lib/hooks';

const leaders = [
  {
    name: 'Sujit Kumar Ojha',
    title: 'Founder & CEO',
    bio: 'Visionary leader with 25+ years of experience in business consulting and strategic development. Sujit has guided hundreds of enterprises through transformation and growth.',
    image: '/sujit.jpeg',
  },
  {
    name: 'Shashidhar Sujit Ojha',
    title: 'Proprietor',
    bio: 'Strategic overseer ensuring operational excellence and client satisfaction. Brings deep expertise in building sustainable business models and long-term client relationships.',
    image: null,
  },
  {
    name: 'Vaibhav Sujit Ojha',
    title: 'Managing Director',
    bio: 'Innovation-focused leader driving service excellence and organizational growth. Leads the delivery of cutting-edge solutions and manages key client relationships.',
    image: '/vaibhav.jpeg',
  },
];

export function Leadership() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced visionaries dedicated to delivering excellence and driving client success.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className={`transition-smooth duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isInView ? `${index * 150}ms` : '0ms' }}
            >
              <div className="group bg-white rounded-xl overflow-hidden hover-lift shadow-lg">

                {/* Image — fixed height, fully covered */}
                <div className="relative w-full h-80 overflow-hidden">
                  {leader.image ? (
                    <>
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-7xl">👨‍💼</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{leader.title}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{leader.bio}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}