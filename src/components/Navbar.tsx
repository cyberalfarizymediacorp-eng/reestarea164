import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, MapPin, Clock, Flame, ChevronRight, PhoneCall, Leaf } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/mockData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateToCatalog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onNavigateToCatalog
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWaContact = () => {
    const text = encodeURIComponent(
      'Halo Admin Rest Area KM 164B Tol Cipali, saya ingin memesan menu produk sirkular (Kombo Super Tani / Pupuk Kasgot / POC / Maggot Kering).'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      {/* Top Banner Bar - Hijau Daun (Forest & Leaf Green) Accent */}
      <div className="bg-emerald-800 text-white text-xs font-semibold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            {/* Store & Drive-Thru info */}
            <div className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-lime-300 shrink-0" />
                <span>Rest Area KM 164B Tol Cipali</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5 opacity-90">
                <Clock className="w-3.5 h-3.5 text-lime-300" />
                <span>Buka 24 Jam Non-Stop · Layanan Kirim Cepat Seluruh Indonesia</span>
              </span>
            </div>

            {/* Hotline WhatsApp & Quick Call - Removed 100% Organik Bersertifikat as requested */}
            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-center gap-1 hover:text-lime-200 transition-colors"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Hotline: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo - Leaf Green & White Striped Emblem */}
            <a
              href="#"
              className="flex items-center gap-3 group"
            >
              <div className="relative w-12 h-14 bg-emerald-800 rounded-b-xl shadow-md flex flex-col items-center justify-between p-1.5 overflow-hidden transition-transform group-hover:scale-105">
                {/* 3 white stripes motif */}
                <div className="w-full flex justify-center gap-1.5 h-3">
                  <span className="w-1.5 h-full bg-white rounded-xs" />
                  <span className="w-1.5 h-full bg-white rounded-xs" />
                  <span className="w-1.5 h-full bg-white rounded-xs" />
                </div>
                <span className="text-white font-black text-xs tracking-tighter leading-none text-center font-display">
                  KM<br />164B
                </span>
                <div className="w-full h-1 bg-lime-400 rounded-full" />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 uppercase font-display">
                    JAGONYA ORGANIK
                  </span>
                  <span className="bg-emerald-800 text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                    CIPALI
                  </span>
                </div>
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-widest font-mono">
                  Rest Area KM 164B Tol Cipali · Circular Hub
                </span>
              </div>
            </a>

            {/* Bold Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-extrabold uppercase tracking-wide text-stone-800">
              <a
                href="#produk"
                className="hover:text-emerald-800 transition-colors py-1 flex items-center gap-1"
              >
                <span>Menu Produk</span>
              </a>
              <a
                href="#combo"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToCatalog();
                }}
                className="hover:text-emerald-800 transition-colors py-1 flex items-center gap-1 text-emerald-800"
              >
                <Flame className="w-4 h-4 fill-current text-emerald-700" />
                <span>Kombo Spesial</span>
              </a>
              <a
                href="#alur"
                className="hover:text-emerald-800 transition-colors py-1"
              >
                Rahasia Dapur
              </a>
              <a
                href="#blog"
                className="hover:text-emerald-800 transition-colors py-1"
              >
                Berita & Riset
              </a>
              <a
                href="#lokasi"
                className="hover:text-emerald-800 transition-colors py-1"
              >
                Lokasi & Peta
              </a>
            </nav>

            {/* Action CTA & Cart (Leaf Green Button) */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                aria-label="Buka Keranjang Pesanan"
                className="relative p-2.5 rounded-xl border-2 border-stone-200 text-stone-800 hover:border-emerald-700 hover:text-emerald-800 bg-stone-50 transition-all active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 ? (
                  <span className="absolute -top-2 -right-2 bg-emerald-700 text-white font-black text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    {cartCount}
                  </span>
                ) : null}
              </button>

              {/* Order Now (Leaf Green Signature CTA) */}
              <button
                onClick={handleWaContact}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Sekarang</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100"
                aria-label="Buka Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-800" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-5 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 text-sm font-extrabold uppercase tracking-wide text-stone-800">
            <a
              href="#produk"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>Menu Produk (POC, Kasgot, Maggot)</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </a>
            <a
              href="#produk"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToCatalog();
              }}
              className="px-3 py-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-black flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 fill-current text-emerald-700" />
                <span>Kombo Super Besar & Bucket Hemat</span>
              </span>
              <ChevronRight className="w-4 h-4 text-emerald-700" />
            </a>
            <a
              href="#alur"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>Rahasia Dapur Biokonversi BSF</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>Berita & Jurnal Ilmiah KM 164B</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>Peta Lokasi KM 164B Tol Cipali</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </a>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToCatalog();
              }}
              className="w-full text-center py-3 text-xs font-black uppercase tracking-wider rounded-xl bg-stone-900 text-white hover:bg-black"
            >
              Lihat Seluruh Menu & Kupon
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWaContact();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-wider rounded-xl bg-emerald-800 text-white hover:bg-emerald-900 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp ({WHATSAPP_DISPLAY})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
