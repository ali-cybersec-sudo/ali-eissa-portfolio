'use client';

import { useEffect } from 'react';
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
  Code
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const textGlow = 'text-accent glow';

export default function Portfolio() {
  useEffect(() => {
    // any client side initializations if needed
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 md:px-8 py-20"
      >
        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              className="flex flex-col text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold glow mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                ALI EISSA
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Penetration Tester focused on web and network security
              </motion.p>
              <motion.div
                className="flex gap-4 justify-center md:justify-start flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a
                  href="#projects"
                  className="px-8 py-3 bg-accent text-black rounded-lg font-semibold hover:scale-105 transform transition duration-300 shadow-lg shadow-cyan-400/20"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-black transition duration-300 shadow-lg shadow-cyan-400/10"
                >
                  Contact
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image with Cyber Effects */}
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Outer Rotating Glow Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-0 blur-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)' }}
                />

                {/* Rotating Border Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-full h-full rounded-full bg-gray-900" />
                </motion.div>

                {/* Inner Container */}
                <div className="absolute inset-1 rounded-full overflow-hidden border border-cyan-400/50">
                  {/* Profile Image */}
                  <Image
                    src="/ali.jpg"
                    alt="Ali Eissa"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />

                  {/* Soft Inner Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent rounded-full" />
                </div>

                {/* Animated Floating Particles */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                      x: Math.cos((i / 4) * Math.PI * 2) * 100,
                      y: Math.sin((i / 4) * Math.PI * 2) * 100,
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-4px',
                      marginTop: '-4px',
                      filter: 'blur(1px)'
                    }}
                  />
                ))}

                {/* Pulsing Corner Accents */}
                {[
                  'top-0 left-0',
                  'top-0 right-0',
                  'bottom-0 left-0',
                  'bottom-0 right-0'
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-3 h-3 border-2 border-cyan-400 ${pos}`}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    style={{ transform: 'translate(0.75rem, 0.75rem)' }}
                  />
                ))}

                {/* Soft Shadow Glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: `0 0 60px rgba(0, 255, 255, 0.25), 0 0 100px rgba(0, 255, 255, 0.15)`
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 max-w-3xl mx-auto"
      >
        <motion.h2
          className="text-3xl font-semibold mb-6 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          I am a cybersecurity graduate with 4 years of learning and hands-on
          practice in cybersecurity. I chose this field because I have a real
          passion for understanding how attacks happen, how secure systems get
          tested, and how data can be exposed and protected. My main focus
          areas are web penetration testing and network security.
        </motion.p>
      </section>

      {/* Skills / Toolkit Section */}
      <section
        id="skills"
        className="py-12 px-4 bg-gray-800"
      >
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Skills &amp; Toolkit
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Core technical skills across penetration testing, vulnerability assessment, and security automation
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            'Python',
            'JavaScript',
            'Burp Suite',
            'Nmap',
            'Wireshark',
            'Metasploit',
            'OWASP ZAP',
            'Nikto',
            'Gobuster',
            'SQLMap',
            'Linux',
            'Kali Linux',
            'Windows'
          ].map((skill) => (
            <div
              key={skill}
              className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 rounded-full text-center text-xs font-medium transition"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Vulnerability Expertise */}
      <section id="vulnerability-focus" className="py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Vulnerability Expertise
        </motion.h2>
        <p className="text-center text-gray-400 text-sm mb-6">Hands-on practice across OWASP Top 10 categories</p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
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
              className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 border border-cyan-400/30 hover:border-cyan-400/60 transition"
              whileHover={{ scale: 1.02 }}
            >
              <p className="font-semibold text-sm">{vuln.name}</p>
              <p className="text-xs text-cyan-400 mt-1">{vuln.labs}</p>
              <p className="text-xs text-gray-500 mt-0.5">{vuln.difficulty}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testing Methodology Section */}
      <section id="methodology" className="py-12 px-4 bg-gray-800">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Testing Methodology
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Structured 5-stage approach from reconnaissance to final reporting
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            {
              step: 'Reconnaissance',
              desc: 'Intelligence gathering with Amass & Subfinder'
            },
            {
              step: 'Enumeration',
              desc: 'Active scanning with Nmap & Gobuster'
            },
            {
              step: 'Validation',
              desc: 'Verification with Burp Suite & manual testing'
            },
            {
              step: 'Exploitation',
              desc: 'Exploitation with SQLmap & custom tools'
            },
            {
              step: 'Reporting',
              desc: 'Documentation with risk assessment'
            }
          ].map((item, i) => (
            <div
              key={item.step}
              className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 border-l-4 border-cyan-400 transition"
            >
              <div className="flex items-center mb-1.5">
                <span className="text-cyan-400 font-bold text-sm mr-2">{i + 1}</span>
                <h3 className="font-semibold text-sm">{item.step}</h3>
              </div>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Active Recon Commands */}
      <section id="recon-tools" className="py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Active Reconnaissance Tools
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Essential commands for subdomain discovery, port scanning, and web enumeration
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-900 rounded-lg p-4 max-w-2xl mx-auto border border-cyan-400/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2 font-mono text-xs">
            {[
              '$ subfinder -d target.com -o subs.txt',
              '$ amass enum -d target.com',
              '$ nmap -sC -sV -p- target.com',
              '$ ffuf -u https://target.com/FUZZ -w wordlist.txt',
              '$ nuclei -u https://target.com -t cves/'
            ].map((cmd, i) => (
              <motion.div
                key={i}
                className="text-cyan-400 py-1.5 border-l-2 border-cyan-400/50 pl-3"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-gray-600">{'>'}</span> {cmd}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pentesting Timeline */}
      <section id="timeline" className="py-12 px-4 bg-gray-800">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Pentesting Timeline
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Growth progression from 2022 to present across certifications and hands-on labs
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          {[
            { date: 'Jan 2022', event: 'CCNA Certification', type: 'Networking' },
            { date: 'Nov 2023', event: 'Cisco CyberOps Certified', type: 'Security Ops' },
            { date: 'May 2024', event: 'eJPT Certification', type: 'Pentesting' },
            { date: '2024', event: 'TryHackMe Top 5% · 55 Rooms', type: 'Hands-On' },
            { date: '2024–2026', event: 'PortSwigger Labs: 61 Labs Complete', type: 'Advanced Lab' }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-3 h-3 bg-cyan-400 rounded-full border border-cyan-400/50"></div>
                {i < 4 && <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-400/50 to-transparent my-1.5"></div>}
              </div>
              <div>
                <p className="font-semibold text-cyan-400 text-sm">{item.date}</p>
                <p className="text-gray-300 text-sm">{item.event}</p>
                <p className="text-xs text-gray-500">{item.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Certifications
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Verified credentials in networking, cybersecurity operations, and penetration testing
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            {
              cert: 'eJPT',
              issuer: 'INE',
              year: 'May 2024',
              value: 'Junior Penetration Tester certification'
            },
            {
              cert: 'CCNA',
              issuer: 'Cisco',
              year: 'Jan 2022',
              value: 'Networking foundation for security'
            },
            {
              cert: 'Cisco CyberOps',
              issuer: 'Cisco',
              year: 'Nov 2023',
              value: 'Security operations and threat analysis'
            }
          ].map((cert) => (
            <motion.div
              key={cert.cert}
              className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 border border-cyan-400/30 transition"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start mb-2">
                <Award className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">{cert.cert}</h4>
                  <p className="text-xs text-gray-500">{cert.issuer} · {cert.year}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400">{cert.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-12 px-4 bg-gray-800">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Learning Platforms & Communities
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Active participation across 6+ platforms with proven progress and real-world contributions
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            {
              name: 'TryHackMe',
              url: 'https://tryhackme.com/p/ali-eissa',
              icon: Globe,
              stat: 'Top 5% · 55 Rooms',
              desc: 'Interactive security labs'
            },
            {
              name: 'HackerOne',
              url: 'https://hackerone.com',
              icon: ShieldCheck,
              stat: '2 Reports · Low/Medium',
              desc: 'Vulnerability disclosure'
            },
            {
              name: 'PortSwigger Labs',
              url: '#',
              icon: Cpu,
              stat: '61 Labs Complete',
              desc: 'Web security fundamentals'
            },
            {
              name: 'GitHub',
              url: 'https://github.com/ali-cybersec-sudo',
              icon: Github,
              stat: 'Security Projects',
              desc: 'Tools and scripts'
            },
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/ali-eissa-cyber',
              icon: Linkedin,
              stat: 'Professional Network',
              desc: 'Career connections'
            },
            {
              name: 'Hack The Box',
              url: 'https://www.hackthebox.com',
              icon: Lock,
              stat: 'Continuous Practice',
              desc: 'Real-world pentesting'
            }
          ].map((platform) => {
            const Icon = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 border border-cyan-400/30 h-full transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start mb-2">
                    <Icon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">{platform.name}</h4>
                      <p className="text-xs text-cyan-400 font-medium">{platform.stat}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400">{platform.desc}</p>
                </motion.div>
              </a>
            );
          })}
        </motion.div>
      </section>

      {/* Security Metrics Dashboard */}
      <section id="security-metrics" className="py-12 px-4 bg-gray-800">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Performance Metrics
        </motion.h2>
        <p className="text-center text-gray-400 text-sm mb-6">Demonstrated competency across multiple platforms and disciplines</p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto"
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
            { label: 'Tools', value: '11+', detail: 'Proficient' }
          ].map((metric) => (
            <motion.div
              key={metric.label}
              className="bg-gray-700/60 hover:bg-gray-700 rounded-lg p-3 text-center border border-cyan-400/20 hover:border-cyan-400/50 transition"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-lg font-bold text-cyan-400">{metric.value}</p>
              <p className="text-xs text-gray-300 font-medium mt-0.5">{metric.label}</p>
              <p className="text-xs text-gray-500 mt-1">{metric.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bug Bounty & Vulnerability Disclosure */}
      <section id="bug-bounty" className="py-12 px-4 bg-gray-800">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Bug Bounty & Vulnerability Reporting
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Active HackerOne participant specializing in web application vulnerabilities
          </p>
        </motion.div>
        <motion.div
          className="max-w-2xl mx-auto bg-gray-700/50 rounded-lg p-4 border border-cyan-400/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Platform', value: 'HackerOne' },
              { label: 'Reports', value: '2' },
              { label: 'Severity', value: 'Low, Medium' }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-lg font-bold text-cyan-400 mb-0.5">{item.value}</p>
                <p className="text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-cyan-400/20 pt-3">
            <h4 className="font-semibold text-sm mb-1.5">Reported Vulnerabilities</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Actively disclosing vulnerabilities on HackerOne focusing on web application flaws. Current program: <span className="text-cyan-400 font-semibold">Webshop</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Featured Security Projects
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Real-world projects demonstrating practical security skills and expertise
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto"
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

      {/* Writeups & Lab Notes - In Progress */}
      <section id="writeups" className="py-12 px-4 bg-gray-800">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Writeups & Technical Analysis
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Detailed technical writeups with step-by-step exploitation walkthroughs, impact analysis, and remediation guidance
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            { topic: 'SQL Injection', status: 'In Progress', complexity: 'Advanced', detail: 'Blind & time-based techniques' },
            { topic: 'Cross-Site Scripting (XSS)', status: 'In Progress', complexity: 'Intermediate', detail: 'DOM, Reflected & Stored attacks' },
            { topic: 'Authentication Flaws', status: 'Planned', complexity: 'Advanced', detail: 'Session & credential bypass methods' },
            { topic: 'SSRF Exploitation', status: 'Planned', complexity: 'Advanced', detail: 'Internal service & cloud metadata access' },
            { topic: 'Access Control & IDOR', status: 'Planned', complexity: 'Intermediate', detail: 'Horizontal & vertical escalation' },
            { topic: 'CSRF Token Bypass', status: 'Planned', complexity: 'Intermediate', detail: 'Request forgery & token manipulation' }
          ].map((writeup) => (
            <div
              key={writeup.topic}
              className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 border border-cyan-400/30 transition"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-sm">{writeup.topic}</h4>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${writeup.status === 'In Progress' ? 'bg-cyan-400/20 text-cyan-400' : 'bg-gray-600 text-gray-400'}`}>
                  {writeup.status}
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-1">{writeup.detail}</p>
              <span className="text-xs text-gray-500">{writeup.complexity}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Lab Tracker - Learning Progress */}
      <section id="lab-tracker" className="py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Lab Tracker & Learning Paths
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            61 PortSwigger labs + 55 TryHackMe rooms mastered across multiple security domains
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* PortSwigger Labs */}
          <div className="bg-gray-800 rounded-lg p-5 border border-cyan-400/20">
            <h3 className="text-lg font-semibold mb-4">PortSwigger Web Academy</h3>
            <div className="space-y-3">
              {[
                { category: 'SQL Injection', count: 15 },
                { category: 'XSS (Cross-Site Scripting)', count: 13 },
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
              <div className="pt-3 border-t border-cyan-400/20">
                <p className="text-xs text-gray-400">Total: <span className="text-cyan-400 font-semibold">61 labs</span></p>
              </div>
            </div>
          </div>

          {/* TryHackMe Progress */}
          <div className="bg-gray-800 rounded-lg p-5 border border-cyan-400/20">
            <h3 className="text-lg font-semibold mb-4">TryHackMe Learning Paths</h3>
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
                  <p className="text-xs text-cyan-400 mt-0.5">✓ Completed</p>
                </div>
              ))}
              <div className="pt-3 border-t border-cyan-400/20">
                <p className="text-xs text-gray-400">Rank: <span className="text-cyan-400 font-semibold">Top 5%</span> · Rooms: <span className="text-cyan-400 font-semibold">55</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vulnerability Showcase - Specialization Map */}
      <section id="vulnerability-showcase" className="py-12 px-4 bg-gray-800">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Vulnerability Specializations
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Core security domains with advanced understanding from hands-on practice
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            { vuln: 'SQL Injection', focus: 'Database attacks' },
            { vuln: 'XSS', focus: 'Client-side execution' },
            { vuln: 'CSRF', focus: 'Request forgery' },
            { vuln: 'SSRF', focus: 'Server exploitation' },
            { vuln: 'IDOR', focus: 'Access control' },
            { vuln: 'Auth Flaws', focus: 'Identity bypass' },
            { vuln: 'Business Logic', focus: 'Flow exploitation' },
            { vuln: 'CORS', focus: 'Cross-origin attacks' }
          ].map((item) => (
            <motion.div
              key={item.vuln}
              className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 border-l-4 border-cyan-400 transition"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="font-semibold text-xs mb-1">{item.vuln}</h4>
              <p className="text-xs text-gray-400">{item.focus}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Attack Surface Map */}
      <section id="attack-surface" className="py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Attack Surface Methodology
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Systematic approach to identifying and exploiting security weaknesses across target applications
          </p>
        </motion.div>
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            { area: 'Web Applications', details: ['Input validation flaws', 'Session handling', 'Privilege escalation'] },
            { area: 'APIs & Endpoints', details: ['Auth bypass techniques', 'Rate limiting issues', 'Data exposure vectors'] },
            { area: 'Authentication Flows', details: ['Credential stuffing', 'Session fixation', 'MFA weaknesses'] },
            { area: 'Hidden Resources', details: ['Directory enumeration', 'Subdomain discovery', 'Endpoint mapping'] },
            { area: 'Misconfigurations', details: ['Default credentials', 'Exposed configs', 'Debug modes'] },
            { area: 'Access Control', details: ['IDOR patterns', 'Escalation paths', 'Role confusion'] }
          ].map((attack) => (
            <motion.div
              key={attack.area}
              className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 border border-cyan-400/30 transition"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="flex items-center font-semibold mb-2 text-sm">
                <Target className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                {attack.area}
              </h4>
              <ul className="space-y-1">
                {attack.details.map((detail) => (
                  <li key={detail} className="text-xs text-gray-300 flex items-start">
                    <span className="text-cyan-400 mr-1.5 flex-shrink-0">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skill Progress */}
      <section id="progress" className="py-12 px-4 bg-gray-800">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Technical Skill Progress
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Actively growing competency across core cybersecurity disciplines
          </p>
        </motion.div>
        <motion.div
          className="space-y-4 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            { label: 'Web Penetration Testing', value: 85, description: 'Burp Suite, manual exploitation' },
            { label: 'Vulnerability Analysis', value: 80, description: 'Identification and assessment' },
            { label: 'Network Security', value: 78, description: 'Nmap, packet analysis, protocols' },
            { label: 'Reconnaissance & Enumeration', value: 88, description: 'Amass, Subfinder, active scanning' },
            { label: 'Exploitation & Payloads', value: 82, description: 'SQLmap, Metasploit, custom exploits' },
            { label: 'Security Reporting', value: 75, description: 'Documentation and communication' }
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-1">
                <div>
                  <span className="font-medium text-xs">{item.label}</span>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <span className="text-xs font-semibold text-cyan-400">{item.value}%</span>
              </div>
              <motion.div
                className="w-full bg-gray-700 rounded-full h-2 overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold mb-3 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Services & Consulting
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Professional penetration testing and vulnerability assessment services
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto"
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
                className="bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 border border-cyan-400/30 transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <Icon className="w-4 h-4 text-cyan-400 mr-2" />
                  <h4 className="font-semibold text-sm">{svc.service}</h4>
                </div>
                <p className="text-xs text-gray-400">{svc.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-center glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="flex flex-col items-center space-y-2.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <a
            href="mailto:ali.eissa.cybersec@gmail.com"
            className="flex items-center space-x-2 text-sm hover:text-cyan-400 transition"
          >
            <Mail className="w-4 h-4" />
            <span>ali.eissa.cybersec@gmail.com</span>
          </a>
          <a
            href="https://wa.me/201021068767"
            className="flex items-center space-x-2 text-sm hover:text-cyan-400 transition"
          >
            <Smartphone className="w-4 h-4" />
            <span>+201021068767</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-eissa-cyber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm hover:text-cyan-400 transition"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ali-cybersec-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm hover:text-cyan-400 transition"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="/ALI_EISSA.pdf"
            download
            className="mt-3 px-4 py-2 bg-accent text-black rounded-md font-semibold text-sm hover:scale-105 transform transition inline-flex items-center"
          >
            <Download className="w-3.5 h-3.5 mr-1.5" />
            Download CV
          </a>
        </motion.div>
      </section>
    </main>
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
      className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition h-full"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-300">{description}</p>
      {highlight && (
        <p className="text-xs text-cyan-400 font-medium mb-4 italic">✓ {highlight}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-600 px-2 py-1 rounded-full hover:bg-cyan-400/20 hover:text-cyan-400 transition"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
