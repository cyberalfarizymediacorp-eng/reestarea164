import React, { useState, useRef } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  Sparkles, 
  Download, 
  MessageCircle, 
  Quote, 
  Layers, 
  Palette, 
  Type, 
  Camera, 
  Leaf,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  Instagram
} from 'lucide-react';
import { BlogPost } from '../types';

interface ViralQuoteShareModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

type ThemeId = 'emerald-aurora' | 'obsidian-gold' | 'cyber-lime' | 'paper-press' | 'ocean-teal';
type AspectRatio = 'story' | 'square' | 'portrait';

interface ThemeConfig {
  id: ThemeId;
  name: string;
  badge: string;
  containerBg: string;
  cardBorder: string;
  glowColor: string;
  headerAccent: string;
  headerBadgeBg: string;
  headerBadgeText: string;
  quoteColor: string;
  quoteFont: string;
  quoteMarkColor: string;
  footerBg: string;
  footerBorder: string;
  authorNameColor: string;
  authorRoleColor: string;
  tagBg: string;
  tagText: string;
  watermarkColor: string;
}

const THEMES: Record<ThemeId, ThemeConfig> = {
  'emerald-aurora': {
    id: 'emerald-aurora',
    name: 'Emerald Aurora',
    badge: 'Eco Premium',
    containerBg: 'bg-gradient-to-br from-[#041d13] via-[#063020] to-[#01140c]',
    cardBorder: 'border-emerald-500/30',
    glowColor: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    headerAccent: 'text-emerald-400',
    headerBadgeBg: 'bg-emerald-500/20 border-emerald-500/30',
    headerBadgeText: 'text-emerald-300',
    quoteColor: 'text-emerald-50',
    quoteFont: 'font-editorial',
    quoteMarkColor: 'text-emerald-400/25',
    footerBg: 'bg-emerald-950/60 backdrop-blur-md',
    footerBorder: 'border-emerald-500/20',
    authorNameColor: 'text-white',
    authorRoleColor: 'text-emerald-300/80',
    tagBg: 'bg-emerald-400/15 border-emerald-400/30',
    tagText: 'text-emerald-300',
    watermarkColor: 'text-emerald-400/40'
  },
  'obsidian-gold': {
    id: 'obsidian-gold',
    name: 'Obsidian Gold',
    badge: 'Luxury Editorial',
    containerBg: 'bg-gradient-to-br from-[#0c0a09] via-[#1c1917] to-[#050505]',
    cardBorder: 'border-amber-500/30',
    glowColor: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    headerAccent: 'text-amber-400',
    headerBadgeBg: 'bg-amber-500/20 border-amber-500/30',
    headerBadgeText: 'text-amber-300',
    quoteColor: 'text-amber-50',
    quoteFont: 'font-editorial',
    quoteMarkColor: 'text-amber-400/25',
    footerBg: 'bg-stone-950/70 backdrop-blur-md',
    footerBorder: 'border-amber-500/20',
    authorNameColor: 'text-amber-100',
    authorRoleColor: 'text-amber-300/80',
    tagBg: 'bg-amber-400/15 border-amber-400/30',
    tagText: 'text-amber-300',
    watermarkColor: 'text-amber-400/40'
  },
  'cyber-lime': {
    id: 'cyber-lime',
    name: 'Modern Volt',
    badge: 'Futuristic',
    containerBg: 'bg-gradient-to-br from-[#091512] via-[#0f231e] to-[#040908]',
    cardBorder: 'border-lime-400/40',
    glowColor: 'from-lime-400/25 via-emerald-400/10 to-transparent',
    headerAccent: 'text-lime-300',
    headerBadgeBg: 'bg-lime-400/20 border-lime-400/40',
    headerBadgeText: 'text-lime-300',
    quoteColor: 'text-stone-50',
    quoteFont: 'font-sans font-bold',
    quoteMarkColor: 'text-lime-400/20',
    footerBg: 'bg-black/60 backdrop-blur-md',
    footerBorder: 'border-lime-500/20',
    authorNameColor: 'text-white',
    authorRoleColor: 'text-lime-300/80',
    tagBg: 'bg-lime-400/20 border-lime-400/40',
    tagText: 'text-lime-300 font-bold',
    watermarkColor: 'text-lime-400/50'
  },
  'paper-press': {
    id: 'paper-press',
    name: 'Atelier Press',
    badge: 'Classic Serif',
    containerBg: 'bg-[#faf8f5]',
    cardBorder: 'border-stone-300 shadow-xl',
    glowColor: 'from-stone-300/20 via-transparent to-transparent',
    headerAccent: 'text-emerald-800',
    headerBadgeBg: 'bg-stone-200/80 border-stone-300',
    headerBadgeText: 'text-stone-800',
    quoteColor: 'text-stone-900',
    quoteFont: 'font-serif',
    quoteMarkColor: 'text-emerald-900/15',
    footerBg: 'bg-stone-100/90 backdrop-blur-md',
    footerBorder: 'border-stone-200',
    authorNameColor: 'text-stone-900 font-bold',
    authorRoleColor: 'text-stone-600',
    tagBg: 'bg-emerald-900/10 border-emerald-900/20',
    tagText: 'text-emerald-900 font-semibold',
    watermarkColor: 'text-stone-400'
  },
  'ocean-teal': {
    id: 'ocean-teal',
    name: 'Teal Biome',
    badge: 'Clean Tech',
    containerBg: 'bg-gradient-to-br from-[#04202c] via-[#073642] to-[#01141b]',
    cardBorder: 'border-teal-500/30',
    glowColor: 'from-cyan-500/20 via-teal-500/10 to-transparent',
    headerAccent: 'text-cyan-300',
    headerBadgeBg: 'bg-teal-500/20 border-teal-500/30',
    headerBadgeText: 'text-cyan-200',
    quoteColor: 'text-cyan-50',
    quoteFont: 'font-editorial',
    quoteMarkColor: 'text-cyan-400/20',
    footerBg: 'bg-[#02151d]/70 backdrop-blur-md',
    footerBorder: 'border-teal-500/20',
    authorNameColor: 'text-white',
    authorRoleColor: 'text-cyan-300/80',
    tagBg: 'bg-cyan-400/15 border-cyan-400/30',
    tagText: 'text-cyan-200',
    watermarkColor: 'text-cyan-400/40'
  }
};

export const ViralQuoteShareModal: React.FC<ViralQuoteShareModalProps> = ({ post, isOpen, onClose }) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>('emerald-aurora');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('story');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !post) return null;

  const currentTheme = THEMES[selectedTheme];

  const quoteText = `"${post.viralQuote}"\n\n— Riset & Jurnal Sirkular Rest Area KM 164B Tol Cipali\nArtikel: ${post.title}\nhttps://restarea164b.id`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(quoteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareToWhatsAppStatus = () => {
    const text = encodeURIComponent(
      `"${post.viralQuote}"\n\n` +
      `📖 Kutipan dari: "${post.title}"\n` +
      `📍 Rest Area KM 164B Tol Cipali - Inovasi Sirkular Zero Waste Tol Indonesia.`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Generate PNG image directly via HTML5 Canvas
  const handleDownloadImage = async () => {
    setIsGenerating(true);
    try {
      const width = aspectRatio === 'story' ? 1080 : aspectRatio === 'portrait' ? 1080 : 1080;
      const height = aspectRatio === 'story' ? 1920 : aspectRatio === 'portrait' ? 1350 : 1080;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw background gradient
      let grad = ctx.createLinearGradient(0, 0, width, height);
      if (selectedTheme === 'emerald-aurora') {
        grad.addColorStop(0, '#041d13');
        grad.addColorStop(0.5, '#063020');
        grad.addColorStop(1, '#01140c');
      } else if (selectedTheme === 'obsidian-gold') {
        grad.addColorStop(0, '#0c0a09');
        grad.addColorStop(0.5, '#1c1917');
        grad.addColorStop(1, '#050505');
      } else if (selectedTheme === 'cyber-lime') {
        grad.addColorStop(0, '#091512');
        grad.addColorStop(0.5, '#0f231e');
        grad.addColorStop(1, '#040908');
      } else if (selectedTheme === 'paper-press') {
        grad.addColorStop(0, '#faf8f5');
        grad.addColorStop(1, '#f3ede2');
      } else {
        grad.addColorStop(0, '#04202c');
        grad.addColorStop(0.5, '#073642');
        grad.addColorStop(1, '#01141b');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle lighting circle in top right
      const radialGlow = ctx.createRadialGradient(width * 0.8, height * 0.2, 50, width * 0.8, height * 0.2, width * 0.6);
      if (selectedTheme === 'emerald-aurora') {
        radialGlow.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
        radialGlow.addColorStop(1, 'rgba(16, 185, 129, 0)');
      } else if (selectedTheme === 'obsidian-gold') {
        radialGlow.addColorStop(0, 'rgba(245, 158, 11, 0.25)');
        radialGlow.addColorStop(1, 'rgba(245, 158, 11, 0)');
      } else if (selectedTheme === 'cyber-lime') {
        radialGlow.addColorStop(0, 'rgba(163, 230, 53, 0.3)');
        radialGlow.addColorStop(1, 'rgba(163, 230, 53, 0)');
      } else if (selectedTheme === 'paper-press') {
        radialGlow.addColorStop(0, 'rgba(4, 120, 87, 0.08)');
        radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        radialGlow.addColorStop(0, 'rgba(6, 182, 212, 0.25)');
        radialGlow.addColorStop(1, 'rgba(6, 182, 212, 0)');
      }
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Card Inner Frame
      const margin = width * 0.08;
      const innerW = width - margin * 2;
      const innerH = height - margin * 2;
      const radius = 32;

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(margin, margin, innerW, innerH, radius);
      ctx.lineWidth = 2;
      ctx.strokeStyle = selectedTheme === 'paper-press' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)';
      ctx.stroke();
      ctx.restore();

      // Top Header badge
      ctx.fillStyle = selectedTheme === 'paper-press' ? '#065f46' : '#34d399';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('REST AREA KM 164B TOL CIPALI', margin + 40, margin + 80);

      ctx.fillStyle = selectedTheme === 'paper-press' ? '#78716c' : 'rgba(255,255,255,0.6)';
      ctx.font = '20px sans-serif';
      ctx.fillText('SIRKULAR ECO RESEARCH HUB', margin + 40, margin + 115);

      // Quote symbol watermark
      ctx.save();
      ctx.fillStyle = selectedTheme === 'paper-press' ? 'rgba(6, 95, 70, 0.08)' : 'rgba(255,255,255,0.06)';
      ctx.font = 'italic bold 280px serif';
      ctx.fillText('“', margin + 20, margin + 350);
      ctx.restore();

      // Quote Text (Word wrapping)
      ctx.save();
      ctx.fillStyle = selectedTheme === 'paper-press' ? '#1c1917' : '#ffffff';
      const quoteFontSize = aspectRatio === 'story' ? 52 : aspectRatio === 'portrait' ? 46 : 42;
      ctx.font = `italic 600 ${quoteFontSize}px Georgia, "Newsreader", serif`;
      
      const words = post.viralQuote.split(' ');
      let line = '';
      const maxTextWidth = innerW - 120;
      let textY = margin + (aspectRatio === 'story' ? 480 : 360);
      const lineHeight = quoteFontSize * 1.5;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxTextWidth && n > 0) {
          ctx.fillText(line, margin + 60, textY);
          line = words[n] + ' ';
          textY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, margin + 60, textY);
      ctx.restore();

      // Article Title Reference
      ctx.save();
      ctx.fillStyle = selectedTheme === 'paper-press' ? '#047857' : '#6ee7b7';
      ctx.font = 'bold 24px sans-serif';
      const titleY = textY + 60;
      ctx.fillText(`Dari Artikel: "${post.title.length > 55 ? post.title.slice(0, 52) + '...' : post.title}"`, margin + 60, titleY);
      ctx.restore();

      // Bottom Footer Bar
      const footerY = margin + innerH - 140;
      ctx.strokeStyle = selectedTheme === 'paper-press' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(margin + 40, footerY);
      ctx.lineTo(margin + innerW - 40, footerY);
      ctx.stroke();

      // Author Info
      ctx.fillStyle = selectedTheme === 'paper-press' ? '#1c1917' : '#ffffff';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText(post.author.name, margin + 60, footerY + 50);

      ctx.fillStyle = selectedTheme === 'paper-press' ? '#78716c' : 'rgba(255,255,255,0.7)';
      ctx.font = '20px sans-serif';
      ctx.fillText(post.author.role, margin + 60, footerY + 85);

      // Official Tag
      ctx.fillStyle = selectedTheme === 'paper-press' ? '#065f46' : '#34d399';
      ctx.font = 'bold 22px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('#CipaliZeroWaste', margin + innerW - 60, footerY + 65);
      ctx.textAlign = 'left';

      // Export to trigger download
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `KM164B-Kutipan-${post.id}-${selectedTheme}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export canvas image:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden flex flex-col max-h-[94vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Luxury Brand Accent */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center text-emerald-800">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-stone-900 tracking-tight">Kreator Kartu Story & Status</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold">
                  HD Visual
                </span>
              </div>
              <p className="text-[11px] text-stone-500">
                Visualisasi kutipan inspiratif dari riset sirkular KM 164B Tol Cipali
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-800 hover:bg-stone-200/70 transition-colors"
            title="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Studio Controls Bar */}
        <div className="px-6 py-3 bg-stone-100/70 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Theme Palette Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-stone-600 font-semibold flex items-center gap-1">
              <Palette className="w-3.5 h-3.5 text-stone-500" />
              <span>Tema:</span>
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {(Object.keys(THEMES) as ThemeId[]).map((tId) => {
                const item = THEMES[tId];
                const isActive = selectedTheme === tId;
                return (
                  <button
                    key={tId}
                    onClick={() => setSelectedTheme(tId)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 ${
                      isActive 
                        ? 'bg-stone-900 text-white shadow-xs scale-102' 
                        : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                    }`}
                  >
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{
                        backgroundColor: tId === 'emerald-aurora' ? '#10b981' : 
                                         tId === 'obsidian-gold' ? '#f59e0b' : 
                                         tId === 'cyber-lime' ? '#a3e635' : 
                                         tId === 'paper-press' ? '#047857' : '#06b6d4'
                      }}
                    />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Aspect Ratio Selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-stone-600 font-semibold flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-stone-500" />
              <span>Format:</span>
            </span>
            <div className="inline-flex rounded-lg border border-stone-200 bg-white p-0.5 shadow-2xs">
              <button
                onClick={() => setAspectRatio('story')}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                  aspectRatio === 'story' ? 'bg-emerald-800 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="9:16 Story / Status"
              >
                9:16 Story
              </button>
              <button
                onClick={() => setAspectRatio('portrait')}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                  aspectRatio === 'portrait' ? 'bg-emerald-800 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="4:5 Feed Portrait"
              >
                4:5 Feed
              </button>
              <button
                onClick={() => setAspectRatio('square')}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors ${
                  aspectRatio === 'square' ? 'bg-emerald-800 text-white' : 'text-stone-600 hover:text-stone-900'
                }`}
                title="1:1 Kotak"
              >
                1:1 Square
              </button>
            </div>
          </div>
        </div>

        {/* Content Canvas Preview Area */}
        <div className="p-6 overflow-y-auto bg-stone-900/5 flex flex-col items-center justify-center min-h-[380px]">
          {/* Card Preview Graphic */}
          <div 
            ref={cardRef}
            className={`w-full transition-all duration-300 relative rounded-3xl p-6 sm:p-9 border shadow-2xl overflow-hidden flex flex-col justify-between ${currentTheme.containerBg} ${currentTheme.cardBorder}`}
            style={{
              maxWidth: aspectRatio === 'story' ? '380px' : aspectRatio === 'portrait' ? '420px' : '440px',
              minHeight: aspectRatio === 'story' ? '540px' : aspectRatio === 'portrait' ? '460px' : '400px'
            }}
          >
            {/* Top Glowing Ambient Light */}
            <div className={`absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br ${currentTheme.glowColor} blur-3xl pointer-events-none -z-0 opacity-70`} />
            
            {/* Quote Mark Giant Graphic */}
            <div className="absolute top-10 right-6 pointer-events-none select-none -z-0">
              <span className={`text-9xl font-editorial font-bold leading-none select-none ${currentTheme.quoteMarkColor}`}>
                “
              </span>
            </div>

            {/* Header Badge */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-inner">
                  <Leaf className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <span className={`text-[11px] font-mono font-bold tracking-wider uppercase block ${currentTheme.headerAccent}`}>
                    Rest Area KM 164B Cipali
                  </span>
                  <span className="text-[10px] font-mono opacity-60 text-stone-300 block">
                    Zero Waste Circular Highway
                  </span>
                </div>
              </div>
              <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${currentTheme.headerBadgeBg} ${currentTheme.headerBadgeText}`}>
                {currentTheme.badge}
              </span>
            </div>

            {/* Main Quote Text */}
            <div className="relative z-10 my-auto py-6 sm:py-8">
              <div className="mb-3 flex items-center gap-1.5">
                <Quote className={`w-5 h-5 ${currentTheme.headerAccent} opacity-80`} />
                <span className="text-[11px] font-mono tracking-widest uppercase opacity-70 text-stone-300">
                  Mutiara Pemikiran
                </span>
              </div>
              
              <blockquote className={`text-xl sm:text-2xl leading-relaxed tracking-tight ${currentTheme.quoteFont} ${currentTheme.quoteColor}`}>
                "{post.viralQuote}"
              </blockquote>

              <p className="mt-4 text-xs opacity-75 font-sans flex items-center gap-1.5 text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Riset: {post.title}</span>
              </p>
            </div>

            {/* Footer with Author & Authenticity Seal */}
            <div className={`relative z-10 p-3.5 sm:p-4 rounded-2xl border ${currentTheme.footerBg} ${currentTheme.footerBorder} flex items-center justify-between gap-3`}>
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/30 shadow-xs"
                />
                <div>
                  <p className={`text-xs font-bold leading-tight ${currentTheme.authorNameColor}`}>
                    {post.author.name}
                  </p>
                  <p className={`text-[10px] mt-0.5 font-mono ${currentTheme.authorRoleColor}`}>
                    {post.author.role}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className={`inline-block text-[10px] font-mono px-2.5 py-1 rounded-lg border ${currentTheme.tagBg} ${currentTheme.tagText}`}>
                  #CipaliZeroWaste
                </span>
                <span className="block text-[9px] font-mono opacity-50 text-stone-300 mt-1">
                  restarea164b.id
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Siap diunduh sebagai gambar PNG jernih atau dibagikan instan.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Copy Quote Button */}
            <button
              onClick={handleCopyText}
              className="flex-1 sm:flex-none py-2.5 px-4 text-xs font-semibold text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4 text-stone-500" />}
              <span>{copied ? 'Tersalin!' : 'Salin Teks'}</span>
            </button>

            {/* Download PNG Button */}
            <button
              onClick={handleDownloadImage}
              disabled={isGenerating}
              className="flex-1 sm:flex-none py-2.5 px-4 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs disabled:opacity-50"
            >
              <Download className="w-4 h-4 text-stone-700" />
              <span>{isGenerating ? 'Membuat PNG...' : 'Unduh Kartu PNG'}</span>
            </button>

            {/* Share to WA Button */}
            <button
              onClick={handleShareToWhatsAppStatus}
              className="flex-1 sm:flex-none py-2.5 px-5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Bagikan ke WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
