import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/mockData';
import { MessageCircle, Heart, ArrowUp, PhoneCall, MapPin, Clock, ShieldCheck, Award, Package } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-white border-t-4 border-emerald-800">
      {/* Top Accent Ribbon - Leaf Green & White Stripes */}
      <div className="h-2 w-full kfc-stripes" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info with Leaf Green Emblem */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-12 bg-emerald-800 rounded-b-lg flex flex-col items-center justify-between p-1 shadow-md">
                <div className="flex gap-1 h-2">
                  <span className="w-1 bg-white" />
                  <span className="w-1 bg-white" />
                  <span className="w-1 bg-white" />
                </div>
                <span className="text-white font-black text-[10px] leading-none">164B</span>
                <span className="w-full h-0.5 bg-lime-400" />
              </div>
              <div>
                <span className="text-xl font-black uppercase tracking-tight font-display block text-white">
                  JAGONYA ORGANIK TOL CIPALI
                </span>
                <span className="text-[11px] font-bold text-lime-400 uppercase tracking-widest font-mono">
                  Rest Area KM 164B Tol Cipali (Arah Jakarta)
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Inisiatif ekonomi sirkular pelopor jalan tol Indonesia. Mengolah 1,5 ton sisa konsumsi harian menjadi produk bermutu tinggi: Pupuk Organik Cair (POC), Pupuk Kasgot Emas Hitam, dan Maggot Super Protein 42%.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Halo Admin Rest Area KM 164B Tol Cipali, saya ingin menanyakan info produk & pemesanan.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-md w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-black text-lime-400 tracking-wider uppercase font-mono">
              Menu & Fasilitas
            </p>
            <ul className="space-y-2 text-xs text-stone-300 font-semibold">
              <li>
                <a href="#produk" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                  <span>Katalog Seluruh Menu</span>
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-emerald-400 transition-colors">
                  🔥 Kombo Super Besar Hemat
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-emerald-400 transition-colors">
                  👨‍🍳 Rahasia Dapur Sirkular
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-emerald-400 transition-colors">
                  📖 Berita & Riset Majalah
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-emerald-400 transition-colors">
                  ⚡ Kalkulator Dampak Lingkungan
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-emerald-400 transition-colors">
                  🚗 Peta Lokasi KM 164B
                </a>
              </li>
            </ul>
          </div>

          {/* Store Hours & Delivery Info */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-black text-lime-400 tracking-wider uppercase font-mono">
              Layanan Rest Area & Pengiriman
            </p>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-center gap-2 py-1 border-b border-stone-800">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>Buka: <strong>24 Jam Non-Stop</strong> Setiap Hari</span>
              </div>
              <div className="flex items-center gap-2 py-1 border-b border-stone-800">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Ruas Tol Cikopo - Palimanan KM 164 Jalur B</span>
              </div>
              <div className="flex items-center gap-2 py-1 border-b border-stone-800">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Pengiriman Cepat JNE, J&T, SiCepat ke Seluruh Indonesia</span>
              </div>
            </div>

            <div className="pt-2 p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400 space-y-1">
              <p className="font-bold text-white uppercase text-[10px]">Layanan Pemesanan & Pengiriman:</p>
              <p>
                Konfirmasi pesanan via WhatsApp untuk pengiriman ekspedisi cepat atau langsung diambil saat berkunjung ke KM 164B.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Sentra Sirkular Rest Area KM 164B Tol Cipali · Pelopor Green Highway Indonesia.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-white transition-colors bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
