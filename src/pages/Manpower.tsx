import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Globe, Award, Shield, Clock, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Manpower = () => {
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

  const expertise = [
    {
      icon: Briefcase,
      title: 'Telecom Engineers',
      description: 'Certified engineers for tower installation, BTS, and microwave systems.',
    },
    {
      icon: Shield,
      title: 'OFC Technicians',
      description: 'Skilled fiber optic cable technicians for splicing and installation.',
    },
    {
      icon: Users,
      title: 'Network Specialists',
      description: 'Experts in routing, switching, and network configuration.',
    },
    {
      icon: Award,
      title: 'Solar Technicians',
      description: 'Certified professionals for solar panel installation and maintenance.',
    },
    {
      icon: Globe,
      title: 'Project Managers',
      description: 'Experienced managers to oversee large-scale infrastructure projects.',
    },
    {
      icon: Clock,
      title: '24/7 Support Staff',
      description: 'Round-the-clock technical support and maintenance teams.',
    },
  ];

  const benefits = [
    'Access to highly skilled and certified professionals',
    'Flexible deployment across multiple regions',
    'Rapid team scaling for project demands',
    'Comprehensive training and safety protocols',
    'Background verified and security cleared personnel',
    'Competitive rates without compromising quality',
  ];

  const stats = [
    { value: '500+', label: 'Skilled Professionals' },
    { value: '50+', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
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
            src="/team.jpg"
            alt="Technical Team"
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
              Technical
              <span className="text-[#00F0FF]"> Manpower</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Skilled engineering professionals deployed globally. We provide 
              the expertise you need, when and where you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
              >
                <span>Request Resources</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/it-solutions"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
              >
                <span>Explore IT Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="text-4xl font-bold text-[#00F0FF] font-['Space_Grotesk']">
                  {stat.value}
                </span>
                <p className="text-white/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              Skilled Professionals Across
              <span className="text-[#00F0FF]"> Disciplines</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our pool of technical experts covers every aspect of infrastructure 
              deployment and maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-[#0A0A0A] rounded-lg border border-[#222] hover:border-[#00F0FF]/50 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-[#00F0FF] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Deployment */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Global Reach
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Deployed
                <span className="text-[#00F0FF]"> Worldwide</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our technical manpower services extend across the globe. Whether you 
                need a single expert or an entire project team, we can deploy skilled 
                professionals to any location, ensuring your infrastructure projects 
                stay on track.
              </p>

              <div className="space-y-4">
                {[
                  'Rapid deployment to project sites',
                  'Multi-lingual technical teams',
                  'Cultural awareness and local compliance',
                  'Travel and logistics management',
                  'Visa and work permit assistance',
                  'Local partnership networks',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222] bg-[#111] flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-24 h-24 text-[#00F0FF] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">Global Presence</h3>
                  <p className="text-white/60">Serving clients across 50+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/tower-construction.jpg"
                  alt="Team at Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Your Trusted
                <span className="text-[#00F0FF]"> Partner</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We understand that your projects depend on having the right people 
                with the right skills at the right time. That's why we've built a 
                reputation for reliability and excellence.
              </p>

              <div className="space-y-4">
                {benefits.map((item, index) => (
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
            Need Skilled
            <span className="text-[#00F0FF]"> Professionals?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Contact us to discuss your manpower requirements and get access to 
            our pool of certified technical experts.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
          >
            <span>Request Resources</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Manpower;
