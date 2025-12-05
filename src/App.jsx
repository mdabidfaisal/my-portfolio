import React, { useState, useEffect } from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";
import { 
    Briefcase, 
    Layers, 
    Mail, 
    Globe, 
    CheckCircle, 
    Award, 
    Phone, 
    Linkedin, 
    Home, 
    Menu, 
    X, 
    Code, 
    Zap, 
    Shield, 
    Cloud, 
    Smartphone, 
    MapPin, 
    Star, 
    Calendar,
    ExternalLink,
    ChevronDown,
    Send
} from 'lucide-react';

// --- IMAGE CONFIGURATION ---
// 1. FOR LOCAL VS CODE: Uncomment the import line below and place your image in src/assets/profile.jpg
import profileImage from './assets/profile.jpg'; 

// 2. FOR PREVIEW: Keep this line. Comment it out when using local image.
// const profileImage = "https://placehold.co/400x400/23272f/58c4dc?text=AF";

// --- THEME ---
const THEME = {
    bg: {
        main: 'bg-slate-950',        
        secondary: 'bg-slate-900',   
        card: 'bg-slate-800',        
    },
    text: {
        primary: 'text-slate-50',    
        secondary: 'text-slate-400', 
        accent: 'text-cyan-400',     
    },
    button: {
        primary: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold',
        outline: 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10',
    }
};

// --- DATA ---
const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
];

const PROFILE_DATA = {
    name: "Abid Faisal",
    tagline: "Founder & Strategist | Creating scalable digital solutions",
    summary: "Software engineer by profession and business growth strategist by practice. Today I help founders, universities and businesses turn manual work into digital products that actually grow revenue and simplify operations.",
    contact: {
        phone: "01773477697",
        email: "abidfaisal027@gmail.com",
        location: "Khulna, Bangladesh",
        linkedin: "https://www.linkedin.com/in/abidfaisal027"
    },
    links: [
        { name: "Code Prophet", url: "https://codeprophet.tech/" },
        { name: "Wyzeek", url: "https://wyzeek.com/" },
        { name: "NimiTech Digital", url: "https://nimitechdigital.com/" }
    ]
};

const EXPERIENCE = [
    {
        role: "Director of Operations",
        company: "NimiTech Digital",
        location: "Raleigh, NC, USA",
        period: "2025 - Present",
        desc: "Leading operations for a dynamic technology solutions provider. Specializing in IT consulting, digital marketing, cybersecurity, and software development."
    },
    {
        role: "Chief Strategy Officer (CSO)",
        company: "WYZEEK",
        location: "Wyoming, USA",
        period: "July 2025 - Present",
        desc: "Combining strategy, craft, and engineering discipline to build digital products people love to use."
    },
    {
        role: "Chief Executive Officer",
        company: "Code Prophet",
        location: "Bangladesh",
        period: "March 2024 - Present",
        desc: "Leading a software company focused on innovative websites, software, and applications."
    },
    {
        role: "Software Project Manager",
        company: "Code Prophet",
        location: "Bangladesh",
        period: "Feb 2024 - Nov 2024",
        desc: "Managed software projects ensuring timely delivery and quality assurance."
    },
    {
        role: "DevOps Engineer",
        company: "Code Prophet",
        location: "Bangladesh",
        period: "Nov 2023 - Nov 2024",
        desc: "Implemented DevOps best practices, CI/CD pipelines, and cloud infrastructure."
    }
];

const EDUCATION = [
    {
        degree: "B.Sc. in Computer Science & Engineering",
        school: "North Western University, Khulna",
        year: "Aug 2021 - July 2025"
    },
    {
        degree: "HSC, Science Group",
        school: "Government Sundarban Adarsha College",
        year: "2018 - 2020"
    },
    {
        degree: "SSC, Science",
        school: "KHULNA ZILLA SCHOOL AND COLLEGE",
        year: "Jan 2010 - Feb 2018"
    }
];

const SERVICES = [
    { title: "Custom Software Dev", icon: Code, desc: "Building owned (non-recurring) software tailored to your specific business needs." },
    { title: "Cybersecurity", icon: Shield, desc: "Protecting your digital infrastructure with advanced security protocols and compliance." },
    { title: "AI & Machine Learning", icon: Zap, desc: "Integrating smart algorithms to automate workflows and optimize decisions." },
    { title: "Cloud Infrastructure", icon: Cloud, desc: "Scalable cloud architectures and seamless migration services (AWS/Azure/GCP)." },
    { title: "Digital Marketing", icon: Globe, desc: "Data-driven strategies for lead generation and market expansion." },
    { title: "24/7 IT Support", icon: Smartphone, desc: "Round-the-clock support to minimize downtime and ensure continuous operation." },
];

const SKILLS = [
    "Collaborative Leadership", "Problem Solving", "Strategic Partnerships", 
    "Facebook Marketing", "Product Management", "Google SRE Culture", "DevOps & Jenkins"
];

// --- COMPONENTS ---

const Navbar = ({ activeSection, scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-[#23272f]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
                        <span className={`text-3xl font-extrabold ${THEME.text.accent}`}>Afaisalfolio</span>
                        <span className={`text-3xl font-bold ${THEME.text.primary}`}>....</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10">
                        {NAV_LINKS.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`text-base font-medium transition-colors hover:text-[#58c4dc] ${activeSection === link.id ? THEME.text.accent : 'text-gray-300'}`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-gray-300 hover:text-white p-2 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className={`md:hidden absolute top-16 left-0 w-full ${THEME.bg.card} border-b border-gray-700 shadow-2xl`}>
                    <div className="px-6 py-6 space-y-4 flex flex-col">
                        {NAV_LINKS.map(link => (
                            <button
                                key={link.id}
                                onClick={() => { scrollToSection(link.id); setIsOpen(false); }}
                                className={`text-left px-4 py-3 rounded-lg text-lg font-medium ${activeSection === link.id ? 'bg-[#58c4dc]/10 text-[#58c4dc]' : 'text-gray-300 hover:bg-white/5'}`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero = ({ scrollToSection }) => (
    <section id="home" className={`relative min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 ${THEME.bg.main} w-full overflow-hidden`}>
        {/* Background Gradients - Expanded for Wide Screens */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-[#58c4dc]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
            {/* Text Content */}
            <div className="text-center md:text-left order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#58c4dc]/10 border border-[#58c4dc]/30 text-[#58c4dc] text-sm font-medium mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#58c4dc] animate-pulse"></span>
                    Available for new projects
                </div>
                <h1 className={`text-5xl md:text-6xl lg:text-8xl font-extrabold ${THEME.text.primary} mb-6 leading-tight`}>
                    Hi, I'm <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58c4dc] to-blue-500">
                        Abid Faisal
                    </span>
                </h1>
                <p className={`text-lg md:text-xl lg:text-2xl ${THEME.text.secondary} mb-8 max-w-3xl mx-auto md:mx-0 leading-relaxed`}>
                    Founder & Strategist turning manual work into scalable digital products. Expert in EdTech, automation, and scalable systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                    <button 
                        onClick={() => scrollToSection('contact')}
                        className={`w-full sm:w-auto px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#58c4dc]/20 flex items-center justify-center gap-2 text-lg ${THEME.button.primary}`}
                    >
                        <Send size={20} /> Start a Project
                    </button>
                    <button 
                        onClick={() => scrollToSection('experience')}
                        className={`w-full sm:w-auto px-10 py-4 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg ${THEME.button.outline}`}
                    >
                        <Briefcase size={20} /> View Experience
                    </button>
                </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                    <div className="absolute inset-0 rounded-full border border-[#58c4dc]/20 scale-110 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#58c4dc]/30 scale-125 spin-slow"></div>
                    <img 
                        src={profileImage}
                        alt="Abid Faisal" 
                        className="w-full h-full rounded-full object-cover border-4 border-[#58c4dc] shadow-2xl relative z-10 bg-gray-800"
                        onError={(e) => { e.target.src = 'https://placehold.co/600x600/23272f/58c4dc?text=AF' }}
                    />
                </div>
            </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-gray-500">
            <ChevronDown size={32} />
        </div>
    </section>
);

const About = () => (
    <section id="about" className={`py-24 ${THEME.bg.secondary} w-full`}>
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                <div className="flex flex-col justify-center">
                    <h2 className={`text-3xl md:text-5xl font-bold ${THEME.text.primary} mb-8`}>About Me</h2>
                    <p className={`${THEME.text.secondary} text-lg md:text-xl leading-relaxed mb-8`}>
                        Software engineer by profession and business growth strategist by practice. I help founders, universities and businesses turn manual work into digital products that actually grow revenue and simplify operations.
                    </p>
                    <p className={`${THEME.text.secondary} text-lg md:text-xl leading-relaxed mb-8`}>
                        I design product-led solutions and repeatable delivery systems that speed launches, reduce cost, and attract more customers. My work covers EdTech, university automation, ERP and e-commerce.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <ContactItem icon={MapPin} value={PROFILE_DATA.contact.location} />
                        <ContactItem icon={Phone} value={PROFILE_DATA.contact.phone} href={`tel:${PROFILE_DATA.contact.phone}`} />
                        <ContactItem icon={Mail} value="Email Me" href={`mailto:${PROFILE_DATA.contact.email}`} />
                        <ContactItem icon={Linkedin} value="LinkedIn" href={PROFILE_DATA.contact.linkedin} />
                    </div>
                </div>
                
                <div className={`${THEME.bg.card} p-8 lg:p-12 rounded-3xl border border-gray-700 mt-8 lg:mt-0 shadow-xl`}>
                    <h3 className={`text-2xl md:text-3xl font-bold ${THEME.text.primary} mb-8`}>Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-3 mb-12">
                        {SKILLS.map((skill, index) => (
                            <span key={index} className="px-4 py-2 rounded-full bg-slate-700 text-cyan-300 text-sm md:text-base font-medium border border-slate-600 hover:bg-[#58c4dc] hover:text-slate-900 transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <h3 className={`text-2xl md:text-3xl font-bold ${THEME.text.primary} mb-8`}>Education</h3>
                    <div className="space-y-6">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-center p-4 rounded-xl hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-600">
                                <div>
                                    <div className={`font-bold ${THEME.text.primary} text-lg`}>{edu.degree}</div>
                                    <div className={`text-base ${THEME.text.secondary} mt-1`}>{edu.school}</div>
                                </div>
                                <div className={`text-sm font-mono mt-2 md:mt-0 ${THEME.text.accent} bg-slate-900 px-3 py-1 rounded-md border border-slate-700`}>{edu.year}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ContactItem = ({ icon, value, href }) => {
    const Icon = icon;
    return (
        <div className="flex items-center gap-4">
            <div className="p-3 bg-[#58c4dc]/10 rounded-lg">
                <Icon className="text-[#58c4dc] flex-shrink-0" size={24} />
            </div>
            {href ? (
                <a href={href} className="hover:text-[#58c4dc] transition-colors text-white text-base md:text-lg font-medium">{value}</a>
            ) : (
                <span className="text-white text-base md:text-lg font-medium">{value}</span>
            )}
        </div>
    );
};

const Experience = () => (
    <section id="experience" className={`py-24 ${THEME.bg.main} w-full`}>
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
                <h2 className={`text-4xl md:text-5xl font-bold ${THEME.text.primary}`}>Experience</h2>
                <div className="h-1.5 w-24 bg-[#58c4dc] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
                {EXPERIENCE.map((job, idx) => (
                    <div key={idx} className={`${THEME.bg.card} p-8 rounded-2xl border border-slate-700 hover:border-[#58c4dc] transition-all duration-300 group shadow-lg`}>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                            <div>
                                <h3 className={`text-2xl font-bold ${THEME.text.primary} group-hover:text-[#58c4dc] transition-colors`}>{job.role}</h3>
                                <div className={`flex items-center gap-2 ${THEME.text.accent} text-lg font-medium mt-2`}>
                                    <Briefcase size={20} />
                                    {job.company}
                                </div>
                            </div>
                            <div className="flex flex-col md:items-end text-sm text-gray-400 mt-2 md:mt-0">
                                <span className="bg-[#23272f] px-4 py-1.5 rounded-full border border-gray-600 mb-2 font-mono text-[#58c4dc]">{job.period}</span>
                                <span className="flex items-center gap-1.5"><MapPin size={14}/> {job.location}</span>
                            </div>
                        </div>
                        <p className={`${THEME.text.secondary} text-lg leading-relaxed border-t border-gray-700 pt-6`}>{job.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Services = () => (
    <section id="services" className={`py-24 ${THEME.bg.secondary} w-full`}>
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
                <h2 className={`text-4xl md:text-5xl font-bold ${THEME.text.primary}`}>What I Do</h2>
                <p className={`mt-6 ${THEME.text.secondary} text-lg md:text-xl max-w-3xl mx-auto`}>End-to-end digital solutions designed to scale your business operations and impact.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {SERVICES.map((svc, idx) => (
                    <div key={idx} className={`${THEME.bg.card} p-10 rounded-2xl border border-gray-700 hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:border-[#58c4dc]/30`}>
                        <div className="w-16 h-16 bg-[#58c4dc]/10 rounded-2xl flex items-center justify-center mb-8">
                            <svc.icon className="text-[#58c4dc]" size={32} />
                        </div>
                        <h3 className={`text-2xl font-bold ${THEME.text.primary} mb-4`}>{svc.title}</h3>
                        <p className={`${THEME.text.secondary} text-lg leading-relaxed`}>{svc.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className={`py-24 ${THEME.bg.main} w-full`}>
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
                <h2 className={`text-4xl md:text-5xl font-bold ${THEME.text.primary}`}>Get In Touch</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
                
                {/* Info Side */}
                <div className="space-y-10">
                    <div className={`${THEME.bg.card} p-10 rounded-3xl border border-gray-700 shadow-xl`}>
                        <h3 className={`text-2xl md:text-3xl font-bold ${THEME.text.primary} mb-8`}>Quick Connect</h3>
                        <div className="space-y-6">
                            <a href={`mailto:${PROFILE_DATA.contact.email}`} className="flex items-center gap-5 p-4 rounded-xl hover:bg-slate-700 transition-colors group border border-transparent hover:border-gray-600">
                                <Mail className="text-[#58c4dc]" size={28} />
                                <div>
                                    <p className="text-sm text-gray-400">Email Address</p>
                                    <span className={`${THEME.text.primary} group-hover:text-[#58c4dc] text-lg font-medium break-all`}>{PROFILE_DATA.contact.email}</span>
                                </div>
                            </a>
                            <a href={`tel:${PROFILE_DATA.contact.phone}`} className="flex items-center gap-5 p-4 rounded-xl hover:bg-slate-700 transition-colors group border border-transparent hover:border-gray-600">
                                <Phone className="text-[#58c4dc]" size={28} />
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <span className={`${THEME.text.primary} group-hover:text-[#58c4dc] text-lg font-medium`}>{PROFILE_DATA.contact.phone}</span>
                                </div>
                            </a>
                            <a href={PROFILE_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-5 p-4 rounded-xl hover:bg-slate-700 transition-colors group border border-transparent hover:border-gray-600">
                                <Linkedin className="text-[#58c4dc]" size={28} />
                                <div>
                                    <p className="text-sm text-gray-400">Social</p>
                                    <span className={`${THEME.text.primary} group-hover:text-[#58c4dc] text-lg font-medium`}>LinkedIn Profile</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={`${THEME.bg.card} p-10 rounded-3xl border border-gray-700 shadow-xl`}>
                        <h3 className={`text-2xl md:text-3xl font-bold ${THEME.text.primary} mb-6`}>My Ventures</h3>
                        <div className="flex flex-wrap gap-4">
                            {PROFILE_DATA.links.map((link, idx) => (
                                <a 
                                    key={idx} 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="px-6 py-3 bg-slate-900 border border-slate-600 rounded-xl text-lg text-[#58c4dc] hover:bg-[#58c4dc] hover:text-slate-900 font-medium transition-all flex items-center gap-2"
                                >
                                    {link.name} <ExternalLink size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form Side */}
<div className="w-full">
  <div className={`${THEME.bg.card} rounded-3xl border border-gray-700 overflow-hidden shadow-2xl`}>
    
    <div className="bg-slate-900 px-6 py-4 border-b border-slate-700 flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span className="ml-4 text-sm text-slate-500 font-mono">contact_form.exe</span>
    </div>

    {/* FormFacade Embed */}
    <div className="w-full bg-white p-0 rounded-b-3xl">
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/101413358394568395114/form/1FAIpQLScFl96DespYDR1nkZdHnbxb459lNRCuWGNV3TZpULaEcxkBrw/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log('Form submitted')}
      />
    </div>

  </div>
</div>

            </div>
        </div>
    </section>
);

// 7. Footer
const Footer = () => (
    <footer className="bg-slate-950 py-10 text-center border-t border-slate-800 w-full">
        <div className="w-full max-w-[1800px] mx-auto px-6">
            <p className={`${THEME.text.secondary} text-base`}>
                &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 mt-2">A Personal Creation by Abid</p>
        </div>
    </footer>
);

// --- MAIN APP ---
const App = () => {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.2 });

        NAV_LINKS.forEach(link => {
            const el = document.getElementById(link.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        // Root container forces 100% width and prevents horizontal scroll
        <div className={`min-h-screen font-sans ${THEME.bg.main} text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 w-full overflow-x-hidden`}>
            {/* Global Styles for Full Width Fix */}
            <style>{`
                html, body, #root { width: 100%; max-width: 100%; overflow-x: hidden; margin: 0; padding: 0; }
                .spin-slow { animation: spin 12s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>

            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
            
            <main className="w-full">
                <Hero scrollToSection={scrollToSection} />
                <About />
                <Experience />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;