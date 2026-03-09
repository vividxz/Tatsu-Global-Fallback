import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sun, Battery, Settings, Shield, Zap, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Solar = () => {
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
      icon: Sun,
      title: 'Solar Installation',
      description: 'Complete rooftop and ground-mounted solar panel installation.',
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Battery backup systems for uninterrupted power supply.',
    },
    {
      icon: Settings,
      title: 'Inverter Systems',
      description: 'Grid-tie and off-grid inverter installation and configuration.',
    },
    {
      icon: Shield,
      title: 'Maintenance',
      description: 'Regular cleaning, inspection, and preventive maintenance.',
    },
    {
      icon: Zap,
      title: 'Net Metering',
      description: 'Grid connection setup for excess power feed-in.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and analytics for optimal performance.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Site Assessment',
      description: 'Comprehensive evaluation of roof condition, shading, and energy requirements.',
    },
    {
      step: '02',
      title: 'System Design',
      description: 'Custom solar solution design optimized for your location and usage.',
    },
    {
      step: '03',
      title: 'Installation',
      description: 'Professional installation by certified technicians with quality assurance.',
    },
    {
      step: '04',
      title: 'Commissioning',
      description: 'System testing, grid connection, and performance verification.',
    },
    {
      step: '05',
      title: 'Monitoring',
      description: 'Continuous monitoring and maintenance for optimal performance.',
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
            src="/solar-panels.jpg"
            alt="Solar Panels"
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
              Solar
              <span className="text-[#00F0FF]"> Solutions</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Complete solar installation and maintenance services. Harness the power 
              of the sun with our end-to-end renewable energy solutions.
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
                to="/manpower"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
              >
                <span>Explore Manpower</span>
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
              Complete Solar
              <span className="text-[#00F0FF]"> Services</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From initial assessment to ongoing maintenance, we provide comprehensive 
              solar solutions for residential, commercial, and industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                From Sunlight to
                <span className="text-[#00F0FF]"> Savings</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our five-step process ensures a smooth transition to solar energy, 
                with quality and performance guaranteed at every stage.
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
                  src="/solar-panels.jpg"
                  alt="Solar Installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/team.jpg"
                  alt="Solar Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Go Solar
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Benefits of Solar
                <span className="text-[#00F0FF]"> Energy</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Solar energy offers numerous advantages for homes and businesses, 
                from cost savings to environmental impact.
              </p>

              <div className="space-y-4">
                {[
                  'Significant reduction in electricity bills',
                  'Environmentally friendly renewable energy',
                  'Energy independence and security',
                  'Low maintenance requirements',
                  'Increased property value',
                  'Government incentives and tax benefits',
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
            Start Your Solar
            <span className="text-[#00F0FF]"> Journey</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Contact us for a free site assessment and customized solar proposal 
            tailored to your energy needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
          >
            <span>Get Free Assessment</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solar;
