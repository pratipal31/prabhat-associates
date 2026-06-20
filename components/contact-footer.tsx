'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from '@/lib/hooks';

export function ContactFooter() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Let&apos;s discuss how Prabhat Associates can help you achieve your strategic objectives.
            </p>
          </div>

          {/* Contact Content */}
          <div ref={ref} className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`transition-smooth duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:info@prabhatassociates.in"
                      className="text-primary hover:text-accent transition-smooth"
                    >
                      info@prabhatassociates.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+919876543210" className="text-primary hover:text-accent transition-smooth">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl">🏢</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      Prabhat Associates<br />
                      New Delhi, India<br />
                      {/* Add specific address details from company info */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
                    aria-label="Facebook"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
                    aria-label="Twitter"
                  >
                    𝕏
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-smooth duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center animate-scale-in">
                    <p className="font-semibold mb-2">✓ Message Received!</p>
                    <p>Thank you for contacting us. We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 shadow-elegant hover:shadow-elegant-hover transition-smooth"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="Prabhat Associates"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold">PRABHAT</h3>
                  <p className="text-xs text-gray-400">ASSOCIATES</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming businesses since 1995 with strategic excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-smooth">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-smooth">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-smooth">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-smooth">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition-smooth">
                    Strategic Planning
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-smooth">
                    Market Analysis
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-smooth">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-smooth">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:info@prabhatassociates.in" className="hover:text-white transition-smooth">
                    info@prabhatassociates.in
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="hover:text-white transition-smooth">
                    +91 98765 43210
                  </a>
                </li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Prabhat Associates. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
