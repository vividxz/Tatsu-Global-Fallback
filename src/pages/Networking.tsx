import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Network, Wifi, Server, Router, Antenna, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Networking = () => {
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
      icon: Antenna,
      title: 'BTS Integration',
      description: 'Base Transceiver Station setup, configuration, and network integration.',
    },
    {
      icon: Wifi,
      title: 'Microwave Links',
      description: 'Point-to-point and point-to-multipoint wireless connectivity solutions.',
    },
    {
      icon: Network,
      title: 'Network Drive',
      description: 'Enterprise network infrastructure design and deployment.',
    },
    {
      icon: Router,
      title: 'Routing & Switching',
      description: 'Advanced routing protocols and switching infrastructure.',
    },
    {
      icon: Globe,
      title: 'WAN Solutions',
      description: 'Wide area network design and optimization.',
    },
    {
      icon: Server,
      title: 'Data Center Networking',
      description: 'High-density data center interconnect and fabric solutions.',
    },
  ];

  const technologies = [
    {
      title: 'Microwave',
      description: 'Traditional wireless backhaul using tower-mounted microwave antennas for long-distance connectivity.',
      type: 'Established',
    },
    {
      title: 'Optical Fiber',
      description: 'Modern high-capacity fiber connectivity delivering unmatched bandwidth and reliability.',
      type: 'Next-Gen',
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
            src="/networking.jpg"
            alt="Network Infrastructure"
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
              Networking
              <span className="text-[#00F0FF]"> Solutions</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Complete network infrastructure solutions from BTS to backbone. 
              We connect the world with reliable, high-performance networks.
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
                to="/solar"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
              >
                <span>Explore Solar</span>
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
              Network Infrastructure
              <span className="text-[#00F0FF]"> Services</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From wireless backhaul to enterprise networks, we design and deploy 
              the connectivity solutions that power modern businesses.
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

      {/* Technologies Comparison */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Connectivity Options
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              From Towers to
              <span className="text-[#00F0FF]"> Homes</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We offer both traditional and next-generation connectivity solutions 
              tailored to your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-8 bg-[#111] rounded-lg border border-[#222] hover:border-[#00F0FF]/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                    {tech.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs font-semibold rounded ${
                    tech.type === 'Established' 
                      ? 'bg-white/10 text-white/80' 
                      : 'bg-[#00F0FF]/20 text-[#00F0FF]'
                  }`}>
                    {tech.type}
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Services Detail */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                End-to-End Network
                <span className="text-[#00F0FF]"> Solutions</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We design, deploy, and maintain network infrastructure that meets 
                the demands of today's connected world. From carrier-grade backhaul 
                to enterprise LANs, our solutions are built for performance and reliability.
              </p>

              <div className="space-y-4">
                {[
                  'Network design and architecture planning',
                  'Equipment procurement and configuration',
                  'Installation and commissioning',
                  'Performance optimization',
                  '24/7 monitoring and support',
                  'Regular maintenance and upgrades',
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
                  src="/microwave.jpg"
                  alt="Network Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Build Your Network
            <span className="text-[#00F0FF]"> With Us</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your networking requirements and design a solution 
            that meets your performance and budget goals.
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

export default Networking;
