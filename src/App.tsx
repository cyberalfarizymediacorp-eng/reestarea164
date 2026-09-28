/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkflowSection } from './components/WorkflowSection';
import { ProductCatalog } from './components/ProductCatalog';
import { BlogSection } from './components/BlogSection';
import { ImpactCalculator } from './components/ImpactCalculator';
import { FaqAndLocation } from './components/FaqAndLocation';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CartItem, Product } from './types';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from './data/mockData';
import { MessageCircle, Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('km164b_eco_cart') || localStorage.getItem('tps164b_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductIdForModal, setSelectedProductIdForModal] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save cart changes
  useEffect(() => {
    try {
      localStorage.setItem('km164b_eco_cart', JSON.stringify(cartItems));
    } catch {
      // LocalStorage errors ignored safely
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`${quantity}x ${product.name} ditambahkan ke keranjang!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleNavigateToWorkflow = () => {
    const el = document.getElementById('alur');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToCatalog = () => {
    const el = document.getElementById('produk');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductFromWorkflow = (productId: string) => {
    setSelectedProductIdForModal(productId);
    const el = document.getElementById('produk');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFloatingWaClick = () => {
    const msg = encodeURIComponent(
      'Halo Admin Rest Area KM 164B Tol Cipali, saya ingin bertanya produk (POC / Kasgot / Maggot Kering) dan informasi pemesanan.'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 selection:bg-emerald-200 selection:text-emerald-950 text-stone-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg border border-stone-800 flex items-center gap-2 animate-in fade-in duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateToCatalog={handleNavigateToCatalog}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={handleNavigateToCatalog}
          onExploreWorkflow={handleNavigateToWorkflow}
        />

        {/* Alur dari PDF / Workflow Section */}
        <WorkflowSection onSelectProduct={handleSelectProductFromWorkflow} />

        {/* Produk yang Dijual (POC 15rb, Kasgot 15rb, Maggot Kering 10rb) */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          selectedProductIdForModal={selectedProductIdForModal}
          onClearSelectedModalProduct={() => setSelectedProductIdForModal(null)}
        />

        {/* Blog Keren & Cepat Viral */}
        <BlogSection onAddToCart={handleAddToCart} />

        {/* Kalkulator Dampak Lingkungan & Ekonomi Sirkular */}
        <ImpactCalculator />

        {/* FAQ, Lokasi KM 164B & Ulasan Pengguna */}
        <FaqAndLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Pill (Within mobile 15% sticky cap) */}
      <aside aria-label="Bantuan WhatsApp" className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2.5 bg-stone-900 text-white text-xs font-bold rounded-full shadow-lg hover:bg-stone-800 transition-transform active:scale-95"
            aria-label="Lihat Keranjang Belanja"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-mono">{totalCartCount}</span>
          </button>
        )}

        <button
          onClick={handleFloatingWaClick}
          aria-label="Chat WhatsApp Official 0812-6651-5635"
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Tanya WA</span>
        </button>
      </aside>
    </div>
  );
}
