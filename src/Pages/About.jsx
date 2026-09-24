import React, { useEffect, memo, useMemo } from "react"
import { Code, Award, Globe, ArrowUpRight, Sparkles, Database, TrendingUp, Wrench, BarChart2, CheckCircle2, Mail } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { personalData, skillsData } from "../data/portfolioData"

// Memoized Header
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-4 px-[5%]">
    <div className="inline-block relative group">
      <h2 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" 
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About & Expertise
      </h2>
    </div>
    <p 
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Turning Data Into Decisions
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-center lg:justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />
          
          <img
            src="/Photo.jpeg"
            alt={personalData.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
            onError={(e) => {
              // fallback image if Photo.jpeg is missing or placeholder
              e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
            }}
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <span 
          className="text-3xl font-bold text-white"
          data-aos="fade-up-left"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          {value}
        </span>
      </div>

      <div>
        <p 
          className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-1"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p 
            className="text-xs text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

const SkillCard = ({ title, icon: Icon, color, items }) => (
  <div 
    className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col"
    data-aos="fade-up"
  >
    <div className="flex items-center gap-3 mb-5">
      <div className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg text-white`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-xs text-gray-400">Core competencies & application</p>
      </div>
    </div>

    <div className="space-y-3 flex-grow">
      {items.map((item, idx) => (
        <div 
          key={idx}
          className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
          <div className="flex-grow">
            <span className="text-sm font-medium text-gray-200 block">{item.name}</span>
            {item.level && (
              <span className="text-[11px] text-indigo-300/80 font-light">{item.level}</span>
            )}
            {item.category && (
              <span className="text-[11px] text-purple-300/80 font-light">{item.category}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = () => {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false, 
      });
    };

    initAOS();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const statsData = useMemo(() => [
    {
      icon: Database,
      color: "from-[#6366f1] to-[#a855f7]",
      value: "5+",
      label: "Portfolio Projects",
      description: "Data analysis & ML projects",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: "14+",
      label: "Sertifikasi Resmi",
      description: "Dicoding, Karier.mu, BNSP",
      animation: "fade-up",
    },
    {
      icon: TrendingUp,
      color: "from-[#6366f1] to-[#a855f7]",
      value: "Top 10",
      label: "Business Case",
      description: "Pegadaian Tring! Finalist",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#a855f7] to-[#6366f1]",
      value: "Finalist",
      label: "Pitching Nasional",
      description: "Startup Majuon 2025 (Jakarta)",
      animation: "fade-left",
    },
  ], []);

  return (
    <div
      className="h-auto pb-16 text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-12 sm:mt-16" 
      id="About"
      itemScope
      itemType="https://schema.org/Person"
    >
      <Header />

      <div className="w-full mx-auto pt-4 sm:pt-8 relative">
        {/* Profile Info */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Halo, Saya
              </span>
              <span 
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
                itemProp="name"
              >
                {personalData.name}
              </span>
            </h2>
            
            <p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify pb-2"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              {personalData.summary}
            </p>

            {/* Quote Section */}
            <div 
              className="relative bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#a855f7]/10 border border-[#6366f1]/30 rounded-2xl p-4 my-6 backdrop-blur-md shadow-2xl overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <div className="absolute top-2 right-4 w-16 h-16 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-gradient-to-r from-[#a855f7]/20 to-[#6366f1]/20 rounded-full blur-lg"></div>
              
              <blockquote className="text-gray-200 text-center lg:text-left italic font-medium text-sm relative z-10 pl-2">
                "{personalData.quote}"
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full">
              <a href="#Portofolio" className="w-full sm:w-auto">
                <button 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> Lihat Proyek
                </button>
              </a>
              <a href="#Contact" className="w-full sm:w-auto">
                <button 
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] hover:text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-[#a855f7]/10"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> Hubungi Saya
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* 2. SKILL SECTION */}
        <div className="mt-20" id="Skills">
          <div className="text-center mb-10" data-aos="fade-up">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent inline-block">
              Skill & Kompetensi
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mt-2">
              Kombinasi analisis teknis data analytics dan perumusan strategi bisnis strategis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="Data Analytics"
              icon={BarChart2}
              color="from-blue-600 to-indigo-600"
              items={skillsData.dataAnalytics}
            />

            <SkillCard
              title="Business & Strategy"
              icon={TrendingUp}
              color="from-purple-600 to-pink-600"
              items={skillsData.businessStrategy}
            />

            <SkillCard
              title="Tools & Environment"
              icon={Wrench}
              color="from-indigo-600 to-purple-600"
              items={skillsData.tools}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);