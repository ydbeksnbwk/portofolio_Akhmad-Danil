import React from "react";
import { ExternalLink } from "lucide-react";

const CardProject = ({ Img, Title, Description, Tags = [], Category, Link: ProjectLink }) => {
  const isLiveApp = Boolean(ProjectLink && !ProjectLink.includes("github.com"));

  return (
    <div className="group relative w-full h-full flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-indigo-500/10 flex flex-col h-full">
        {/* Glow Hover Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        <div className="relative p-5 z-10 flex flex-col flex-1">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-4 bg-slate-950">
            {isLiveApp ? (
              <a href={ProjectLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img
                  src={Img}
                  alt={Title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            ) : (
              <img
                src={Img}
                alt={Title}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            )}

            {/* Badges Overlay */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
              {Category && (
                <span className="px-3 py-1 text-[11px] font-semibold tracking-wide rounded-full bg-black/70 text-indigo-300 backdrop-blur-md border border-white/10">
                  {Category}
                </span>
              )}
              {isLiveApp && (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto px-3 py-1 text-[11px] font-semibold rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white backdrop-blur-md border border-emerald-400/30 flex items-center gap-1.5 transition-all hover:scale-105 shadow-md shadow-emerald-500/25 ml-auto"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse"></span>
                  <span>
                    {ProjectLink.includes("spreadsheets")
                      ? "Buka Spreadsheet"
                      : ProjectLink.includes("datastudio") || ProjectLink.includes("lookerstudio")
                      ? "Buka Dashboard"
                      : "Buka Web Tool"}
                  </span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-2.5 flex-1 flex flex-col justify-between">
            <div>
              {isLiveApp ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group/title"
                >
                  <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent group-hover/title:text-emerald-300 transition-colors duration-200 flex items-center gap-1.5">
                    {Title}
                    <ExternalLink className="w-4 h-4 text-emerald-400 inline opacity-0 group-hover/title:opacity-100 transition-opacity" />
                  </h3>
                </a>
              ) : (
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:text-white transition-colors duration-200">
                  {Title}
                </h3>
              )}

              <p className="text-gray-300/80 text-sm leading-relaxed mt-2">
                {Description}
              </p>
            </div>

            {/* Tags / Tech Pills */}
            {Tags && Tags.length > 0 && (
              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5 mt-auto">
                {Tags.map((tag, idx) => {
                  const isHighlight =
                    tag === "Live Web Tool" ||
                    tag === "Live Spreadsheet" ||
                    tag === "Live Dashboard";
                  return (
                    <span
                      key={idx}
                      className={`px-2.5 py-0.5 text-[11px] font-medium rounded-md border ${
                        isHighlight
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                          : "bg-white/5 text-slate-300 border-white/10"
                      }`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
