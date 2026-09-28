import React, { useState } from 'react';
import { FAQS, TESTIMONIALS, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/mockData';
import { 
  ChevronDown, 
  MapPin, 
  Clock, 
  Star, 
  Phone, 
  Navigation, 
  HelpCircle,
  MessageCircle,
  ShieldCheck,
  Flame,
  Award,
  Truck
} from 'lucide-react';

export const FaqAndLocation: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-stone-100 border-b-2 border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Testimonials Proof Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/10 text-emerald-800 text-xs font-black uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-emerald-800" />
              <span>Suara Pelanggan & Petani</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 uppercase font-display">
              TESTIMONI JAGONYA ORGANIK
            </h2>
            <p className="text-sm text-stone-600 font-medium">
              Lihat bagaimana para petani, pecinta tanaman hias, dan peternak ikan membuktikan hasil nyata inovasi Rest Area KM 164B Tol Cipali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border-2 border-stone-200 shadow-md flex flex-col justify-between space-y-4 hover:border-emerald-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic font-medium">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-black text-stone-900 uppercase">{t.name}</p>
                    <p className="text-stone-500 text-[11px] font-medium">{t.role}</p>
                  </div>
                  <span className="text-[11px] font-black text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 font-mono">
                    {t.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Facility Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Facility Location Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-stone-200 p-6 sm:p-8 space-y-6 shadow-md">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-800 text-white text-xs font-black tracking-wider uppercase font-mono mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sentra Produksi & Workshop</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase font-display">
                REST AREA KM 164B TOL CIPALI
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Pusat pengolahan sirkular terpadu terletak di koridor Rest Area KM 164B Tol Cikopo – Palimanan (Arah Jakarta). 
                Dapat dikunjungi langsung untuk pembelian langsung atau studi banding.
              </p>
            </div>

            <div className="space-y-4 text-xs text-stone-700 divide-y divide-stone-100">
              <div className="pt-4 first:pt-0 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-stone-900 uppercase">Alamat Lengkap:</p>
                  <p className="text-stone-600 mt-0.5 leading-relaxed">
                    Rest Area KM 164 Jalur B (Arah Cirebon menuju Jakarta), Jalan Tol Cipali, Kertajati, Kabupaten Majalengka, Jawa Barat 45457.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-stone-900 uppercase">Jam Operasional & Layanan WA:</p>
                  <p className="text-stone-600 mt-0.5 leading-relaxed">
                    Setiap hari: <strong>Buka 24 Jam Non-Stop</strong> (Kunjungan fisik workshop: 08.00 – 17.00 WIB)
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-start gap-3">
                <Truck className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-stone-900 uppercase">Fasilitas Lengkap Rest Area:</p>
                  <p className="text-stone-600 mt-0.5 leading-relaxed">
                    SPBU 24 Jam, Masjid Megah Al-Mu'minun, Food Court Tenant Kuliner, Toilet Eksekutif Gratis, dan Area Parkir Luas.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href="https://maps.google.com/?q=Rest+Area+KM+164B+Tol+Cipali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-900 hover:bg-black text-white font-black text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Halo Admin Rest Area KM 164B Tol Cipali, saya sedang berada di jalan tol dan ingin mampir membeli produk.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Admin WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Frequently Asked Questions (FAQ) Accordion */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-stone-200 p-6 sm:p-8 space-y-5 shadow-md">
            <div className="border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-emerald-800 tracking-wider mb-1">
                <HelpCircle className="w-4 h-4" />
                <span>Paling Sering Ditanyakan</span>
              </div>
              <h3 className="text-2xl font-black text-stone-900 uppercase font-display">
                PERTANYAAN SEPUTAR MENU & ORDER
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border-2 transition-all overflow-hidden ${
                      isOpen ? 'border-emerald-800 bg-emerald-50/30' : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-emerald-800 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-black uppercase font-display">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-emerald-800 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
