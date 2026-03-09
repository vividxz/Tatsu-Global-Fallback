import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cable, Layers, GitMerge, Box, Home, Settings } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OFC = () => {
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
      icon: Layers,
      title: 'Ducting',
      description: 'Underground and surface duct installation for fiber cable protection and routing.',
    },
    {
      icon: Cable,
      title: 'Fiber Blowing',
      description: 'High-pressure air-assisted fiber cable installation through ducts.',
    },
    {
      icon: GitMerge,
      title: 'Splicing',
      description: 'Precision fiber splicing with fusion splicers and OTDR testing.',
    },
    {
      icon: Box,
      title: 'Chamber Installation',
      description: 'Underground chamber construction at connection points for access.',
    },
    {
      icon: Settings,
      title: 'Big Connections',
      description: 'Large-scale fiber distribution and backbone network connections.',
    },
    {
      icon: Home,
      title: 'FTTH Solutions',
      description: 'Complete Fiber to the Home deployment from design to installation.',
    },
  ];

  const applications = [
    {
      title: 'Telecom Networks',
      description: 'Backbone and last-mile connectivity for telecom operators.',
    },
    {
      title: 'Enterprise Solutions',
      description: 'Campus-wide fiber networks for corporate and industrial facilities.',
    },
    {
      title: 'Smart Cities',
      description: 'Integrated fiber infrastructure for urban development projects.',
    },
    {
      title: 'Data Centers',
      description: 'High-density fiber connectivity for data center interconnections.',
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
            src="/fiber-cables.jpg"
            alt="Fiber Optic Cables"
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
              OFC
              <span className="text-[#00F0FF]"> Solutions</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              End-to-end optical fiber connectivity solutions. From ducting to FTTH, 
              we deliver the fiber infrastructure that powers the digital world.
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
                to="/networking"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
              >
                <span>Explore Networking</span>
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
              Complete Fiber
              <span className="text-[#00F0FF]"> Solutions</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From underground ducting to home connections, we handle every aspect 
              of optical fiber cable deployment.
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

      {/* FTTH Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                FTTH Solutions
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Fiber to the
                <span className="text-[#00F0FF]"> Home</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Complete FTTH deployment from design to installation. We deliver 
                high-speed fiber connectivity directly to residential and commercial 
                premises, enabling next-generation internet, TV, and phone services.
              </p>

              <div className="space-y-4">
                {[
                  'Route survey and network design',
                  'Underground and aerial cable deployment',
                  'Splitter installation and configuration',
                  'Customer premise equipment setup',
                  'Testing and commissioning',
                  'Documentation and as-built drawings',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/ofc-work.jpg"
                  alt="OFC Installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Applications
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              Industries We
              <span className="text-[#00F0FF]"> Serve</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="p-6 bg-[#0A0A0A] rounded-lg border border-[#222] hover:border-[#00F0FF]/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {app.title}
                </h3>
                <p className="text-white/60 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/networking.jpg"
                  alt="Fiber Splicing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Equipment
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                State-of-the-Art
                <span className="text-[#00F0FF]"> Technology</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We invest in the latest fiber deployment and testing equipment 
                to ensure precision, efficiency, and quality in every project.
              </p>

              <div className="space-y-4">
                {[
                  'Fusion splicers with advanced alignment systems',
                  'OTDR testing equipment for loss measurement',
                  'High-pressure fiber blowing machines',
                  'Cable blowing and pulling equipment',
                  'Fiber inspection microscopes',
                  'Power meters and light sources',
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Ready for Fiber
            <span className="text-[#00F0FF]"> Deployment?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Contact us to discuss your optical fiber cable requirements and 
            get a comprehensive deployment plan.
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

export default OFC;
