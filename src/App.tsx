import React, { useEffect, useRef,useState } from 'react';
import { ChevronDown, Battery, Wifi, Compass, Gauge, Power, Shield, Zap, Clock, Cloud, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Menu, X, Plane, Star, Package } from "lucide-react";

function App() {
  const droneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (droneRef.current && containerRef.current) {
        const scrolled = window.scrollY;
        const containerHeight = containerRef.current.offsetHeight;
        const rotateY = (scrolled / containerHeight) * 360;
        const translateZ = Math.min(scrolled * 0.5, 200);
        const opacity = Math.max(1 - (scrolled / containerHeight) * 2, 0);
        
        droneRef.current.style.transform = `
          perspective(1000px)
          rotateY(${rotateY}deg)
          translateZ(${translateZ}px)
          translateY(${scrolled * 0.2}px)
        `;
        droneRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
    {/* Navbar */}
    <nav className="bg-black/80 fixed top-0 left-0 right-0 z-50 shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-semibold">
        <a href="/">
          {/* Logo Image */}
          <img 
            src="https://unsplash.com/photos/silver-mercedes-benz-emblem-on-blue-surface-5MlBMYDsGBY"  // Replace with your logo path
            alt="IRAWH Logo"
            className="h-10" // You can adjust the size as needed
          />
        </a>
      </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
          <a href="#product" className="text-white hover:text-blue-400 transition-colors">Product</a>
          <a href="#career" className="text-white hover:text-blue-400 transition-colors">Careers</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 text-white py-4 px-6 space-y-4">
          <a href="#home" className="block hover:text-blue-400">Home</a>
          <a href="#about" className="block hover:text-blue-400">About</a>
          <a href="#product" className="block hover:text-blue-400">Product</a>
          <a href="#careers" className="block hover:text-blue-400">Careers</a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
    
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black z-0" />
        
        {/* Animated Drone */}
        <div 
          ref={droneRef}
          className="absolute z-10 w-full max-w-2xl transition-transform duration-100 ease-out"
        >
          <div className="relative">
            {/* Main Drone Body */}
            <div className="relative mx-auto w-[600px] h-[400px] bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-blue-500/30 backdrop-blur-sm">
              {/* Cockpit */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-blue-400/10 rounded-full border border-blue-400/30 backdrop-blur-md">
                <div className="absolute inset-2 rounded-full bg-gradient-to-b from-blue-500/20 to-transparent" />
              </div>
              
              {/* Rotors */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-32 h-32 ${
                    i === 0 ? 'top-0 left-0' :
                    i === 1 ? 'top-0 right-0' :
                    i === 2 ? 'bottom-0 left-0' :
                    'bottom-0 right-0'
                  }`}
                >
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-24 bg-blue-400/30 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-4 bg-blue-400/30 rounded-full" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                </div>
              ))}
              
              {/* LED Strips */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <div className="w-24 h-2 bg-blue-500 rounded-full animate-pulse" />
                <div className="w-24 h-2 bg-blue-500 rounded-full animate-pulse" />
              </div>
            </div>
            
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-3xl filter blur-xl" />
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[2rem] filter blur-2xl" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              IRAWH
            </span>
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            The Future of Transporatation
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up">
  
            <button className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </div>

      {/* About Us Section */}
<div id="about" className="relative py-32 bg-gradient-to-b from-black/90 to-blue-900/20 text-center">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-white mb-8 animate-fade-in">
      About <span className="text-blue-400">IRAWH</span>
    </h2>
    <p className="text-lg text-white/70 leading-relaxed animate-slide-up">
    IRAWH is an innovative startup dedicated to transforming personal air mobility. We are pioneering the future of transportation with our cutting-edge, autonomous drones designed to carry passengers safely and efficiently. By integrating advanced AI navigation,
     electric propulsion, and state-of-the-art safety systems, we aim to revolutionize urban travel, reduce congestion, and make aerial mobility accessible to everyone.
    </p>
  </div>
</div>


         {/* Mission & Vision Section */}
<div className="relative py-32 bg-black/95">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
    <div className="p-8 bg-white/10 rounded-xl shadow-lg transition-all duration-300 hover:bg-white/20">
      <h3 className="text-4xl font-bold text-blue-400 mb-4"> Our Mission</h3>
      <p className="text-white/70 text-lg leading-relaxed">
      To develop safe, sustainable, and intelligent personal aerial vehicles that redefine transportation,
       making urban mobility faster, more efficient, and environmentally friendly
      </p>
    </div>
    <div className="p-8 bg-white/10 rounded-xl shadow-lg transition-all duration-300 hover:bg-white/20">
      <h3 className="text-4xl font-bold text-blue-400 mb-4"> Our Vision</h3>
      <p className="text-white/70 text-lg leading-relaxed">
      To lead the evolution of personal air mobility, creating a world where everyone has access to seamless, autonomous, 
      and congestion-free air travel, improving lives and redefining transportation for generations to come.
      </p>
    </div>
  </div>
</div>


    {/* Our Values Section */}
<div className="relative py-32 bg-gradient-to-b from-blue-900/20 to-black">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-5xl font-bold text-white mb-12 animate-fade-in">Our Values</h2>
    <div className="grid md:grid-cols-3 gap-12">
      {[
        { icon: Star, title: "Innovation", desc: "We push the boundaries of technology to shape the future." },
        { icon: Shield, title: "Safety", desc: "Every flight is backed by advanced safety systems." },
        { icon: Cloud, title: "Sustainability", desc: "Eco-friendly electric aviation for a greener planet." },
      ].map((value, index) => (
        <div 
          key={index} 
          className="p-8 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300">
          <value.icon className="text-blue-400 w-12 h-12 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-white">{value.title}</h3>
          <p className="text-white/70">{value.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>


{/* Our Product (Under Development) */}
<div id="product" className="relative py-32 bg-black/95 text-center">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-white mb-8 animate-fade-in">
      Introducing <span className="text-blue-400">Nexus One</span>
    </h2>
    <p className="text-lg text-white/70 leading-relaxed animate-slide-up max-w-3xl mx-auto">
      We are building the **future of personal air mobility**.  
      <span className="text-blue-400 font-semibold"> Nexus One</span> is currently under development—  
      an **AI-powered, fully electric personal aircraft** designed to **revolutionize travel**.  
      Stay tuned for updates as we bring this vision to life!  
    </p>

    {/* Product Image */}
    <div className="relative mt-12">
      <div className="bg-gray-800/60 rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
        <p className="text-white/50 text-lg">Work in Progress</p>
        <p className="text-white/70 mt-4">The journey to the future is happening now. Get ready!</p>

        {/* Image showing the product under development */}
        <div className="mt-8">
          <img
            src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Nexus One Work In Progress"
            className="w-full rounded-lg shadow-xl object-cover animate-float"
          />
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="mt-12">
      <a href="/subscribe" 
        className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition-all duration-300">
        Stay Updated 🚀
      </a>
    </div>
  </div>
</div>


      {/* HUD-style overlay */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-blue-400">
            <Battery className="animate-pulse" />
            <span>98%</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <Wifi />
            <span>Connected</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-blue-400">
            <Compass className="animate-spin-slow" />
            <span>N 48°</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <Gauge />
            <span>320 km/h</span>
          </div>
        </div>
      </div>

      {/* Specs Section }
      <div className="relative bg-black/90 py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                alt="Drone Specs"
                className="rounded-lg shadow-2xl animate-float"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-8">Technical Specifications</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Power className="text-blue-400" />
                  <div>
                    <h3 className="font-semibold">Advanced Propulsion</h3>
                    <p className="text-white/70">Quad-rotor electric propulsion system</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Gauge className="text-blue-400" />
                  <div>
                    <h3 className="font-semibold">Maximum Speed</h3>
                    <p className="text-white/70">Up to 320 km/h in optimal conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>/*}

      {/* Features Section 
      <div className="relative py-32 bg-gradient-to-b from-black/90 to-blue-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Revolutionary Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Advanced Safety", desc: "Multiple redundancy systems" },
              { icon: Zap, title: "Quick Charging", desc: "0-100% in 20 minutes" },
              { icon: Clock, title: "Long Range", desc: "Up to 4 hours flight time" },
              { icon: Cloud, title: "Weather Resistant", desc: "All-weather operation" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>/*}

      {/* Team Section */}
      <div id="team" className="relative py-32 bg-black/90">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Engineer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Mark Rodriguez",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Alex Kim",
                role: "Safety Director",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto ring-4 ring-blue-400/30 group-hover:ring-blue-400 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="text-white/50 hover:text-blue-400 transition-colors">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Careers Section */}
{/* Careers Section */}
<div id="career" className="py-32 bg-gray-900 text-center">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-white mb-8 animate-fade-in">
      Join Our Team
    </h2>
    <p className="text-lg text-white/70 leading-relaxed animate-slide-up max-w-3xl mx-auto">
      We are always looking for talented individuals to help us shape the future of personal air mobility.  
      Explore our job openings below and become a part of something groundbreaking!
    </p>

    {/* Job Listings - Side by Side */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800/60 rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
        <h3 className="text-2xl text-white font-semibold">Software Engineer</h3>
        <p className="text-white/70 mt-2">Location: Remote</p>
        <p className="text-white/70 mt-4">We are looking for a skilled software engineer with experience in building scalable web applications. If you have a passion for coding and problem-solving, we want you on our team!</p>
        <a href="mailto:careers@yourcompany.com?subject=Software Engineer Application" className="text-blue-500 mt-6 inline-block">Apply Now</a>
      </div>

      <div className="bg-gray-800/60 rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
        <h3 className="text-2xl text-white font-semibold">Marketing Specialist</h3>
        <p className="text-white/70 mt-2">Location: San Francisco, CA</p>
        <p className="text-white/70 mt-4">Join our marketing team to help us grow our brand and spread the word about our revolutionary products. Ideal candidates should have experience in digital marketing and a passion for new technology.</p>
        <a href="mailto:careers@yourcompany.com?subject=Marketing Specialist Application" className="text-blue-500  mt-6 inline-block">Apply Now</a>
      </div>

      {/* You can add more job listings here */}
    </div>

    {/* Call to Action for Careers */}
    <div className="mt-12">
      <a href="/careers" 
        className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition-all duration-300">
        View All Open Positions
      </a>
    </div>
  </div>
</div>

      {/* Pricing Section
      <div className="relative py-32 bg-gradient-to-b from-black/90 to-blue-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Standard",
                price: "149,999",
                features: ["Basic flight assistance", "2-year warranty", "Standard safety features"]
              },
              {
                name: "Professional",
                price: "199,999",
                features: ["Advanced autopilot", "5-year warranty", "Premium safety package", "Priority support"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Custom configurations", "Lifetime warranty", "24/7 dedicated support", "Training program"]
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl ${
                  index === 1 
                    ? "bg-gradient-to-b from-blue-600 to-blue-800 transform scale-105" 
                    : "bg-white/5 hover:bg-white/10"
                } transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">
                    {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && <span className="text-white/70">/unit</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 px-6 rounded-full ${
                    index === 1
                      ? "bg-white text-blue-900 hover:bg-white/90"
                      : "bg-blue-600 hover:bg-blue-700"
                  } transition-colors duration-300`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>/*}

      {/* Contact Section */}
      <div id="contact" className="relative py-32 bg-black/90">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-white/70">contact@nexusone.tech</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Phone className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-white/70">+1 (888) NEXUS-ONE</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-white/70">Silicon Valley, CA</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/95 border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">IRAWH</h3>
              <p className="text-white/70">Revolutionizing personal aviation with cutting-edge technology and unparalleled safety.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#product" className="hover:text-blue-400 transition-colors">Product</a></li>
                <li><a href="#career" className="hover:text-blue-400 transition-colors">Career</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Safety Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Twitter, Github, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50">
            <p>© 2025 NEXUS ONE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}

export default App;