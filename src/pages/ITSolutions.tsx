import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Cpu, Smartphone, Database, Cloud, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ITSolutions = () => {
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
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications and enterprise portals built with modern technologies.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: Cpu,
      title: 'AI Solutions',
      description: 'Machine learning and AI-driven solutions for business automation.',
    },
    {
      icon: Database,
      title: 'Enterprise Software',
      description: 'Custom software solutions tailored to your business processes.',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, deployment, and management services.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security audits, implementation, and ongoing monitoring.',
    },
  ];

  const technologies = [
    'React, Angular, Vue.js',
    'Node.js, Python, Java',
    'React Native, Flutter',
    'AWS, Azure, GCP',
    'TensorFlow, PyTorch',
    'PostgreSQL, MongoDB',
    'Docker, Kubernetes',
    'CI/CD Pipelines',
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your business needs, goals, and technical requirements.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Creating user-centered designs and technical architecture.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development with regular updates and feedback loops.',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Comprehensive testing for quality, security, and performance.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Smooth launch with monitoring and ongoing support.',
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
            src="/it-solutions.jpg"
            alt="IT Solutions"
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
              IT
              <span className="text-[#00F0FF]"> Solutions</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Technology solutions that drive business growth. From web and mobile 
              apps to AI-driven systems, we build software that makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
              >
                <span>Learn About Us</span>
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
              Technology Solutions for
              <span className="text-[#00F0FF]"> Modern Business</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We deliver cutting-edge software solutions that help businesses 
              innovate, automate, and scale.
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

      {/* Technologies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Tech Stack
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Built With Modern
                <span className="text-[#00F0FF]"> Technologies</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We use the latest technologies and best practices to build 
                scalable, secure, and high-performance software solutions.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#00F0FF] flex-shrink-0" />
                    <span className="text-white/80">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222]">
                <img
                  src="/it-solutions.jpg"
                  alt="Technology Stack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              How We Build
              <span className="text-[#00F0FF]"> Software</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="p-6 bg-[#0A0A0A] rounded-lg border border-[#222] text-center"
              >
                <span className="text-4xl font-bold text-[#00F0FF] font-['Space_Grotesk'] block mb-4">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Highlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden border border-[#222] bg-[#111] flex items-center justify-center">
                <div className="text-center p-8">
                  <Cpu className="w-24 h-24 text-[#00F0FF] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">AI-Powered</h3>
                  <p className="text-white/60">Intelligent solutions for modern challenges</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#00F0FF] text-sm font-semibold tracking-wider uppercase mb-4 block">
                AI Solutions
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
                Harness the Power of
                <span className="text-[#00F0FF]"> Artificial Intelligence</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Transform your business with AI-driven solutions. From predictive 
                analytics to intelligent automation, we help you leverage the power 
                of machine learning and artificial intelligence.
              </p>

              <div className="space-y-4">
                {[
                  'Machine learning model development',
                  'Natural language processing solutions',
                  'Computer vision applications',
                  'Predictive analytics and forecasting',
                  'Intelligent process automation',
                  'AI-powered chatbots and assistants',
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
            Ready to Build Something
            <span className="text-[#00F0FF]"> Amazing?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a technology solution 
            that drives your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded hover:bg-[#00D0DD] transition-colors"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ITSolutions;
