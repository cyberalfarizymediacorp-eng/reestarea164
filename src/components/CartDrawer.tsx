import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck, Tag, Check, Flame } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/mockData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
  // Calculate discount if coupon applied
  const discountAmount = appliedCoupon === 'SUPERBESAR5K' ? 5000 : 0;
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  const totalWeightStr = `${items.reduce((sum, item) => {
    if (item.product.id === 'kasgot') return sum + item.quantity * 1000;
    if (item.product.id === 'maggot-kering') return sum + item.quantity * 100;
    if (item.product.id === 'combo-super-tani') return sum + item.quantity * 1500;
    if (item.product.id === 'bucket-super-sirkular') return sum + item.quantity * 1600;
    return sum + item.quantity * 500;
  }, 0) / 1000} kg`;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'SUPERBESAR5K' || clean === 'CIPALIJOSS') {
      setAppliedCoupon(clean);
    } else {
      alert('Kode kupon tidak valid. Coba gunakan: SUPERBESAR5K atau CIPALIJOSS');
    }
  };

  const handleCheckoutViaWhatsApp = () => {
    if (items.length === 0) return;

    let itemsList = items
      .map(
        (i, index) =>
          `${index + 1}. ${i.product.name} (${i.product.weight}) x ${i.quantity} = Rp ${(
            i.product.price * i.quantity
          ).toLocaleString('id-ID')}`
      )
      .join('\n');

    let message =
      `*ORDER MENU REST AREA KM 164B TOL CIPALI*\n\n` +
      `Halo Admin, saya ingin memesan menu:\n` +
      `${itemsList}\n\n` +
      `*Subtotal:* Rp ${rawSubtotal.toLocaleString('id-ID')}\n` +
      (appliedCoupon ? `*Kupon Diskon (${appliedCoupon}):* -Rp ${discountAmount.toLocaleString('id-ID')}\n` : '') +
      `*TOTAL PEMBAYARAN:* Rp ${finalTotal.toLocaleString('id-ID')}\n` +
      `*Estimasi Berat:* ~${totalWeightStr}\n\n` +
      `*Data Pemesan:*\n` +
      `- Nama: ${customerName.trim() || 'Pelanggan'}\n` +
      `- Lokasi / Alamat: ${shippingCity.trim() || 'Ambil di Rest Area KM 164B / Kirim Ekspedisi'}\n` +
      (customerNotes.trim() ? `- Catatan Khusus: ${customerNotes.trim()}\n` : '') +
      `\nMohon info ketersediaan stok & nomor rekening pembayaran resmi. Terima kasih!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Leaf Green Drawer Header */}
          <div className="px-6 py-4 bg-emerald-800 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-lime-300" />
              <div>
                <h3 className="text-base font-black uppercase font-display tracking-tight text-white">
                  Keranjang Pesanan Anda
                </h3>
                <span className="text-[10px] text-lime-200 font-bold uppercase tracking-wider block">
                  Rest Area KM 164B Tol Cipali
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white hover:bg-black/20 transition-colors"
              aria-label="Tutup Keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Items Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12 text-stone-400">
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800 shadow-inner">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <p className="text-base font-black uppercase font-display text-stone-800">Keranjang Masih Kosong</p>
                <p className="text-xs text-stone-500 max-w-xs">
                  Pilih menu Kombo Super Tani, Pupuk Kasgot, atau Maggot Super Protein untuk memulai pesanan.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-emerald-800 rounded-xl hover:bg-emerald-900 transition-colors shadow-md"
                >
                  Buka Menu Produk
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-start gap-3 p-3.5 rounded-2xl border-2 border-stone-200 bg-stone-50 hover:border-emerald-700 transition-colors"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-200 shrink-0 border border-stone-300">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <p className="text-xs font-black text-stone-900 uppercase truncate">
                            {item.product.name}
                          </p>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-1 text-stone-400 hover:text-emerald-800 transition-colors"
                            aria-label={`Hapus ${item.product.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-[11px] text-stone-500 font-mono">
                          {item.product.priceFormatted} / {item.product.unit} ({item.product.weight})
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden text-xs">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2.5 py-1 hover:bg-stone-100 font-black text-stone-700"
                            >
                              -
                            </button>
                            <span className="px-2 font-mono font-bold">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2.5 py-1 hover:bg-stone-100 font-black text-stone-700"
                            >
                              +
                            </button>
                          </div>

                          <span className="text-xs font-black text-emerald-800 font-mono tabular-nums">
                            Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coupon Input Box */}
                <form onSubmit={handleApplyCoupon} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Punya Kode Kupon? (e.g. SUPERBESAR5K)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs font-mono border-2 border-dashed border-stone-300 rounded-xl focus:outline-hidden focus:border-emerald-700 uppercase"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white bg-stone-900 hover:bg-black rounded-xl"
                    >
                      Klaim
                    </button>
                  </div>
                  {appliedCoupon && (
                    <p className="text-[11px] text-emerald-700 font-bold mt-1.5 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Kupon {appliedCoupon} berhasil digunakan!
                    </p>
                  )}
                </form>

                {/* Customer Info */}
                <div className="pt-4 border-t border-stone-200 space-y-2.5">
                  <h4 className="text-xs font-black uppercase tracking-wider text-stone-800">
                    Data Pemesan / Lokasi Pengambilan:
                  </h4>

                  <input
                    type="text"
                    placeholder="Nama Pemesan"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-hidden focus:border-emerald-700"
                  />

                  <input
                    type="text"
                    placeholder="Kota / Alamat Pengiriman (atau ambil di Rest Area KM 164B)"
                    value={shippingCity}
                    onChange={(e) => setShippingCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-hidden focus:border-emerald-700"
                  />

                  <textarea
                    rows={2}
                    placeholder="Catatan tambahan (misal: estimasi tiba di KM 164B pukul 14.00 WIB)"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-hidden focus:border-emerald-700 resize-none"
                  />
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer & WhatsApp Checkout */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t-2 border-stone-200 bg-stone-50 space-y-3">
              <div className="space-y-1 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal Pesanan:</span>
                  <span className="font-mono font-bold tabular-nums">
                    Rp {rawSubtotal.toLocaleString('id-ID')}
                  </span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Diskon Kupon ({appliedCoupon}):</span>
                    <span className="font-mono">-Rp {discountAmount.toLocaleString('id-ID')}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-500">
                  <span>Estimasi Berat:</span>
                  <span className="font-mono">{totalWeightStr}</span>
                </div>
                <div className="pt-2 border-t border-stone-200 flex justify-between text-sm font-black text-stone-900">
                  <span className="uppercase">Total Akhir:</span>
                  <span className="font-mono text-emerald-800 text-lg tabular-nums">
                    Rp {finalTotal.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckoutViaWhatsApp}
                className="w-full py-3.5 px-4 text-xs font-black uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Sekarang ke WA ({WHATSAPP_DISPLAY})</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Langsung Terhubung Loket Resmi KM 164B
                </span>
                <button
                  onClick={onClearCart}
                  className="text-stone-400 hover:text-emerald-800 transition-colors underline"
                >
                  Kosongkan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
