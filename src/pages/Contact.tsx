import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().min(1, 'Company name is required'),
  inquiryType: z.enum(['Solar EPC', 'Telecom Towers', 'Manpower', 'Campus Hiring', 'Renewable Energy', 'General'], {
    message: 'Please select an inquiry type',
  }),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from('.contact-hero-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setReferenceId(result.referenceId);
        setSubmitState('success');
        reset();
      } else {
        setSubmitState('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitState('error');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['12.9735° N, 77.6164° E', 'Bengaluru', 'India'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 7991103488', '+91 9123286165'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['aditya.singh@tatsuglobal.in'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
    },
  ];

  const services = [
    'Solar EPC',
    'Telecom Towers',
    'Manpower',
    'Campus Hiring',
    'Renewable Energy',
    'General',
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

        <div className="contact-hero-content relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-32 pb-20 text-center">
          <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Contact Us
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6">
            Let's Start a
            <span className="text-[#00F0FF]"> Conversation</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Reach out and let's 
            discuss how we can help bring your infrastructure vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Send a Message
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-8">
                Get in Touch
              </h2>

              {submitState === 'success' ? (
                <div className="p-8 bg-[#0A0A0A] rounded-lg border border-[#00F0FF]/30 text-center">
                  <CheckCircle className="w-16 h-16 text-[#00F0FF] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-white/70 mb-4">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                  <div className="bg-[#111] p-4 rounded-md border border-[#222]">
                    <span className="text-sm text-white/50 block mb-1">Reference ID</span>
                    <strong className="text-[#00F0FF] text-lg font-mono">{referenceId}</strong>
                  </div>
                  <button 
                    onClick={() => setSubmitState('idle')}
                    className="mt-6 text-sm text-[#00F0FF] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {submitState === 'error' && (
                    <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-200">
                        There was an error sending your message. Please try again later.
                      </p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('fullName')}
                        className={`w-full px-4 py-3 bg-[#0A0A0A] border ${errors.fullName ? 'border-red-500' : 'border-[#222]'} rounded-lg text-white placeholder-white/40 focus:border-[#00F0FF] focus:outline-none transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        className={`w-full px-4 py-3 bg-[#0A0A0A] border ${errors.email ? 'border-red-500' : 'border-[#222]'} rounded-lg text-white placeholder-white/40 focus:border-[#00F0FF] focus:outline-none transition-colors`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className={`w-full px-4 py-3 bg-[#0A0A0A] border ${errors.phone ? 'border-red-500' : 'border-[#222]'} rounded-lg text-white placeholder-white/40 focus:border-[#00F0FF] focus:outline-none transition-colors`}
                        placeholder="+91 7991103488"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        {...register('company')}
                        className={`w-full px-4 py-3 bg-[#0A0A0A] border ${errors.company ? 'border-red-500' : 'border-[#222]'} rounded-lg text-white placeholder-white/40 focus:border-[#00F0FF] focus:outline-none transition-colors`}
                        placeholder="Your Company"
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      {...register('inquiryType')}
                      className={`w-full px-4 py-3 bg-[#0A0A0A] border ${errors.inquiryType ? 'border-red-500' : 'border-[#222]'} rounded-lg text-white focus:border-[#00F0FF] focus:outline-none transition-colors`}
                    >
                      <option value="">Select an inquiry type</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType.message}</p>}
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className={`w-full px-4 py-3 bg-[#0A0A0A] border ${errors.message ? 'border-red-500' : 'border-[#222]'} rounded-lg text-white placeholder-white/40 focus:border-[#00F0FF] focus:outline-none transition-colors resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitState === 'loading'}
                    className="w-full sm:w-auto px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{submitState === 'loading' ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Contact Information
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-8">
                Reach Out to Us
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-[#0A0A0A] rounded-lg border border-[#222]"
                  >
                    <info.icon className="w-6 h-6 text-[#00F0FF] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/60 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">
              Find Us on the Map
            </h2>
            <p className="mt-2 text-white/60">Coordinates: 12.9735° N, 77.6164° E</p>
          </div>

          <div className="aspect-[21/9] rounded-lg overflow-hidden border border-[#222]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15551.986884022872!2d77.6164!3d12.9735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzI0LjYiTiA3N8KwMzYnNTkuMCJF!5e0!3m2!1sen!2sin!4v1715456958467!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TATSU Global Location"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
