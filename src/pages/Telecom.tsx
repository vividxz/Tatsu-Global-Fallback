import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TowerControl, Zap, Settings, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Telecom = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from('.service-hero-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Settings,
      title: 'Layout Design',
      description: 'Comprehensive site surveys and tower layout design optimized for coverage and capacity requirements.',
    },
    {
      icon: Shield,
      title: 'Tower Foundation',
      description: 'Engineered foundation solutions including soil testing, structural design, and civil construction.',
    },
    {
      icon: TowerControl,
      title: 'Tower Erection',
      description: 'Professional installation of GSM, CDMA, and microwave towers with precision and safety.',
    },
    {
      icon: Zap,
      title: 'Electrification',
      description: 'Complete power solutions including electrical installation, backup systems, and grounding.',
    },
    {
      icon: Settings,
      title: 'Pole Mount Antenna',
      description: 'Installation of pole-mounted antennas for urban and suburban coverage solutions.',
    },
    {
      icon: TowerControl,
      title: 'Microwave Installation',
      description: 'Point-to-point and point-to-multipoint microwave link installation and alignment.',
    },
    {
      icon: Settings,
      title: 'BTS Installation',
      description: 'Base Transceiver Station setup, configuration, and commissioning.',
    },
    {
      icon: Shield,
      title: 'OFC Connectivity',
      description: 'Fiber optic cable termination and connectivity to telecom infrastructure.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Site Survey',
      description: 'Comprehensive analysis of site conditions, coverage requirements, and regulatory compliance.',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Detailed engineering design including structural calculations and network optimization.',
    },
    {
      step: '03',
      title: 'Civil Works',
      description: 'Foundation construction, tower erection, and site preparation activities.',
    },
    {
      step: '04',
      title: 'Equipment Installation',
      description: 'Antenna, BTS, microwave, and power system installation with precision alignment.',
    },
    {
      step: '05',
      title: 'Testing & Commissioning',
      description: 'Comprehensive testing, optimization, and handover with documentation.',
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/telecom-tower.jpg"
            alt="Telecom Tower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
        </div>

        {/* Content */}
        <div className="service-hero-content relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6">
              Telecom
              <span className="text-[#00F0FF]"> Infrastructure</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              End-to-end telecom infrastructure solutions from site survey to commissioning. 
              We build the towers that connect the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ofc"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
              >
                <span>Explore OFC Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              Comprehensive Telecom
              <span className="text-[#00F0FF]"> Services</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From initial design to final commissioning, we handle every aspect 
              of telecom infrastructure deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-[#0A0A0A] rounded-lg border border-[#222] hover:border-[#00F0FF]/50 transition-all duration-300"
              >
                <service.icon className="w-10 h-10 text-[#00F0FF] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Process
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                How We Deliver
                <span className="text-[#00F0FF]"> Excellence</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our proven five-step process ensures every project is delivered 
                on time, within budget, and to the highest quality standards.
              </p>

              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <span className="text-3xl font-bold text-[#00F0FF] font-['Space_Grotesk']">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/tower-construction.jpg"
                  alt="Tower Construction"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/microwave.jpg"
                  alt="Microwave Installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Capabilities
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Why Partner With
                <span className="text-[#00F0FF]"> TATSU Global</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We bring unparalleled expertise and resources to every telecom 
                infrastructure project, ensuring success at every stage.
              </p>

              <div className="space-y-4">
                {[
                  'Experienced team of certified telecom engineers',
                  'OEM-agnostic approach with multi-vendor expertise',
                  'Strict adherence to safety and quality standards',
                  'Pan-India deployment capability',
                  '24/7 support and maintenance services',
                  'Complete documentation and handover process',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Start Your Telecom
            <span className="text-[#00F0FF]"> Project</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your telecom infrastructure requirements 
            and get a customized solution proposal.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Telecom;
