import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
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
  Puzzle,
  Trophy,
  Flame,
  Calendar,
  Star
} from 'lucide-react';

const MasiScrollStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const AnimatedSection = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const ParallaxLayer = ({ children, speed = 1 }) => {
    const y = useTransform(smoothProgress, [0, 1], [0, speed * 100]);
    
    return (
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <ParallaxLayer speed={-0.5}>
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </ParallaxLayer>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              MASi
            </h1>
            <Smartphone className="w-12 h-12 md:w-16 md:h-16 text-purple-600" />
          </motion.div>
          
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto italic">
            — AI-powered K-12 School, in the hand of every child, in every language, everywhere —
          </p>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-500"
          >
            <ArrowDown size={32} className="mx-auto" />
            <p className="text-sm mt-2">Scroll to explore the journey</p>
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatedSection className="max-w-4xl mx-auto">
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
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.2, type: "spring" }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</h3>
                <p className="text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Standards Integration */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <AnimatedSection className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Integrating All Standards
          </h2>
          
          <div className="relative">
            <motion.div className="flex justify-between mb-12 md:mb-20 relative">
              {[
                { icon: Building, label: "State\nStandards", delay: 0 },
                { icon: Globe, label: "Local\nStandards", delay: 0.6 },
                { icon: School, label: "School\nStandards", delay: 1.2 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: item.delay }}
                  className="text-center z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg"
                  >
                    <item.icon className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" />
                  </motion.div>
                  <p className="text-sm md:text-base font-semibold whitespace-pre-line">{item.label}</p>
                </motion.div>
              ))}
              
              {/* Animated arrows showing flow */}
              <div className="flex absolute top-10 sm:top-12 md:top-16 left-0 w-full pointer-events-none justify-around items-center">
                {/* First arrow: State feeds Local */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ originX: 0 }}
                  className="absolute left-[17%] sm:left-[20%] md:left-[25%] w-[30%] sm:w-[25%] md:w-[20%] flex flex-col items-center"
                >
                  <p className="text-xs text-purple-600 mb-1 font-medium hidden md:block">feeds</p>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 relative rounded">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-0 h-0 border-l-[8px] md:border-l-[10px] border-l-purple-600 border-y-[4px] md:border-y-[5px] border-y-transparent"></div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Second arrow: Local feeds School */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  style={{ originX: 0 }}
                  className="absolute left-[53%] sm:left-[55%] w-[30%] sm:w-[25%] md:w-[20%] flex flex-col items-center"
                >
                  <p className="text-xs text-purple-600 mb-1 font-medium hidden md:block">feeds</p>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 relative rounded">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-0 h-0 border-l-[8px] md:border-l-[10px] border-l-purple-600 border-y-[4px] md:border-y-[5px] border-y-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>



            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-8"
            >
              Unified Curriculum Tailored to Each Student
            </motion.h2>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 2.0, type: "spring" }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-dashed border-purple-300 rounded-full" />
              </motion.div>
              
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl relative z-10"
              >
                <Brain className="text-white" size={64} />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="mt-16"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
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
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* IEP Assessments Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-purple-50 to-blue-50">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12">
            Comprehensive IEP Assessments
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <motion.div
                key={assessment.name}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
              >
                <assessment.icon className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <p className="font-semibold text-sm">{assessment.name}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8 text-slate-600 max-w-2xl mx-auto"
          >
            Each assessment adapts in real-time to identify specific learning needs and create targeted intervention strategies
          </motion.p>
        </AnimatedSection>
      </section>

      {/* Assessment Flow */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Diagnostic Assessments for IEP Eligibility
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                {[
                  { icon: Zap, text: "Real-time cognitive assessment" },
                  { icon: Target, text: "Screens for dyslexia & dyscalculia" },
                  { icon: Shield, text: "Identifies ADHD indicators" },
                  { icon: Heart, text: "Detects anxiety & emotional needs" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 bg-white rounded-lg shadow-md p-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <item.icon className="text-purple-600" size={24} />
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="w-64 h-64 mx-auto"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="20"
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.75 }}
                    transition={{ duration: 2, ease: "easeOut" }}
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
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-3xl font-bold text-slate-800"
                    >
                      75%
                    </motion.p>
                    <p className="text-sm text-slate-600">Assessment Complete</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* IEP Creation */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-orange-50 to-red-50">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            From Screening to IEP Creation
          </h2>
          
          <div className="relative">
            <motion.div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Multi-Domain Screening", desc: "8 comprehensive assessments", icon: Brain },
                { step: "2", title: "AI Analysis & IEP", desc: "Identifies needs & creates plan", icon: FileText },
                { step: "3", title: "Progress Monitoring", desc: "Adaptive support & tracking", icon: Settings }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
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
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-4 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Dashboard Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Educators/Families See Everything
          </h2>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Admin Dashboard</h3>
              <Users className="text-indigo-600" size={24} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6"
              >
                <BarChart3 className="text-indigo-600 mb-3" size={32} />
                <h4 className="font-semibold mb-2">Real-time Analytics</h4>
                <p className="text-sm text-slate-600">Track student progress instantly</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6"
              >
                <Target className="text-purple-600 mb-3" size={32} />
                <h4 className="font-semibold mb-2">Intervention Alerts</h4>
                <p className="text-sm text-slate-600">Get notified when students need help</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6"
              >
                <TrendingUp className="text-green-600 mb-3" size={32} />
                <h4 className="font-semibold mb-2">Progress Reports</h4>
                <p className="text-sm text-slate-600">Detailed insights for parents</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6"
              >
                <FileText className="text-orange-600 mb-3" size={32} />
                <h4 className="font-semibold mb-2">IEP Tracking</h4>
                <p className="text-sm text-slate-600">Monitor all IEP goals and progress</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Student Dashboard */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-8 mt-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Student Dashboard</h3>
              <Sparkles className="text-purple-600" size={24} />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Learning Streak */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 text-center"
              >
                <Flame className="text-orange-500 mx-auto mb-2" size={32} />
                <h4 className="font-bold text-2xl">12</h4>
                <p className="text-sm text-slate-600">Day Streak!</p>
              </motion.div>
              
              {/* Points */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-4 text-center"
              >
                <Star className="text-yellow-500 mx-auto mb-2" size={32} />
                <h4 className="font-bold text-2xl">2,450</h4>
                <p className="text-sm text-slate-600">Points Earned</p>
              </motion.div>
              
              {/* Skills Mastered */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center"
              >
                <Trophy className="text-green-500 mx-auto mb-2" size={32} />
                <h4 className="font-bold text-2xl">28</h4>
                <p className="text-sm text-slate-600">Skills Mastered</p>
              </motion.div>
              
              {/* Today's Goal */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center"
              >
                <Target className="text-blue-500 mx-auto mb-2" size={32} />
                <h4 className="font-bold text-2xl">3/5</h4>
                <p className="text-sm text-slate-600">Tasks Complete</p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Today's Tasks */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-purple-600 mr-2" size={20} />
                  <h4 className="font-semibold">Today's Tasks</h4>
                </div>
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center">
                      <Check className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Math: Fractions Practice</span>
                    </div>
                    <span className="text-xs text-green-600">Complete!</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center">
                      <Check className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Reading: Chapter 5</span>
                    </div>
                    <span className="text-xs text-green-600">Complete!</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center">
                      <Check className="text-green-500 mr-2" size={16} />
                      <span className="text-sm">Typing Practice: 10 min</span>
                    </div>
                    <span className="text-xs text-green-600">Complete!</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border-2 border-purple-200"
                  >
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded mr-2" />
                      <span className="text-sm font-medium">Science Quiz</span>
                    </div>
                    <span className="text-xs text-purple-600">In Progress</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm opacity-60"
                  >
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-gray-300 rounded mr-2" />
                      <span className="text-sm">Art Project</span>
                    </div>
                    <span className="text-xs text-gray-500">Up Next</span>
                  </motion.div>
                </div>
              </div>
              
              {/* IEP Goals Progress */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Target className="text-purple-600 mr-2" size={20} />
                  <h4 className="font-semibold">My IEP Goals</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Reading Fluency</span>
                      <span className="text-xs text-purple-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Read 90 words/min → Currently 85</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Focus Time</span>
                      <span className="text-xs text-blue-600">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">20 min tasks → Currently 14 min</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Math Problem Solving</span>
                      <span className="text-xs text-green-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Multi-step problems independently</p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-4 bg-purple-100 rounded-lg p-3 text-center cursor-pointer"
                >
                  <p className="text-sm font-medium text-purple-800">🎉 You're ahead of schedule!</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Progress Over Time */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <AnimatedSection className="max-w-4xl mx-auto">
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
                    <motion.div
                      className={`absolute h-full bg-gradient-to-r ${item.color} rounded-full`}
                      initial={{ width: `${item.start}%` }}
                      whileInView={{ width: `${item.end}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-slate-600 mt-8">
              MASi's IEP assessment technology is funded by the National Science Foundation
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <TrendingUp size={20} />
                <span className="font-semibold">Average improvement: 37%</span>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                With targeted IEP interventions and adaptive learning support
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Education for Every Child
            </h2>
            <p className="text-xl mb-8 opacity-90">
              In every language. With built-in IEP support. On any device.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold cursor-pointer"
              >
                Start IEP Pilot Program
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold cursor-pointer"
              >
                Learn More
              </motion.div>
            </div>
            
            <div className="flex justify-center gap-8 mt-12">
              {[Languages, Smartphone, Globe, Brain].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                >
                  <Icon className="w-8 h-8 opacity-70" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default MasiScrollStory;