'use client';

import React, { useRef, useEffect, useState } from 'react';
import { 
  Globe, 
  Building, 
  School, 
  Brain, 
  FileText, 
  Users, 
  TrendingUp,
  Smartphone,
  Languages,
  Target,
  BarChart3,
  Check,
  User,
  Settings,
  BookOpen,
  Sparkles,
  Heart,
  Zap,
  Shield,
  ArrowDown,
  Eye,
  Gauge,
  Activity,
  Puzzle
} from 'lucide-react';

const MasiScrollStory = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const AnimatedSection = ({ children, className = "", id }) => {
    return (
      <div
        id={id}
        className={`animate-on-scroll transition-all duration-1000 transform ${
          isVisible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } ${className}`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-slate-100">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .animate-pulse-dot {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .progress-bar {
          transition: width 1.5s ease-out;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.2s;
        }
        
        .hover-rotate:hover {
          transform: rotate(5deg) scale(1.1);
          transition: transform 0.2s;
        }
        
        .hover-slide:hover {
          transform: translateX(10px);
          transition: transform 0.2s;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse-dot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 hover-scale">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              MASi
            </h1>
            <Smartphone className="w-12 h-12 md:w-16 md:h-16 text-purple-600" />
          </div>
          
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto">
            AI-powered comprehensive K-12 education with built-in IEP screening and support
          </p>
          
          <div className="text-slate-500 animate-bounce">
            <ArrowDown size={32} className="mx-auto" />
            <p className="text-sm mt-2">Scroll to explore the journey</p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatedSection id="problem" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              The Global Education Crisis
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Millions of children with learning differences go unidentified and unsupported
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "800M+", label: "Children excluded from education", icon: Heart, color: "from-red-400 to-red-600" },
              { number: "60%", label: "Lack access in their language", icon: Languages, color: "from-blue-400 to-blue-600" },
              { number: "84M", label: "More by 2030", icon: TrendingUp, color: "from-purple-400 to-purple-600" }
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</h3>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Standards Integration */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <AnimatedSection id="standards" className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Integrating All Standards
          </h2>
          
          <div className="relative">
            <div className="flex justify-between mb-20">
              {[
                { icon: Globe, label: "Local\nStandards", delay: 0 },
                { icon: Building, label: "State\nStandards", delay: 0.2 },
                { icon: School, label: "School\nStandards", delay: 0.4 }
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg hover-rotate">
                    <item.icon className="text-purple-600" size={48} />
                  </div>
                  <p className="text-sm md:text-base font-semibold whitespace-pre-line">{item.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-semibold mb-4 text-center">Assessment Results → IEP Recommendations</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="border-l-4 border-orange-400 pl-3">
                  <p className="font-medium">Cognitive: Below Average</p>
                  <p className="text-gray-600 text-xs">→ Extended processing time</p>
                </div>
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-medium">Language: Strong</p>
                  <p className="text-gray-600 text-xs">→ Verbal instruction preferred</p>
                </div>
                <div className="border-l-4 border-red-400 pl-3">
                  <p className="font-medium">Attention: Significant Need</p>
                  <p className="text-gray-600 text-xs">→ Break tasks into segments</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-3">
                  <p className="font-medium">Memory: Moderate</p>
                  <p className="text-gray-600 text-xs">→ Visual aids recommended</p>
                </div>
              </div>
            </div>

            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl mt-8 transform transition-transform hover:scale-110">
              <BookOpen className="text-white" size={64} />
            </div>
            
            <p className="text-center mt-8 text-lg text-slate-600">
              Unified curriculum tailored to each student
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* AI Brain Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-purple-50 to-blue-50">
        <AnimatedSection id="ai-brain" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            AI Screens for Learning Differences
          </h2>
          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
            Comprehensive IEP assessments to identify each student's unique needs
          </p>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 border-4 border-dashed border-purple-300 rounded-full animate-spin-slow" />
            </div>
            
            <div className="relative z-10">
              <Brain className="w-32 h-32 md:w-48 md:h-48 text-purple-600 mx-auto mb-8" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { name: 'Cognitive Abilities', icon: Brain },
              { name: 'Learning Patterns', icon: Puzzle },
              { name: 'Language Processing', icon: Languages },
              { name: 'Behavioral Analysis', icon: Activity },
              { name: 'Memory Function', icon: BookOpen },
              { name: 'Processing Speed', icon: Gauge },
              { name: 'Executive Function', icon: Target },
              { name: 'Sensory Integration', icon: Eye }
            ].map((assessment, i) => (
              <div
                key={assessment.name}
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <assessment.icon className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <p className="font-semibold text-sm">{assessment.name}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-slate-600 max-w-2xl mx-auto">
            Each assessment adapts in real-time to identify specific learning needs and create targeted intervention strategies
          </p>
        </AnimatedSection>
      </section>

      {/* Assessment Flow */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatedSection id="assessment" className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Diagnostic Assessments for IEP Eligibility
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  { icon: Zap, text: "Real-time cognitive assessment" },
                  { icon: Target, text: "Screens for dyslexia & dyscalculia" },
                  { icon: Shield, text: "Identifies ADHD indicators" },
                  { icon: Heart, text: "Detects anxiety & emotional needs" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white rounded-lg shadow-md p-4 hover-slide"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <item.icon className="text-purple-600" size={24} />
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-64 h-64 mx-auto">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="20"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    className="progress-bar"
                    strokeDasharray={`${2 * Math.PI * 80 * 0.75} ${2 * Math.PI * 80}`}
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "center"
                    }}
                  />
                  <defs>
                    <linearGradient id="progressGradient">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-800">75%</p>
                    <p className="text-sm text-slate-600">Assessment Complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* IEP Creation */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-orange-50 to-red-50">
        <AnimatedSection id="iep-creation" className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            From Screening to IEP Creation
          </h2>
          
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Multi-Domain Screening", desc: "8 comprehensive assessments", icon: Brain },
                { step: "2", title: "AI Analysis & IEP", desc: "Identifies needs & creates plan", icon: FileText },
                { step: "3", title: "Progress Monitoring", desc: "Adaptive support & tracking", icon: Settings }
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <item.icon className="w-12 h-12 text-orange-500 mb-4 mt-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                  
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Dashboard Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatedSection id="dashboard" className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Educators See Everything
          </h2>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Teacher Dashboard</h3>
              <Users className="text-indigo-600" size={24} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 hover-scale">
                <BarChart3 className="text-indigo-600 mb-3" size={32} />
                <h4 className="font-semibold mb-2">Real-time Analytics</h4>
                <p className="text-sm text-slate-600">Track student progress instantly</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 hover-scale">
                <Target className="text-purple-600 mb-3" size={32} />
                <h4 className="font-semibold mb-2">Intervention Alerts</h4>
                <p className="text-sm text-slate-600">Get notified when students need help</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 hover-scale">
                <TrendingUp className="text-green-600 mb-3" size={32} />
                <h4 className="font-semibold mb-2">Progress Reports</h4>
                <p className="text-sm text-slate-600">Detailed insights for parents</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 hover-scale">
                <FileText className="text-orange-600 mb-3" size={32} />
                <h4 className="font-semibold mb-2">IEP Tracking</h4>
                <p className="text-sm text-slate-600">Monitor all IEP goals and progress</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Progress Over Time */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <AnimatedSection id="progress" className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            IEP Students Show Remarkable Progress
          </h2>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">6-Month IEP Progress Report</h3>
              <p className="text-slate-600">Maria, Grade 5 - Student with Learning Differences</p>
            </div>
            
            <div className="space-y-6">
              {[
                { skill: "Reading Comprehension (Dyslexia Support)", start: 45, end: 82, color: "from-blue-400 to-blue-600" },
                { skill: "Math Problem Solving (Dyscalculia)", start: 60, end: 88, color: "from-purple-400 to-purple-600" },
                { skill: "Focus & Attention (ADHD)", start: 35, end: 75, color: "from-green-400 to-green-600" },
                { skill: "Social-Emotional Skills", start: 55, end: 90, color: "from-orange-400 to-orange-600" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-sm text-slate-600">
                      {item.start}% → {item.end}%
                    </span>
                  </div>
                  <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`absolute h-full bg-gradient-to-r ${item.color} rounded-full progress-bar`}
                      style={{
                        width: isVisible['progress'] ? `${item.end}%` : `${item.start}%`,
                        transitionDelay: `${i * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-slate-600 mt-8">
              MASi's IEP assessment technology is funded by the National Science Foundation
            </p>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <TrendingUp size={20} />
                <span className="font-semibold">Average improvement: 37%</span>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                With targeted IEP interventions and adaptive learning support
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatedSection id="cta" className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Education for Every Child
            </h2>
            <p className="text-xl mb-8 opacity-90">
              In every language. With built-in IEP support. On any device.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold cursor-pointer hover-scale transition-all">
                Start IEP Pilot Program
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold cursor-pointer hover-scale transition-all">
                Learn More
              </button>
            </div>
            
            <div className="flex justify-center gap-8 mt-12">
              {[Languages, Smartphone, Globe, Brain].map((Icon, i) => (
                <div
                  key={i}
                  className="animate-float"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <Icon className="w-8 h-8 opacity-70" />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default MasiScrollStory;