import React, { useState, useEffect, useCallback, memo } from "react"
import { Helmet } from "react-helmet-async"
import { Github, Linkedin, Mail, ExternalLink, Sparkles, MessageCircle } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { personalData } from "../data/portfolioData"

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Turning Data Into Decisions
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Akhmad
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Danil
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon, primary = false, target = "_self" }) => (
  <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
    <button className="group relative min-w-[130px] sm:min-w-[145px]">
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl ${primary ? 'opacity-70 blur-md group-hover:opacity-100' : 'opacity-40 blur-md group-hover:opacity-80'} transition-all duration-700`}></div>
      <div className="relative h-11 px-4 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="flex items-center justify-center gap-2 text-xs sm:text-sm group-hover:gap-2.5 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10 whitespace-nowrap">
            {text}
          </span>
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-200 group-hover:translate-x-0.5 transform transition-all duration-300 z-10" />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-2.5 sm:p-3" aria-label={label}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

const TYPING_SPEED = 90;
const ERASING_SPEED = 45;
const PAUSE_DURATION = 1800;
const WORDS = personalData.typingWords;
const TECH_STACK = ["SQL", "Excel", "Python", "Machine Learning", "Business Strategy", "TAM-SAM-SOM"];
const SOCIAL_LINKS = [
  { icon: Linkedin, link: personalData.linkedin, label: "LinkedIn Profile" },
  { icon: Github, link: personalData.github, label: "GitHub Profile" },
  { icon: MessageCircle, link: personalData.whatsapp, label: "WhatsApp" },
  { icon: Mail, link: `mailto:${personalData.email}`, label: "Email" }
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  return (
    <>
      <Helmet>
        <title>Akhmad Danil — Aspiring Data Analyst & Business Strategy</title>
        <meta name="description" content="Portfolio resmi Akhmad Danil, Mahasiswa Sistem Informasi UNNES. Data Analytics, SQL, Excel, Python, Machine Learning, dan Business Strategy." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://github.com/ydbeksnbwk" />
        <meta property="og:title" content="Akhmad Danil — Aspiring Data Analyst & Business Strategy" />
        <meta property="og:description" content="Turning Data Into Decisions — Data Analytics, SQL, Excel, Python, Machine Learning, dan Business Strategy." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="Home">
        <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="container mx-auto min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen md:justify-between gap-6 sm:gap-12 lg:gap-16 pt-20 lg:pt-0">
              {/* Left Column */}
              <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6 text-left order-1 lg:order-1"
                data-aos="fade-right"
                data-aos-delay="200">
                <div className="space-y-4 sm:space-y-5">
                  <StatusBadge />
                  <MainTitle />

                  {/* Tagline / Sub-headline */}
                  <div className="text-lg sm:text-xl font-medium bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent" data-aos="fade-up" data-aos-delay="700">
                    {personalData.tagline}
                  </div>

                  {/* Typing Effect */}
                  <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                    <span className="text-base sm:text-xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                      {text}
                    </span>
                    <span className="w-[3px] h-5 sm:h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-light text-justify"
                    data-aos="fade-up"
                    data-aos-delay="1000">
                    {personalData.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-start" data-aos="fade-up" data-aos-delay="1200">
                    {TECH_STACK.map((tech, index) => (
                      <TechStack key={index} tech={tech} />
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3 w-full justify-start pt-2" data-aos="fade-up" data-aos-delay="1400">
                    <CTAButton href="#Portofolio" text="Lihat Project" icon={ExternalLink} primary={true} />
                    <CTAButton href="#Contact" text="Hubungi Saya" icon={Mail} />
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 justify-start pt-1" data-aos="fade-up" data-aos-delay="1600">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialLink key={index} {...social} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Graphic */}
              <div className="w-full py-4 md:py-[5%] lg:w-1/2 h-[280px] sm:h-[400px] lg:h-[550px] relative flex items-center justify-center order-2 lg:order-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                data-aos="fade-left"
                data-aos-delay="600">
                <div className="relative w-full opacity-90 flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                    isHovering ? "opacity-60 scale-105" : "opacity-30 scale-100"
                  }`}>
                  </div>

                  <div className={`relative z-10 w-full max-w-[420px] transform transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}>
                    <img
                      src="Animation1.gif"
                      alt="Data Analytics Animation"
                      className={`w-full h-full object-contain transition-all duration-500 ${
                        isHovering 
                          ? "scale-[95%] rotate-1" 
                          : "scale-[90%]"
                      }`}
                    />
                  </div>

                  <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isHovering ? "opacity-60" : "opacity-30"
                  }`}>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                      isHovering ? "scale-110" : "scale-100"
                    }`}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);