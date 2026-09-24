import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, MapPin, Clock } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { personalData } from "../data/portfolioData";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Mengirim Pesan...',
      html: 'Harap tunggu selagi kami mengirim pesan Anda',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const formSubmitUrl = `https://formsubmit.co/${personalData.email}`;
      
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('_subject', 'Pesan Baru dari Website Portfolio Akhmad Danil');
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      await axios.post(formSubmitUrl, submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        title: 'Berhasil!',
        text: 'Pesan Anda telah berhasil terkirim!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2500,
        timerProgressBar: true
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      if (error.request && error.request.status === 0) {
        Swal.fire({
          title: 'Berhasil!',
          text: 'Pesan Anda telah berhasil terkirim!',
          icon: 'success',
          confirmButtonColor: '#6366f1',
          timer: 2500,
          timerProgressBar: true
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: 'Gagal!',
          text: 'Terjadi kesalahan. Silakan coba lagi nanti atau hubungi via WhatsApp/Email.',
          icon: 'error',
          confirmButtonColor: '#6366f1'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%]" id="Contact">
      {/* Title section */}
      <div className="text-center lg:mt-[5%] mt-12 mb-8 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mari Berdiskusi Soal Data
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Terbuka untuk kolaborasi project, internship, maupun sekadar diskusi seputar data analytics dan business strategy.
        </p>
      </div>

      <div className="h-auto py-4 flex items-center justify-center">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Box - 7 Cols */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:col-span-7 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Kirim Pesan Langsung
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Tertarik bekerja sama atau ingin bertukar gagasan seputar data? Tuliskan pesan Anda di bawah.
                </p>
              </div>
              <Share2 className="w-7 h-7 text-[#6366f1] opacity-60 flex-shrink-0" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative group">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap Anda"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/5 rounded-xl border border-white/15 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/40 transition-all duration-300 hover:border-[#6366f1]/40 disabled:opacity-50"
                  required
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Alamat Email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/5 rounded-xl border border-white/15 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/40 transition-all duration-300 hover:border-[#6366f1]/40 disabled:opacity-50"
                  required
                />
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <textarea
                  name="message"
                  placeholder="Pesan, tawaran kolaborasi, atau topik diskusi Anda..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full resize-none p-4 pl-12 bg-white/5 rounded-xl border border-white/15 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/40 transition-all duration-300 hover:border-[#6366f1]/40 disabled:opacity-50"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#6366f1]/25 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>
          </div>

          {/* Connect Cards & Status - 5 Cols */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:col-span-5 space-y-6"
          >
            {/* Social Links Cards (LinkedIn, WhatsApp, GitHub, Email) */}
            <SocialLinks />

            {/* Quick Availability Badge Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Status & Ketersediaan
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Terbuka untuk peluang <strong className="text-white">Internship Data Analyst</strong>, riset kolaboratif, maupun konsultasi strategi bisnis data.
              </p>
              <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Semarang / Brebes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>Fast Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;