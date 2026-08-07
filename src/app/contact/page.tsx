'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Replace these with your actual EmailJS credentials after setting up at https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_0fyos8n';
const EMAILJS_TEMPLATE_ID = 'template_8jqy2v1';
const EMAILJS_PUBLIC_KEY = 'AYAYrs-j2t6Xlr7y7';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Failed to send message. Please try again or email us directly at sales@loyalbondpet.com');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-beige py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">Contact Us</h1>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Have a question about our products or need help choosing the right solution for your senior dog? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
              {status === 'sent' ? (
                <div className="bg-brand-green/10 border border-brand-green/20 rounded-xl p-8 text-center">
                  <svg className="w-16 h-16 mx-auto text-brand-green mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Message Sent!</h3>
                  <p className="text-brand-gray">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-brand-green font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">Name</label>
                    <input
                      id="name"
                      name="from_name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">Email</label>
                    <input
                      id="email"
                      name="from_email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-brand-dark mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green"
                    >
                      <option value="">Select a topic</option>
                      <option value="product">Product Question</option>
                      <option value="order">Order Support</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  {/* Honeypot field for spam protection */}
                  <input type="text" name="bot_field" className="hidden" tabIndex={-1} autoComplete="off" />
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                      {errorMsg}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3 bg-brand-coral hover:bg-brand-coral/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-beige rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Email</h3>
                    <a href="mailto:sales@loyalbondpet.com" className="text-brand-green hover:underline">sales@loyalbondpet.com</a>
                    <p className="text-sm text-brand-gray mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-beige rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75V16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 16.5V3.75a2.25 2.25 0 00-2.25-2.25h-2.25m-3 15v3m0 0a3 3 0 01-3-3V6.75a3 3 0 013-3m0 18a3 3 0 003-3V6.75a3 3 0 00-3-3m0 18V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">WhatsApp</h3>
                    <a href="https://wa.me/8615706802495" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">+86 157 0680 2495</a>
                    <p className="text-sm text-brand-gray mt-1">Quick response for wholesale &amp; retail inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-beige rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Business Hours</h3>
                    <p className="text-brand-gray">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                    <p className="text-brand-gray">Saturday: 10:00 AM - 4:00 PM (EST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-beige rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">Location</h3>
                    <p className="text-brand-gray">Online store with worldwide shipping</p>
                    <p className="text-sm text-brand-gray mt-1">We serve customers globally from our headquarters in China</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-brand-dark mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'Facebook', icon: 'f' },
                    { name: 'Instagram', icon: 'in' },
                    { name: 'Twitter', icon: 'X' },
                    { name: 'YouTube', icon: 'Y' },
                  ].map((social) => (
                    <a key={social.name} href="#" className="w-10 h-10 bg-brand-beige rounded-full flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors" aria-label={social.name}>
                      <span className="text-xs font-bold">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-brand-dark mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/shipping-policy" className="text-brand-green hover:underline text-sm">Shipping Policy</Link></li>
                  <li><Link href="/return-policy" className="text-brand-green hover:underline text-sm">Return Policy</Link></li>
                  <li><Link href="/privacy-policy" className="text-brand-green hover:underline text-sm">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="text-brand-green hover:underline text-sm">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
