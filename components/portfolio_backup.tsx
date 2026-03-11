'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  Download,
  Smartphone,
  Cpu,
  Database,
  ShieldCheck,
  BarChart2,
  Radar,
  Terminal,
  Award,
  AlertTriangle,
  Zap,
  Target,
  Lock,
  Code,
  Menu,
  X
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const textGlow = 'text-accent glow';

// Animated background component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.1) 25%, rgba(0, 255, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.1) 75%, rgba(0, 255, 255, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Animated Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            x: Math.cos((i / 12) * Math.PI * 2) * 200,
            y: Math.sin((i / 12) * Math.PI * 2) * 200,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-2px',
            marginTop: '-2px',
          }}
        />
      ))}

      {/* Radial Glows */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400 rounded-full"
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'blur(80px)' }}
      />
      <motion.div
        className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-600 rounded-full"
        animate={{ opacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ filter: 'blur(80px)' }}
      />
    </div>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // any client side initializations if needed
  }, []);

  const navItems = [
    { name: 'Cover', href: '#cover' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <AnimatedBackground />
      
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 w-full z-40 bg-gradient-to-b from-gray-950/95 to-gray-950/85 backdrop-blur-md border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <a href="#cover" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 glow">
                ALI EISSA
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md transition duration-300 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/30"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-cyan-400 hover:text-cyan-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-cyan-400/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md transition duration-300 hover:bg-cyan-400/10"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      <main className="overflow-x-hidden relative z-10 pt-16">
        {/* 1. COVER SECTION */}
        <section
          id="cover"
          className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20 relative"
        >
          <div className="w-full max-w-6xl">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="flex flex-col text-center md:text-left">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold glow mb-6 leading-tight">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-cyan-400"
                    >
                      ALI EISSA
                    </motion.h1>
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      Elite Penetration Tester specializing in web and network security assessments
                    </motion.p>
                  </div>
                  <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex gap-4 flex-wrap"
                    >
                      <a
                        href="#projects"
                        className="px-8 py-3 bg-accent text-black rounded-lg font-semibold hover:scale-105 transform transition duration-300 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50"
                      >
                        Explore Projects
                      </a>
                      <a
                        href="#contact"
                        className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-black transition duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/30"
                      >
                        Get in Touch
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Profile Image with Premium Cyber Effects */}
              <div className="flex justify-center md:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                    {/* Outer Premium Pulsing Glow Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: '0 0 60px rgba(0, 255, 255, 0.5), 0 0 120px rgba(0, 255, 255, 0.3)'
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 50px rgba(0, 255, 255, 0.4), 0 0 100px rgba(0, 255, 255, 0.2)',
                          '0 0 80px rgba(0, 255, 255, 0.6), 0 0 150px rgba(0, 255, 255, 0.3)',
                          '0 0 50px rgba(0, 255, 255, 0.4), 0 0 100px rgba(0, 255, 255, 0.2)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Rotating Premium Border Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 p-1 opacity-90">
                      <motion.div
                        className="w-full h-full rounded-full bg-gray-900"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                      />
                    </div>

                    {/* Floating Squares - Enhanced Decorative Elements */}
                    {[
                      { pos: '-top-4 -left-4', x: [0, 10, 0], y: [0, -10, 0], delay: 0 },
                      { pos: '-top-4 -right-4', x: [0, -10, 0], y: [0, -10, 0], delay: 0.5 },
                      { pos: '-bottom-4 -left-4', x: [0, 10, 0], y: [0, 10, 0], delay: 1 },
                      { pos: '-bottom-4 -right-4', x: [0, -10, 0], y: [0, 10, 0], delay: 1.5 },
                      { pos: 'top-1/2 left-0 -translate-y-1/2', x: [0, -15, 0], y: [0, 0, 0], delay: 0.3 },
                      { pos: 'top-1/2 right-0 -translate-y-1/2', x: [0, 15, 0], y: [0, 0, 0], delay: 0.8 }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-sm ${item.pos} shadow-lg shadow-cyan-400/50`}
                        animate={{
                          x: item.x,
                          y: item.y,
                          opacity: [0.5, 0.9, 0.5]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: item.delay,
                          ease: 'easeInOut'
                        }}
                      />
                    ))}

                    {/* Inner Container with Premium Border */}
                    <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-cyan-400/70 shadow-inner shadow-cyan-400/20">
                      {/* Profile Image */}
                      <Image
                        src="/ali.jpg"
                        alt="Ali Eissa"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                        priority
                      />

                      {/* Premium Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-cyan-400/10 rounded-full" />
                    </div>

                    {/* Premium Animated Corner Accents */}
                    {[
                      { pos: 'top-3 left-3', delay: 0 },
                      { pos: 'top-3 right-3', delay: 0.5 },
                      { pos: 'bottom-3 left-3', delay: 1 },
                      { pos: 'bottom-3 right-3', delay: 1.5 }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2.5 h-2.5 border-2 border-cyan-400 ${item.pos}`}
                        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.3, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
                      />
                    ))}

                    {/* Enhanced Shadow Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: '0 0 80px rgba(0, 255, 255, 0.3), 0 0 120px rgba(0, 255, 255, 0.15)'
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 70px rgba(0, 255, 255, 0.2), 0 0 100px rgba(0, 255, 255, 0.1)',
                          '0 0 100px rgba(0, 255, 255, 0.35), 0 0 150px rgba(0, 255, 255, 0.18)',
                          '0 0 70px rgba(0, 255, 255, 0.2), 0 0 100px rgba(0, 255, 255, 0.1)'
                        ]
                      }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section
          id="about"
          className="py-20 px-4 max-w-3xl mx-auto border-y border-cyan-400/10"
        >
          <div className="text-3xl font-semibold mb-8 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-cyan-400 glow"
            >
              About Me
            </motion.h2>
          </div>
          <div className="text-lg leading-relaxed">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-gray-300 bg-gradient-to-r from-cyan-400/5 to-transparent rounded-lg p-6 border border-cyan-400/10"
            >
              I am a cybersecurity graduate with 4 years of learning and hands-on
              practice in cybersecurity. I chose this field because I have a real
              passion for understanding how attacks happen, how secure systems get
              tested, and how data can be exposed and protected. My main focus
              areas are web penetration testing and network security.
            </motion.p>
          </div>
        </section>

        {/* 3. EDUCATION SECTION */}
        <section
          id="education"
          className="py-20 px-4 bg-gradient-to-b from-dark to-gray-800/50 border-y border-cyan-400/10"
        >
          <div className="text-3xl font-semibold mb-3 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-cyan-400 glow"
            >
              Education
            </motion.h2>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                Formal education and specialized cybersecurity certifications
              </p>
            </motion.div>
          </div>
          <motion.div
            className="max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {[
              {
                degree: 'Bachelor of Science in Cybersecurity',
                institution: 'Cybersecurity Graduate Program',
                period: '4 Years',
                detail: 'Comprehensive training in network security, application security, and security operations'
              }
            ].map((edu, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/15 hover:to-purple-600/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20 mb-4">
                <motion.div whileHover={{ y: -2 }}>
                  <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                  <p className="text-cyan-400 font-medium text-sm mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-300 text-sm">{edu.detail}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* 4. SKILLS SECTION */}
        <section
          id="skills"
          className="py-20 px-4 border-y border-cyan-400/10"
        >
          <div className="text-3xl font-semibold mb-3 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-cyan-400 glow"
            >
              Skills &amp; Toolkit
            </motion.h2>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                Core technical skills across penetration testing, vulnerability assessment, and security automation
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              'Python', 'JavaScript', 'Burp Suite', 'Nmap',
              'Wireshark', 'Metasploit', 'OWASP ZAP', 'Nikto',
              'Gobuster', 'SQLMap', 'Linux', 'Kali Linux',
              'Windows', 'Git', 'Bash', 'SQL'
            ].map((skill) => (
              <motion.div
                key={skill}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="px-3 py-2 bg-gradient-to-r from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/20 hover:to-purple-600/10 rounded-full text-center text-xs font-medium transition border border-cyan-400/20 hover:border-cyan-400/50 cursor-pointer hover:scale-105">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vulnerability Expertise Sub-section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-center text-cyan-400">Vulnerability Expertise</h3>
            <p className="text-center text-gray-400 text-sm mb-8">Hands-on practice across OWASP Top 10 categories</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {[
                { name: 'SQL Injection', labs: '15 labs', difficulty: 'Advanced' },
                { name: 'XSS', labs: '13 labs', difficulty: 'Advanced' },
                { name: 'Authentication', labs: '10 labs', difficulty: 'Advanced' },
                { name: 'Business Logic', labs: '5 labs', difficulty: 'Intermediate' },
                { name: 'CSRF', labs: '7 labs', difficulty: 'Intermediate' },
                { name: 'SSRF', labs: '6 labs', difficulty: 'Advanced' },
                { name: 'CORS', labs: '5 labs', difficulty: 'Intermediate' },
                { name: 'Access Control', labs: 'Active', difficulty: 'Advanced' }
              ].map((vuln) => (
                <motion.div
                  key={vuln.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                >
                  <div className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/15 hover:to-purple-600/10 rounded-lg p-4 border border-cyan-400/30 hover:border-cyan-400/70 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20">
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <p className="font-semibold text-sm text-white">{vuln.name}</p>
                      <p className="text-xs text-cyan-400 mt-2 font-medium">{vuln.labs}</p>
                      <p className="text-xs text-gray-500 mt-1">{vuln.difficulty}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. EXPERIENCE SECTION */}
        <section
          id="experience"
          className="py-20 px-4 bg-gradient-to-b from-gray-800/50 to-dark border-y border-cyan-400/10"
        >
          <div className="text-3xl font-semibold mb-3 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-cyan-400 glow"
            >
              Experience & Platform Achievements
            </motion.h2>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                Real-world penetration testing experience across multiple platforms and learning environments
              </p>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-8 text-center text-cyan-300">Professional Timeline</h3>
            {[
              { date: 'Jan 2022', event: 'CCNA Certification', type: 'Networking Foundation' },
              { date: 'Nov 2023', event: 'Cisco CyberOps Certified', type: 'Security Operations' },
              { date: 'May 2024', event: 'eJPT Certification', type: 'Pentesting Foundation' },
              { date: '2024-Present', event: 'Active Penetration Testing', type: 'Lab & Bug Bounty Work' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-3.5 h-3.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/50"></div>
                    {i < 3 && <div className="w-0.5 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent my-2"></div>}
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-400 text-sm">{item.date}</p>
                    <p className="text-gray-200 text-sm font-medium">{item.event}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.type}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Platforms & Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {[
              {
                name: 'TryHackMe',
                stat: 'Top 5%',
                detail: '55 Rooms Completed',
                subDetail: 'Interactive security labs'
              },
              {
                name: 'PortSwigger Labs',
                stat: '61 Labs',
                detail: 'Web Security Master',
                subDetail: 'OWASP vulnerability practice'
              },
              {
                name: 'HackerOne',
                stat: '2 Reports',
                detail: 'Bug Bounty Hunter',
                subDetail: 'Vulnerability disclosure program'
              }
            ].map((platform) => (
              <motion.div key={platform.name} whileHover={{ y: -4 }}>
                <div className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/20 hover:to-purple-600/10 rounded-lg p-4 border border-cyan-400/30 hover:border-cyan-400/70 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20 h-full">
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <h4 className="font-semibold text-sm text-white">{platform.name}</h4>
                    <p className="text-lg font-bold text-cyan-400 mt-2">{platform.stat}</p>
                    <p className="text-xs text-gray-300 mt-1">{platform.detail}</p>
                    <p className="text-xs text-gray-500 mt-2">{platform.subDetail}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testing Methodology */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-8 text-center text-cyan-300">Testing Methodology</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
              {[
                { step: 'Reconnaissance', desc: 'Intelligence gathering with Amass & Subfinder' },
                { step: 'Enumeration', desc: 'Active scanning with Nmap & Gobuster' },
                { step: 'Validation', desc: 'Verification with Burp Suite & manual testing' },
                { step: 'Exploitation', desc: 'Exploitation with SQLmap & custom tools' },
                { step: 'Reporting', desc: 'Documentation with risk assessment' }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                >
                  <div className="bg-gradient-to-br from-cyan-400/10 to-blue-600/5 hover:from-cyan-400/20 hover:to-blue-600/10 rounded-lg p-4 border-l-4 border-cyan-400 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20">
                    <div className="flex items-center mb-2">
                      <span className="text-cyan-400 font-bold text-sm mr-2 bg-cyan-400/20 w-6 h-6 rounded flex items-center justify-center">{i + 1}</span>
                      <h3 className="font-semibold text-sm">{item.step}</h3>
                    </div>
                    <p className="text-xs text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SERVICES SECTION */}
        <section id="services" className="py-20 px-4 border-y border-cyan-400/10">
          <motion.h2
            className="text-3xl font-semibold mb-3 text-center text-cyan-400 glow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Services & Consulting
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              Professional penetration testing and vulnerability assessment services
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {[
              {
                service: 'Web Penetration Testing',
                description: 'Comprehensive assessment of web applications and APIs. Identifies vulnerabilities before attackers exploit them.',
                icon: Code
              },
              {
                service: 'Vulnerability Assessment',
                description: 'Systematic evaluation of systems to identify security weaknesses, prioritize risks, and recommend remediation.',
                icon: AlertTriangle
              },
              {
                service: 'Network Security Testing',
                description: 'Deep analysis of network infrastructure and security posture including reconnaissance and exploitation simulation.',
                icon: Zap
              }
            ].map((svc) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.service}
                  className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/20 hover:to-purple-600/10 rounded-lg p-4 border border-cyan-400/30 hover:border-cyan-400/70 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20"
                  whileHover={{ y: -4 }}
                >
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <div className="flex items-center mb-3">
                      <Icon className="w-5 h-5 text-cyan-400 mr-2" />
                      <h4 className="font-semibold text-sm text-white">{svc.service}</h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{svc.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* 7. PROJECTS SECTION */}
        <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-800/50 to-dark border-y border-cyan-400/10">
          <motion.h2
            className="text-3xl font-semibold mb-3 text-center text-cyan-400 glow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Featured Security Projects
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              Real-world projects demonstrating practical security skills and expertise
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ProjectCard
              title="PhantomMark Stego Suite"
              description="Advanced steganography tool with cryptographic image protection and attack simulations."
              tags={["Python", "Cryptography", "Image Processing"]}
              highlight="Custom steganography implementation"
            />
            <ProjectCard
              title="Secure Football Booking Platform"
              description="Full-stack application with security-first design. Implements protections against SQL Injection, CSRF, XSS, and OWASP vulnerabilities."
              tags={["Node.js", "Web Security", "OWASP"]}
              highlight="Secure authentication & validation"
            />
            <ProjectCard
              title="PortSwigger Labs Mastery"
              description="Completed 61 hands-on security labs covering SQL Injection, XSS, CSRF, SSRF, and advanced authentication flaws."
              tags={["Web Security", "Labs", "SQL Injection"]}
              highlight="61 labs across 7 categories"
            />
          </motion.div>
        </section>

        {/* 8. ACHIEVEMENTS SECTION */}
        <section id="achievements" className="py-20 px-4 border-y border-cyan-400/10">
          <motion.h2
            className="text-3xl font-semibold mb-3 text-center text-cyan-400 glow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Achievements & Certifications
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              Verified credentials and demonstrated competency across multiple platforms and disciplines
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {[
              { cert: 'eJPT', issuer: 'INE', year: 'May 2024', value: 'Junior Penetration Tester' },
              { cert: 'CCNA', issuer: 'Cisco', year: 'Jan 2022', value: 'Networking & Infrastructure' },
              { cert: 'CyberOps', issuer: 'Cisco', year: 'Nov 2023', value: 'Security Operations' }
            ].map((cert) => (
              <motion.div key={cert.cert} whileHover={{ y: -4 }}>
                <div className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/20 hover:to-purple-600/10 rounded-lg p-4 border border-cyan-400/30 hover:border-cyan-400/70 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20">
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <div className="flex items-start mb-3">
                      <Award className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm text-white">{cert.cert}</h4>
                        <p className="text-xs text-gray-400">{cert.issuer} Â· {cert.year}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-300">{cert.value}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Performance Metrics */}
          <h3 className="text-2xl font-semibold mb-6 text-center text-cyan-300">Performance Metrics</h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {[
              { label: 'H1 Reports', value: '2', detail: 'Low + Medium' },
              { label: 'THM Rank', value: 'Top 5%', detail: '55 rooms' },
              { label: 'Labs', value: '61', detail: 'PortSwigger' },
              { label: 'Paths', value: '2', detail: 'Completed' },
              { label: 'Certs', value: '3', detail: 'Current' },
              { label: 'Tools', value: '15+', detail: 'Proficient' }
            ].map((metric) => (
              <div
                key={metric.label}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 text-center border border-cyan-400/20 hover:border-cyan-400/50 transition"
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <p className="text-lg font-bold text-cyan-400">{metric.value}</p>
                  <p className="text-xs text-gray-300 font-medium mt-0.5">{metric.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.detail}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Lab Tracker */}
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-300">Lab Completion Tracker</h3>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* PortSwigger Labs */}
            <div className="bg-gray-800 rounded-lg p-5 border border-cyan-400/20">
              <h4 className="text-lg font-semibold mb-4">PortSwigger Web Academy: 61 Labs</h4>
              <div className="space-y-3">
                {[
                  { category: 'SQL Injection', count: 15 },
                  { category: 'XSS', count: 13 },
                  { category: 'Authentication', count: 10 },
                  { category: 'Business Logic', count: 5 },
                  { category: 'CSRF', count: 7 },
                  { category: 'SSRF', count: 6 },
                  { category: 'CORS', count: 5 }
                ].map((lab) => (
                  <div key={lab.category}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium">{lab.category}</span>
                      <span className="text-xs text-cyan-400">{lab.count}</span>
                    </div>
                    <motion.div
                      className="h-1.5 bg-gray-700 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* TryHackMe Progress */}
            <div className="bg-gray-800 rounded-lg p-5 border border-cyan-400/20">
              <h4 className="text-lg font-semibold mb-4">TryHackMe Learning Paths: 55 Rooms</h4>
              <div className="space-y-4">
                {[
                  { title: 'Junior Penetration Tester', progress: 100, rooms: '~30 rooms' },
                  { title: 'SOC Level 1', progress: 100, rooms: '~25 rooms' }
                ].map((path) => (
                  <div key={path.title}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-xs">{path.title}</span>
                      <span className="text-xs text-gray-400">{path.rooms}</span>
                    </div>
                    <motion.div
                      className="h-2 bg-gray-700 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${path.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                    </motion.div>
                    <p className="text-xs text-cyan-400 mt-0.5">âœ“ Completed</p>
                  </div>
                ))}
                <div className="pt-3 border-t border-cyan-400/20 mt-3">
                  <p className="text-xs text-gray-400">Rank: <span className="text-cyan-400 font-semibold">Top 5%</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 9. TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-gray-800/50 to-dark border-y border-cyan-400/10">
          <motion.h2
            className="text-3xl font-semibold mb-3 text-center text-cyan-400 glow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Professional Highlights
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              Demonstrated expertise and professional recognition in cybersecurity
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/20 hover:to-purple-600/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20">
              <motion.div whileHover={{ y: -2 }}>
                <Award className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Top 5% on TryHackMe</h3>
                <p className="text-sm text-gray-300">
                  Ranked in top 5% of cybersecurity learners with 55 completed rooms and 2 learning paths finished.
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/20 hover:to-purple-600/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20">
              <motion.div whileHover={{ y: -2 }}>
                <ShieldCheck className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Bug Bounty Researcher</h3>
                <p className="text-sm text-gray-300">
                  Active HackerOne participant with 2 verified vulnerability reports contributing to application security.
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/20 hover:to-purple-600/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20">
              <motion.div whileHover={{ y: -2 }}>
                <Cpu className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">PortSwigger Lab Master</h3>
                <p className="text-sm text-gray-300">
                  Completed 61 hands-on web security labs demonstrating mastery of OWASP vulnerability categories.
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/20 hover:to-purple-600/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20">
              <motion.div whileHover={{ y: -2 }}>
                <Lock className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Certified Professional</h3>
                <p className="text-sm text-gray-300">
                  Holds 3 industry certifications (eJPT, CCNA, CyberOps) validating expertise in cybersecurity disciplines.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 10. CONTACT SECTION */}
        <section id="contact" className="py-20 px-4 border-t border-cyan-400/10">
          <motion.h2
            className="text-3xl font-semibold mb-8 text-center text-cyan-400 glow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Call to Action & Contact
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              Ready to strengthen your security posture? Let's work together on your next penetration test or security assessment.
            </p>
          </motion.div>
          <div className="flex flex-col items-center space-y-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-3 w-full max-w-md"
            >
              <a
                href="mailto:ali.eissa.cybersec@gmail.com"
                className="flex items-center space-x-3 text-sm hover:text-cyan-400 transition p-3 rounded-lg bg-cyan-400/5 border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 group"
              >
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
                <span>ali.eissa.cybersec@gmail.com</span>
              </a>
              <a
                href="https://wa.me/201021068767"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-cyan-400 transition p-3 rounded-lg bg-cyan-400/5 border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 group"
              >
                <Smartphone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
                <span>+201021068767 (WhatsApp)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ali-eissa-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-cyan-400 transition p-3 rounded-lg bg-cyan-400/5 border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 group"
              >
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/ali-cybersec-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:text-cyan-400 transition p-3 rounded-lg bg-cyan-400/5 border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 group"
              >
                <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
                <span>GitHub Projects</span>
              </a>
              <a
                href="/ALI_EISSA.pdf"
                download
                className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-black rounded-lg font-semibold text-sm hover:scale-105 transform transition shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 inline-flex items-center justify-center w-full group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition" />
                Download CV / Resume
              </a>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 pt-8 border-t border-cyan-400/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-gray-500">Â© 2024 Ali Eissa. All rights reserved. | Cybersecurity Professional</p>
          </motion.div>
        </section>
      </main>
    </>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  highlight
}: {
  title: string;
  description: string;
  tags: string[];
  highlight?: string;
}) {
  return (
    <motion.div
      className="bg-gradient-to-br from-cyan-400/10 to-purple-600/5 hover:from-cyan-400/20 hover:to-purple-600/10 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition h-full shadow-lg shadow-cyan-400/5 hover:shadow-cyan-400/20"
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-300">{description}</p>
      {highlight && (
        <p className="text-xs text-cyan-400 font-medium mb-4 italic flex items-center"><span className="mr-1">✓</span> {highlight}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full hover:from-cyan-400/40 hover:to-blue-500/40 transition border border-cyan-400/30"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}