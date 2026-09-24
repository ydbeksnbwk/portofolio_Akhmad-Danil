import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-lg p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* 404 Number */}
        <div className="mb-6">
          <h1 className="text-8xl font-black bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full mt-3"></div>
        </div>

        {/* Message */}
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Oops! Halaman Tidak Ditemukan
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tautan tidak valid.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-gray-200 border border-white/10 transition-all duration-200 text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Kembali
          </button>
          
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 text-white transition-all duration-200 text-sm font-medium shadow-lg shadow-indigo-500/20"
          >
            <Home size={18} />
            Ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}