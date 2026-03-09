import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, Globe, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering results that exceed expectations.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical standards in all our dealings.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients and partners to achieve shared success.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies to stay ahead of the curve.',
    },
  ];

  const milestones = [
    { year: '2010', event: 'Company founded with telecom focus' },
    { year: '2013', event: 'Expanded to OFC solutions' },
    { year: '2016', event: 'Added solar and networking services' },
    { year: '2019', event: 'Launched IT solutions division' },
    { year: '2022', event: 'Global expansion to 50+ countries' },
    { year: '2026', event: '500+ projects completed successfully' },
  ];

  const certifications = [
    'ISO 9001:2015 - Quality Management',
    'ISO 14001:2015 - Environmental Management',
    'OHSAS 18001 - Occupational Health & Safety',
    'ISO 27001 - Information Security Management',
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

        {/* Content */}
        <div className="about-hero-content relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-32 pb-20 text-center">
          <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
            About Us
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6">
            Building the Future of
            <span className="text-[#00F0FF]"> Infrastructure</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We are a team of engineers, technicians, and innovators dedicated to 
            building the backbone of modern connectivity.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Engineering Excellence
                <span className="text-[#00F0FF]"> Since 2010</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                TATSU Global began with a simple mission: to build 
                the infrastructure that powers the digital world. What started as a 
                small telecom services company has grown into a comprehensive infrastructure 
                solutions provider serving clients across the globe.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                Over the years, we've expanded our capabilities to include optical fiber 
                solutions, networking, solar installations, and IT services. Today, we're 
                proud to be a trusted partner for telecom operators, enterprises, and 
                government organizations worldwide.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our success is built on a foundation of technical expertise, unwavering 
                commitment to quality, and a deep understanding of our clients' needs. 
                We don't just build infrastructure – we build relationships that last.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/tower-construction.jpg"
                  alt="Our Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-[#111] rounded-lg border border-[#222]">
              <Eye className="w-12 h-12 text-[#00F0FF] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Our Vision
              </h3>
              <p className="text-white/70 leading-relaxed">
                To be the global leader in infrastructure solutions, recognized for 
                our innovation, quality, and commitment to sustainable development. 
                We envision a world where seamless connectivity powers progress and 
                improves lives.
              </p>
            </div>

            <div className="p-8 bg-[#111] rounded-lg border border-[#222]">
              <Target className="w-12 h-12 text-[#00F0FF] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed">
                To deliver world-class infrastructure solutions that enable our clients 
                to achieve their goals. We combine technical excellence with operational 
                efficiency to complete projects on time, within budget, and to the highest 
                quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              What We Stand
              <span className="text-[#00F0FF]"> For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-[#0A0A0A] rounded-lg border border-[#222] hover:border-[#00F0FF]/30 transition-colors"
              >
                <value.icon className="w-10 h-10 text-[#00F0FF] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              Milestones That Define
              <span className="text-[#00F0FF]"> Our Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="p-6 bg-[#111] rounded-lg border border-[#222]"
              >
                <span className="text-3xl font-bold text-[#00F0FF] font-['Space_Grotesk'] block mb-2">
                  {milestone.year}
                </span>
                <p className="text-white/80">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Certifications
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Quality Assured,
                <span className="text-[#00F0FF]"> Standards Certified</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our commitment to quality and safety is validated by internationally 
                recognized certifications. We maintain the highest standards in every 
                aspect of our operations.
              </p>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-[#00F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/team.jpg"
                  alt="Our Team"
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
            Let's Build Something
            <span className="text-[#00F0FF]"> Together</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Ready to partner with a team that's committed to your success? 
            Let's discuss how we can help achieve your infrastructure goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
