import React, { memo } from "react";
import { GraduationCap, Building2, Calendar, CheckCircle2, Trophy, Rocket } from "lucide-react";
import { experiencesData } from "../data/portfolioData";

const getExperienceIcon = (type) => {
  switch (type) {
    case "National Competition":
      return Trophy;
    case "Startup Incubation":
      return Rocket;
    case "Leadership & Business Strategy":
      return Building2;
    default:
      return GraduationCap;
  }
};

const Experience = () => {
  return (
    <section className="px-[5%] sm:px-[5%] lg:px-[10%] py-16 bg-[#030014] text-white" id="Experience">
      <div className="text-center pb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent inline-block">
          Pengalaman & Rekam Jejak
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Perjalanan dalam data analytics, perumusan strategi bisnis, dan kepemimpinan proyek kompetitif.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical glowing line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#6366f1] via-[#a855f7] to-transparent transform -translate-x-1/2 opacity-30"></div>

        <div className="space-y-8 md:space-y-12">
          {experiencesData.map((exp, index) => {
            const Icon = getExperienceIcon(exp.type);
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
                data-aos={isEven ? "fade-left" : "fade-right"}
                data-aos-duration="1000"
              >
                {/* Center marker on desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#030014] border-2 border-[#a855f7] items-center justify-center shadow-lg shadow-purple-500/30 z-20">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>

                {/* Content Box */}
                <div className="w-full md:w-[46%]">
                  <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                    {/* Glow background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 border border-[#a855f7]/30 text-purple-300 flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        {exp.badge}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-indigo-400 mb-4">
                      {exp.company}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Documentation Photo */}
                    {exp.image && (
                      <div className="mt-4 rounded-xl overflow-hidden border border-white/10 relative group/img shadow-lg">
                        <img
                          src={exp.image}
                          alt={exp.role}
                          className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] text-purple-200 font-medium border border-white/10 flex items-center gap-1.5">
                          <span>📸 {exp.role.includes("Majuon") ? "Dokumentasi Pitching Tim Kitaro (Majuon 2025)" : "Dokumentasi Presentasi Lomba BCC"}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
