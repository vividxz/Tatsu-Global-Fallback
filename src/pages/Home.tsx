import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, TowerControl, Cable, Network, Sun, Users, Code, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ years: 0, projects: 0, experts: 0, uptime: 0 });

  const services = [
    {
      icon: TowerControl,
      title: 'Telecom Infrastructure',
      description: 'Complete tower solutions from foundation to antenna installation.',
      path: '/telecom',
      image: '/telecom-tower.jpg',
    },
    {
      icon: Cable,
      title: 'OFC Solutions',
      description: 'End-to-end optical fiber connectivity from design to deployment.',
      path: '/ofc',
      image: '/fiber-cables.jpg',
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'BTS, microwave links, and network infrastructure solutions.',
      path: '/networking',
      image: '/networking.jpg',
    },
    {
      icon: Sun,
      title: 'Solar Solutions',
      description: 'Complete solar installation and maintenance services.',
      path: '/solar',
      image: '/solar-panels.jpg',
    },
    {
      icon: Users,
      title: 'Technical Manpower',
      description: 'Skilled engineering professionals deployed globally.',
      path: '/manpower',
      image: '/team.jpg',
    },
    {
      icon: Code,
      title: 'IT Solutions',
      description: 'AI-driven software, web, and app development.',
      path: '/it-solutions',
      image: '/it-solutions.jpg',
    },
  ];

  const testimonials = [
    {
      quote: "TATSU Global's precision in fiber deployment transformed our network infrastructure. Their team's expertise is unmatched.",
      author: 'Rajesh Kumar',
      position: 'CTO, Telecom Operator',
    },
    {
      quote: "From planning to execution, TATSU Global delivered our solar project on time and within budget. Highly recommended.",
      author: 'Priya Sharma',
      position: 'Operations Director, Energy Corp',
    },
    {
      quote: "Their technical manpower support has been instrumental in scaling our operations across multiple regions.",
      author: 'Amit Patel',
      position: 'VP Engineering, Tech Solutions',
    },
  ];

  useEffect(() => {
    // Hero animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Counter animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;

            let step = 0;
            const timer = setInterval(() => {
              step++;
              const progress = step / steps;
              const easeProgress = 1 - Math.pow(1 - progress, 3);

              setCounters({
                years: Math.floor(15 * easeProgress),
                projects: Math.floor(500 * easeProgress),
                experts: Math.floor(250 * easeProgress),
                uptime: parseFloat((99.9 * easeProgress).toFixed(1)),
              });

              if (step >= steps) {
                clearInterval(timer);
                setCounters({ years: 15, projects: 500, experts: 250, uptime: 99.9 });
              }
            }, interval);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#050505]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden bg-[#050505]">
          <video
            src="/Telecom_Website_Hero_Section_Video.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            className="w-full h-full object-cover pointer-events-none"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 grid-pattern opacity-20 mix-blend-overlay z-10" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505] z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] tracking-tighter mb-4">
            <span className="text-white">TATSU</span>
            <span className="text-[#00F0FF]"> GLOBAL</span>
          </h1>
          <p className="hero-subtitle text-base sm:text-lg lg:text-xl text-white/80 font-light mb-4">
            Infrastructure Solutions
          </p>
          <p className="hero-subtitle text-xs sm:text-sm text-white/50 max-w-2xl mx-auto mb-10">
            Engineering the Future of Connectivity. From fiber optics to 5G towers, 
            we architect the backbone of modern communication.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-all flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/40 text-sm mb-2">Scroll to Explore</span>
          <ChevronDown className="w-6 h-6 text-[#00F0FF] animate-bounce" />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-6">
                Building the Invisible
                <span className="text-[#00F0FF]"> Infrastructure</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                We are a team of engineers and architects dedicated to building the 
                backbone of modern communication. From fiber optics to 5G towers, 
                from solar installations to IT solutions, we deliver excellence 
                across the entire infrastructure spectrum.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                With over 15 years of experience and 500+ successful projects, 
                we have established ourselves as a trusted partner for telecom 
                operators, enterprises, and government organizations worldwide.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#00F0FF] font-semibold hover:underline"
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/tower-construction.jpg"
                  alt="Infrastructure Construction"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#00F0FF]/10 rounded-lg border border-[#00F0FF]/30 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-bold text-[#00F0FF]">15+</span>
                  <p className="text-white/60 text-sm mt-1">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Comprehensive Infrastructure
              <span className="text-[#00F0FF]"> Solutions</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From planning to execution, we deliver end-to-end infrastructure 
              solutions with precision, safety, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group relative bg-[#111] rounded-lg overflow-hidden border border-[#222] hover:border-[#00F0FF]/50 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <service.icon className="w-6 h-6 text-[#00F0FF]" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#00F0FF] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-[#00F0FF] text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-[#0A0A0A] rounded-lg border border-[#222]">
              <span className="text-5xl font-bold text-[#00F0FF] font-['Space_Grotesk']">
                {counters.years}+
              </span>
              <p className="text-white/60 mt-2">Years Experience</p>
            </div>
            <div className="text-center p-8 bg-[#0A0A0A] rounded-lg border border-[#222]">
              <span className="text-5xl font-bold text-[#00F0FF] font-['Space_Grotesk']">
                {counters.projects}+
              </span>
              <p className="text-white/60 mt-2">Projects Completed</p>
            </div>
            <div className="text-center p-8 bg-[#0A0A0A] rounded-lg border border-[#222]">
              <span className="text-5xl font-bold text-[#00F0FF] font-['Space_Grotesk']">
                {counters.experts}+
              </span>
              <p className="text-white/60 mt-2">Skilled Experts</p>
            </div>
            <div className="text-center p-8 bg-[#0A0A0A] rounded-lg border border-[#222]">
              <span className="text-5xl font-bold text-[#00F0FF] font-['Space_Grotesk']">
                {counters.uptime}%
              </span>
              <p className="text-white/60 mt-2">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                What Sets Us
                <span className="text-[#00F0FF]"> Apart</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our edge lies in combining nationwide reach with flawless execution 
                and zero-tolerance safety culture. We deliver infrastructure solutions 
                that stand the test of time.
              </p>

              <div className="space-y-4">
                {[
                  'Scale & Speed - High-volume rollouts with consistency',
                  'Nationwide Presence - Execution across all regions',
                  'Safety & Quality - Strict OHS and industry standards',
                  'OEM-Agnostic - Seamless multi-platform integration',
                  'End-to-End Management - From feasibility to operations',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden border border-[#222]">
                  <img
                    src="/ofc-work.jpg"
                    alt="OFC Work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-[#111] rounded-lg border border-[#222]">
                  <span className="text-3xl font-bold text-[#00F0FF]">100%</span>
                  <p className="text-white/60 text-sm mt-1">OHS Compliant</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 bg-[#111] rounded-lg border border-[#222]">
                  <span className="text-3xl font-bold text-[#00F0FF]">ISO</span>
                  <p className="text-white/60 text-sm mt-1">9001:2015 Certified</p>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden border border-[#222]">
                  <img
                    src="/microwave.jpg"
                    alt="Microwave Installation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              Trusted by Industry
              <span className="text-[#00F0FF]"> Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-[#0A0A0A] rounded-lg border border-[#222] hover:border-[#00F0FF]/30 transition-colors"
              >
                <div className="text-[#00F0FF] text-4xl font-serif mb-4">"</div>
                <p className="text-white/80 leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Ready to Build the
            <span className="text-[#00F0FF]"> Future?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how TATSU Global can transform 
            your infrastructure projects with precision and innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
