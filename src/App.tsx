import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Smartphone, 
  Users, 
  Zap,
  Eye,
  MessageSquare,
  Cloud,
  Brain,
  Share2,
  Navigation,
  GraduationCap,
  ShoppingBag,
  MapPin,
  Gamepad2,
  Calendar,
  Github,
  MessageCircle,
  Mail,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'features', 'how-it-works', 'tech-stack', 'use-cases', 'roadmap', 'get-involved'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'get-involved', label: 'Get Involved' }
  ];

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Plane Detection & Anchors",
      description: "Advanced computer vision algorithms detect surfaces and create stable anchor points for persistent AR content."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Conversational AI Agents",
      description: "AI-powered agents with speech-to-text and text-to-speech capabilities for natural interactions."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Multi-Platform Support",
      description: "Works across Android ARCore, WebXR, 8thWall, with Apple ARKit support coming soon."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Geospatial Anchoring",
      description: "Leverage Google's Geospatial API to anchor AR content to real-world coordinates."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Dashboard",
      description: "Manage AR scenes, monitor analytics, and control content through our comprehensive web dashboard."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "LLM Integration",
      description: "Connect with large language models for intelligent, context-aware conversations."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Collaboration Tools",
      description: "Share AR experiences, collaborate on content creation, and manage team access."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Track engagement, user interactions, and performance metrics in real-time."
    }
  ];

  const techStack = [
    { name: "Godot", category: "AR Engine", color: "bg-blue-500" },
    { name: "WebXR API", category: "Web AR", color: "bg-purple-500" },
    { name: "8thWall SDK", category: "AR Framework", color: "bg-green-500" },
    { name: "Google ARCore", category: "Mobile AR", color: "bg-yellow-500" },
    { name: "Node.js", category: "Backend", color: "bg-emerald-500" },
    { name: "PostgreSQL", category: "Database", color: "bg-indigo-500" },
    { name: "Redis", category: "Cache", color: "bg-red-500" },
    { name: "Firebase", category: "Auth & Storage", color: "bg-orange-500" },
    { name: "Python", category: "ML Services", color: "bg-cyan-500" },
    { name: "TensorFlow Lite", category: "On-device AI", color: "bg-pink-500" },
    { name: "Docker", category: "Containerization", color: "bg-blue-600" },
    { name: "Kubernetes", category: "Orchestration", color: "bg-purple-600" }
  ];

  const useCases = [
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Campus Navigation",
      description: "Interactive AR guides help students navigate complex university campuses with real-time directions."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Museum AR Guides",
      description: "Bring exhibits to life with informative AR hosts that provide rich contextual information."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Retail Assistants",
      description: "Virtual shopping assistants help customers find products and provide personalized recommendations."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Tourism & Heritage",
      description: "Create immersive historical trails and tourist experiences with location-based AR content."
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "STEM Education",
      description: "Engaging educational games that align with UN SDG goals for quality education."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Smart Cities",
      description: "Support sustainable urban development with AR-enabled public information systems."
    }
  ];

  const roadmapItems = [
    {
      quarter: "Q1 2025",
      items: ["iOS ARKit support", "Enhanced plane detection", "Performance optimizations"]
    },
    {
      quarter: "Q2 2025",
      items: ["Persistent shared anchors", "Advanced analytics dashboard", "Multi-user collaboration"]
    },
    {
      quarter: "Q3 2025",
      items: ["Community marketplace", "Azure Spatial Anchors", "Advanced AI integrations"]
    },
    {
      quarter: "Q4 2025",
      items: ["Niantic Lightship support", "Enterprise features", "Global scaling infrastructure"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AR-HOST
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
                  Dashboard Preview
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-lg border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-pink-500 rounded-full opacity-30 animate-bounce"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Bring AI agents
              </span>
              <br />
              <span className="text-white">into the real world</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              AR-HOST is an experimental platform for creators, educators, and businesses to deploy 
              persistent AR hosts that can talk, guide, teach, or entertain in any physical location.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                <span>Request Early Access</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                <div 
                  className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                ></div>
                <span>Watch Demo</span>
                {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex justify-center space-x-8 text-sm text-gray-400 pt-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Beta Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Multi-Platform</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                What is AR-HOST?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AR-HOST enables persistent AR agents that exist in real-world spaces through advanced 
              plane detection, spatial anchors, and geospatial positioning. Our platform integrates 
              cutting-edge AR frameworks to create immersive experiences that blend digital intelligence 
              with physical environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Persistent Agents</h3>
              <p className="text-gray-300 leading-relaxed">
                Deploy AI agents that remain anchored to specific locations, providing consistent 
                experiences across multiple user sessions and devices.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Geospatial Accuracy</h3>
              <p className="text-gray-300 leading-relaxed">
                Leverage Google's Geospatial API and advanced SLAM technology for precise 
                real-world positioning and cross-device consistency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI Integration</h3>
              <p className="text-gray-300 leading-relaxed">
                Natural language processing, speech recognition, and large language model 
                integration for intelligent, context-aware interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful capabilities that enable immersive AR experiences with intelligent agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to deploy and manage your AR agents
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              {[
                { step: "01", title: "Scan", description: "Use your device to scan the environment", icon: <Eye className="w-8 h-8" /> },
                { step: "02", title: "Detect Planes", description: "AI identifies surfaces and anchor points", icon: <Navigation className="w-8 h-8" /> },
                { step: "03", title: "Drop Agent", description: "Place your AI agent in the physical space", icon: <Users className="w-8 h-8" /> },
                { step: "04", title: "Interact", description: "Users engage with persistent AR experiences", icon: <MessageSquare className="w-8 h-8" /> },
                { step: "05", title: "Manage", description: "Monitor and control through dashboard", icon: <Cloud className="w-8 h-8" /> }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 hover:shadow-xl transition-all transform hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="text-sm font-bold text-blue-400 mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm max-w-32">{item.description}</p>
                  
                  {index < 4 && (
                    <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies for performance, scalability, and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-500/50 transition-all transform hover:scale-105 hover:shadow-lg group"
              >
                <div className={`w-3 h-3 ${tech.color} rounded-full mb-3 group-hover:animate-pulse`}></div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform industries with persistent AR experiences and intelligent agents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all transform hover:scale-105 group"
              >
                <div className="text-orange-400 mb-4 group-hover:text-pink-400 transition-colors">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                What's Next
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our development roadmap for the next year
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapItems.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all transform hover:scale-105"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5 text-pink-400" />
                  <span className="font-semibold text-pink-400">{item.quarter}</span>
                </div>
                <ul className="space-y-2">
                  {item.items.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-24 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get Involved
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our community of creators, developers, and innovators building the future of AR
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all">
              <Mail className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-4 text-white">Early Access</h3>
              <p className="text-gray-400 text-sm mb-4">Be among the first to experience AR-HOST</p>
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Request Access
              </button>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all">
              <Github className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-4 text-white">Open Source</h3>
              <p className="text-gray-400 text-sm mb-4">Contribute to our open-source components</p>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                View GitHub
              </button>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all">
              <MessageCircle className="w-8 h-8 text-green-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
              <p className="text-gray-400 text-sm mb-4">Join discussions with fellow developers</p>
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Join Discord
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to build the future?</h3>
            <p className="text-blue-100 mb-6">
              Get early access to AR-HOST and start creating immersive AR experiences today
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AR-HOST
              </span>
            </div>
            
            <div className="text-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 AR-HOST. Building the future of AR experiences.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Supporting UN SDG goals: Quality Education, Innovation, Sustainable Cities, Partnerships
              </p>
            </div>
            
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">Privacy</button>
              <button className="text-gray-400 hover:text-white transition-colors">Terms</button>
              <button className="text-gray-400 hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;