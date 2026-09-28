import React, { useState, useEffect, useRef } from 'react';
import { BlogPost, Product } from '../types';
import { 
  X, 
  Heart, 
  Share2, 
  Clock, 
  Calendar, 
  Check, 
  Copy, 
  Sparkles, 
  ShoppingBag, 
  Send, 
  Quote, 
  Play, 
  Pause, 
  Volume2, 
  BookOpen, 
  ArrowRight,
  Flame,
  Leaf,
  Lightbulb,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  Sun,
  Moon,
  Coffee,
  RotateCcw,
  Sparkle
} from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/mockData';
import { ViralQuoteShareModal } from './ViralQuoteShareModal';

interface ArticleReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onLike: (postId: string) => void;
  isLiked: boolean;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  post,
  onClose,
  onLike,
  isLiked,
  onAddToCart
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'extra'>('normal');
  const [fontFamilyMode, setFontFamilyMode] = useState<'serif' | 'sans'>('serif');
  const [readerTheme, setReaderTheme] = useState<'light' | 'sepia' | 'dark'>('light');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [audioTimer, setAudioTimer] = useState(0);
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isShareStoryOpen, setIsShareStoryOpen] = useState(false);
  const [clapCount, setClapCount] = useState(24);
  const [showClapAnimation, setShowClapAnimation] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  
  const [reactions, setReactions] = useState<{ [key: string]: { count: number; active: boolean } }>({
    keren: { count: 412, active: false },
    subur: { count: 689, active: false },
    inspirasi: { count: 320, active: false },
    mantap: { count: 245, active: false }
  });

  const [comments, setComments] = useState<Array<{ name: string; text: string; time: string }>>([
    {
      name: 'Rudi Hermawan (Pekebun Sayur, Lembang)',
      text: 'Luar biasa inisiatifnya! Kemarin saat mudik lewat Rest Area KM 164B sempat melihat instalasi biopond BSF-nya, sangat bersih, tertata rapi, dan tidak ada bau sama sekali.',
      time: '2 jam yang lalu'
    },
    {
      name: 'Dewi Lestari (Urban Farmer, Jakarta Selatan)',
      text: 'Pupuk Kasgot dan POC-nya terbukti ampuh menyuburkan aglonema dan monstera saya di rumah. Tunas baru muncul terus hanya dalam 2 minggu!',
      time: '5 jam yang lalu'
    }
  ]);

  const contentRef = useRef<HTMLDivElement>(null);

  // Web Speech Synthesis Audio or Timer Fallback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioTimer((prev) => {
          if (prev >= 135) {
            setIsPlayingAudio(false);
            if ('speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackRate);
    } else {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, playbackRate]);

  // Clean up speech synthesis on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleSpeech = () => {
    if (!isPlayingAudio) {
      if ('speechSynthesis' in window && post) {
        try {
          window.speechSynthesis.cancel();
          const textToSpeak = `${post.title}. ${post.subtitle}. ${post.content.slice(0, 2).join(' ')}`;
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          utterance.lang = 'id-ID';
          utterance.rate = playbackRate;
          utterance.onend = () => setIsPlayingAudio(false);
          utterance.onerror = () => setIsPlayingAudio(false);
          window.speechSynthesis.speak(utterance);
        } catch {
          // Fallback to internal audio timer
        }
      }
      setIsPlayingAudio(true);
    } else {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
    }
  };

  const handleCycleRate = () => {
    const rates = [1, 1.25, 1.5];
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIdx];
    setPlaybackRate(nextRate);
    if (isPlayingAudio && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
  };

  // Track reading progress
  const handleScroll = () => {
    if (!contentRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll > 0) {
      const progress = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
      setScrollProgress(progress);
    }
  };

  if (!post) return null;

  // Estimated reading end time
  const finishTimeStr = () => {
    const now = new Date();
    const minsToAdd = parseInt(post.readTime) || 4;
    now.setMinutes(now.getMinutes() + minsToAdd);
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} WIB`;
  };

  const formatAudioTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `0${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`"${post.viralQuote}" - Rest Area KM 164B Tol Cipali`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const handleShareWa = () => {
    const text = encodeURIComponent(
      `🔥 Rekomendasi Bacaan Menarik: "${post.title}"\n\n` +
      `${post.excerpt}\n\n` +
      `Kutipan: "${post.viralQuote}"\n\n` +
      `Inovasi pengolahan sirkular di Rest Area KM 164B Tol Cipali jadi pupuk & pakan maggot berprotein 42%! Beli produknya via WhatsApp.`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleClap = () => {
    setClapCount((prev) => prev + 1);
    setShowClapAnimation(true);
    setTimeout(() => setShowClapAnimation(false), 800);
  };

  const handleToggleReaction = (key: string) => {
    setReactions((prev) => {
      const current = prev[key];
      return {
        ...prev,
        [key]: {
          count: current.active ? current.count - 1 : current.count + 1,
          active: !current.active
        }
      };
    });
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments([
      {
        name: 'Pengunjung Pembaca',
        text: commentInput.trim(),
        time: 'Baru saja'
      },
      ...comments
    ]);
    setCommentInput('');
  };

  // Find recommended product based on article content
  const recommendedProduct = post.recommendedProductId
    ? PRODUCTS.find((p) => p.id === post.recommendedProductId) || PRODUCTS[0]
    : PRODUCTS[0];

  const handleDirectWaProduct = (prod: Product) => {
    const msg = encodeURIComponent(
      `Halo Admin Rest Area KM 164B Tol Cipali, saya baru saja membaca artikel "${post.title}" dan tertarik memesan produk ${prod.name} (${prod.priceFormatted}). Mohon infonya ya!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  // Theme styling definitions
  const themeClasses = {
    light: {
      bg: 'bg-white',
      text: 'text-stone-900',
      subtext: 'text-stone-600',
      card: 'bg-stone-50 border-stone-200',
      border: 'border-stone-200',
      header: 'bg-white/95 text-stone-900'
    },
    sepia: {
      bg: 'bg-[#faf6ee]',
      text: 'text-[#382b1c]',
      subtext: 'text-[#6e5843]',
      card: 'bg-[#f2ece0] border-[#decbb8]',
      border: 'border-[#decbb8]',
      header: 'bg-[#faf6ee]/95 text-[#382b1c]'
    },
    dark: {
      bg: 'bg-stone-950',
      text: 'text-stone-100',
      subtext: 'text-stone-400',
      card: 'bg-stone-900 border-stone-800',
      border: 'border-stone-800',
      header: 'bg-stone-950/95 text-white'
    }
  };

  const currentTheme = themeClasses[readerTheme];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-xs">
      <div 
        className={`relative w-full max-w-3xl rounded-3xl shadow-2xl border ${currentTheme.border} ${currentTheme.bg} overflow-hidden max-h-[94vh] flex flex-col transition-colors duration-200`}
        role="dialog"
        aria-modal="true"
      >
        {/* Dynamic Reading Progress Bar at the top edge */}
        <div className="h-1 bg-stone-200/50 w-full overflow-hidden shrink-0">
          <div 
            className="h-full bg-emerald-600 transition-all duration-150 ease-out" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Sticky Header Nav with Reader Tools */}
        <div className={`flex items-center justify-between px-5 sm:px-6 py-3 border-b ${currentTheme.border} ${currentTheme.header} backdrop-blur-md shrink-0`}>
          <div className="flex items-center gap-2.5 text-xs font-mono font-medium">
            <span className="text-emerald-800 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-200/80">
              {post.category}
            </span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span className="opacity-80 hidden sm:inline">{post.readTime} (Est. selesai {finishTimeStr()})</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme switcher */}
            <div className="flex items-center border border-stone-300/60 dark:border-stone-700 rounded-lg p-0.5 bg-stone-100/50 dark:bg-stone-900">
              <button
                onClick={() => setReaderTheme('light')}
                className={`p-1 rounded ${readerTheme === 'light' ? 'bg-white text-stone-900 shadow-2xs' : 'opacity-60 hover:opacity-100'}`}
                title="Mode Terang"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReaderTheme('sepia')}
                className={`p-1 rounded ${readerTheme === 'sepia' ? 'bg-[#ebdcc8] text-[#382b1c] shadow-2xs' : 'opacity-60 hover:opacity-100'}`}
                title="Mode Sepia (Hangat)"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReaderTheme('dark')}
                className={`p-1 rounded ${readerTheme === 'dark' ? 'bg-stone-800 text-white shadow-2xs' : 'opacity-60 hover:opacity-100'}`}
                title="Mode Gelap"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Font Family Mode Switcher */}
            <div className="hidden sm:flex items-center border border-stone-300/60 dark:border-stone-700 rounded-lg p-0.5 bg-stone-100/50 dark:bg-stone-900 text-[11px] font-mono">
              <button
                onClick={() => setFontFamilyMode('serif')}
                className={`px-2 py-0.5 rounded transition-colors ${fontFamilyMode === 'serif' ? 'bg-white dark:bg-stone-800 font-bold shadow-2xs text-emerald-800 dark:text-emerald-300' : 'opacity-60 hover:opacity-100'}`}
                title="Gaya Huruf Editorial Serif Majalah"
              >
                Serif
              </button>
              <button
                onClick={() => setFontFamilyMode('sans')}
                className={`px-2 py-0.5 rounded transition-colors ${fontFamilyMode === 'sans' ? 'bg-white dark:bg-stone-800 font-bold shadow-2xs text-stone-900 dark:text-stone-100' : 'opacity-60 hover:opacity-100'}`}
                title="Gaya Huruf Sans-Serif Modern"
              >
                Sans
              </button>
            </div>

            {/* Font Size Adjuster */}
            <div className="hidden sm:flex items-center border border-stone-300/60 dark:border-stone-700 rounded-lg p-0.5 bg-stone-100/50 dark:bg-stone-900 text-[11px] font-mono">
              <button
                onClick={() => setFontSizeLevel('normal')}
                className={`px-2 py-0.5 rounded ${fontSizeLevel === 'normal' ? 'bg-white dark:bg-stone-800 font-bold shadow-2xs' : 'opacity-60'}`}
                title="Ukuran Standar"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel('large')}
                className={`px-2 py-0.5 rounded ${fontSizeLevel === 'large' ? 'bg-white dark:bg-stone-800 font-bold shadow-2xs' : 'opacity-60'}`}
                title="Ukuran Besar"
              >
                A+
              </button>
            </div>

            {/* Story Card Trigger */}
            <button
              onClick={() => setIsShareStoryOpen(true)}
              className="px-2.5 py-1.5 rounded-lg text-emerald-900 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/70 dark:text-emerald-200 transition-colors flex items-center gap-1.5 text-xs font-bold shadow-2xs"
              title="Buat Kartu Story / Status"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
              <span className="hidden sm:inline">Kartu Story</span>
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg opacity-70 hover:opacity-100 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
              aria-label="Tutup Artikel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reader Area */}
        <div 
          ref={contentRef}
          onScroll={handleScroll}
          className="p-6 sm:p-10 overflow-y-auto space-y-8"
        >
          {/* Article Header & Typography */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs opacity-75 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              {post.readCount && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">{post.readCount}</span>
                </>
              )}
            </div>

            <h1 className={`text-2xl sm:text-4xl lg:text-[40px] font-bold ${
              fontFamilyMode === 'serif' ? 'font-editorial leading-[1.18]' : 'font-display leading-tight'
            } text-balance tracking-tight ${currentTheme.text}`}>
              {post.title}
            </h1>

            <p className={`text-sm sm:text-lg leading-relaxed text-pretty ${
              fontFamilyMode === 'serif' ? 'font-serif italic text-stone-700 dark:text-stone-300' : 'font-normal ' + currentTheme.subtext
            }`}>
              {post.subtitle}
            </p>

            {/* Author Byline Box */}
            <div className={`pt-3 pb-2 border-y ${currentTheme.border} flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-stone-200 dark:border-stone-700"
                />
                <div className="text-xs">
                  <p className={`font-bold ${currentTheme.text}`}>{post.author.name}</p>
                  <p className={currentTheme.subtext}>{post.author.role}</p>
                </div>
              </div>

              {/* Claps / Appreciation Counter */}
              <div className="relative">
                <button
                  onClick={handleClap}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold hover:scale-105 active:scale-95 transition-transform"
                  title="Beri Tepukan Apresiasi untuk Riset Ini"
                >
                  <span>👏</span>
                  <span className="font-mono">{clapCount}</span>
                </button>
                {showClapAnimation && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold font-mono text-emerald-600 animate-bounce">
                    +1 Mantap!
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Web Speech / Narration Widget */}
          <div className="p-4 rounded-2xl bg-stone-900 text-white flex items-center justify-between gap-4 shadow-sm border border-stone-800">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={handleToggleSpeech}
                className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-xs"
                aria-label={isPlayingAudio ? 'Jeda Suara Narasi' : 'Dengarkan Narasi Artikel'}
              >
                {isPlayingAudio ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
              </button>

              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-1.5 text-xs font-bold font-display text-white">
                  <Volume2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">Narasi Audio Berita & Riset</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-stone-400 font-mono">
                  <span>{formatAudioTime(audioTimer)} / 02:15</span>
                  <span>·</span>
                  <span className="text-emerald-400">{isPlayingAudio ? 'Sedang membacakan...' : 'Klik untuk dengarkan'}</span>
                </div>
              </div>
            </div>

            {/* Playback rate speed control & Equalizer */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleCycleRate}
                className="px-2 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-[11px] font-mono font-bold"
                title="Ubah Kecepatan Suara"
              >
                {playbackRate}x
              </button>

              {/* Dancing Waveform */}
              <div className="hidden sm:flex items-end gap-1 h-6">
                {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full bg-emerald-400 transition-all duration-300 ${
                      isPlayingAudio ? 'animate-pulse' : 'opacity-40'
                    }`}
                    style={{
                      height: isPlayingAudio ? `${Math.max(20, (h * ((audioTimer % 5) + 1)) % 100)}%` : `${h * 0.3}%`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Hero Article Image Frame */}
          <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 aspect-16/9 bg-stone-100 dark:bg-stone-900 shadow-2xs">
            <img
              src={post.coverImage}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Viral Pull Quote Highlight */}
          <div className="p-6 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800/80 relative space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5 font-mono">
                  <Quote className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  Kutipan Utama Riset:
                </p>
                <blockquote className="text-base sm:text-lg font-serif italic text-emerald-950 dark:text-emerald-100 leading-relaxed">
                  "{post.viralQuote}"
                </blockquote>
              </div>
              <div className="flex flex-col gap-1.5 shrink-0">
                <button
                  onClick={handleCopyQuote}
                  className="px-3 py-1.5 text-xs font-semibold text-emerald-900 bg-white dark:bg-stone-800 dark:text-white border border-emerald-200 dark:border-stone-700 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-1.5 shadow-2xs"
                  title="Salin Teks Kutipan"
                >
                  {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedQuote ? 'Tersalin' : 'Salin'}</span>
                </button>
                <button
                  onClick={() => setIsShareStoryOpen(true)}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                  title="Buat Story Instagram / WA"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Story</span>
                </button>
              </div>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className={`p-5 sm:p-6 rounded-2xl border ${currentTheme.card} space-y-3`}>
            <h4 className="text-xs font-bold uppercase tracking-wider font-mono opacity-80">
              Poin Kunci & Inti Pelajaran:
            </h4>
            <div className="space-y-2.5">
              {post.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Article Body with Dynamic Chapters, Callout Cards, and Typographic Discipline */}
          <div className={`space-y-6 leading-relaxed text-pretty ${
            fontFamilyMode === 'serif' ? 'font-serif text-[1.05em] leading-[1.8]' : 'font-sans'
          } ${
            fontSizeLevel === 'large' ? 'text-base sm:text-lg' : fontSizeLevel === 'extra' ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
          }`}>
            {(() => {
              let firstProseRendered = false;

              return post.content.map((p, index) => {
                // Chapter Heading
                if (p.startsWith('### ')) {
                  const headingText = p.replace('### ', '');
                  return (
                    <div key={index} className="pt-8 pb-2 border-b border-stone-200/80 dark:border-stone-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                          Bab Pembahasan
                        </span>
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-bold ${
                        fontFamilyMode === 'serif' ? 'font-editorial' : 'font-display'
                      } tracking-tight ${currentTheme.text}`}>
                        {headingText}
                      </h3>
                    </div>
                  );
                }

                // Scientific Lab Note Callout
                if (p.startsWith('🔬 ')) {
                  return (
                    <div 
                      key={index}
                      className="p-5 sm:p-6 rounded-2xl bg-emerald-950/5 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-700/80 shadow-2xs space-y-2 my-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                        <span className="text-base">🔬</span>
                        <span>Catatan Laboratorium & Sains Biokonversi</span>
                      </div>
                      <p className="text-sm sm:text-base italic leading-relaxed text-stone-800 dark:text-stone-200 font-sans">
                        {p.replace('🔬 ', '')}
                      </p>
                    </div>
                  );
                }

                // Pro-Tip / Field Guide Callout
                if (p.startsWith('💡 ')) {
                  return (
                    <div 
                      key={index}
                      className="p-5 sm:p-6 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-700/80 shadow-2xs space-y-2 my-4"
                    >
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                        <span className="text-base">💡</span>
                        <span>Panduan Aplikasi & Khasiat Lapangan</span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed text-stone-800 dark:text-stone-200 font-sans">
                        {p.replace('💡 ', '')}
                      </p>
                    </div>
                  );
                }

                // Bullet point observation items
                if (p.startsWith('• ')) {
                  return (
                    <div key={index} className="flex items-start gap-3 pl-2 sm:pl-4 py-1 text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{p.replace('• ', '')}</span>
                    </div>
                  );
                }

                // Regular prose paragraphs
                const isFirst = !firstProseRendered;
                if (isFirst) {
                  firstProseRendered = true;
                  return (
                    <p 
                      key={index}
                      className="leading-relaxed first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:leading-none first-letter:text-emerald-800 dark:first-letter:text-emerald-400"
                    >
                      {p}
                    </p>
                  );
                }

                return (
                  <p key={index} className="leading-relaxed">
                    {p}
                  </p>
                );
              });
            })()}
          </div>

          {/* Interactive Reactions Bar */}
          <div className={`pt-6 border-t ${currentTheme.border} space-y-3`}>
            <p className="text-xs font-mono font-bold uppercase tracking-wider opacity-80">
              Bagaimana Tanggapan Anda Mengenai Artikel Ini?
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <button
                onClick={() => handleToggleReaction('keren')}
                className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                  reactions.keren.active 
                    ? 'bg-amber-50 border-amber-300 text-amber-900 font-bold dark:bg-amber-950 dark:text-amber-200' 
                    : 'bg-white/50 dark:bg-stone-900 border-stone-200 dark:border-stone-800'
                }`}
              >
                <span>🔥 Keren</span>
                <span className="font-mono text-[11px] tabular-nums">({reactions.keren.count})</span>
              </button>

              <button
                onClick={() => handleToggleReaction('subur')}
                className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                  reactions.subur.active 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold dark:bg-emerald-950 dark:text-emerald-200' 
                    : 'bg-white/50 dark:bg-stone-900 border-stone-200 dark:border-stone-800'
                }`}
              >
                <span>🌱 Bermanfaat</span>
                <span className="font-mono text-[11px] tabular-nums">({reactions.subur.count})</span>
              </button>

              <button
                onClick={() => handleToggleReaction('inspirasi')}
                className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                  reactions.inspirasi.active 
                    ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold dark:bg-blue-950 dark:text-blue-200' 
                    : 'bg-white/50 dark:bg-stone-900 border-stone-200 dark:border-stone-800'
                }`}
              >
                <span>💡 Inspiratif</span>
                <span className="font-mono text-[11px] tabular-nums">({reactions.inspirasi.count})</span>
              </button>

              <button
                onClick={() => handleToggleReaction('mantap')}
                className={`py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                  reactions.mantap.active 
                    ? 'bg-stone-200 border-stone-400 text-stone-900 font-bold dark:bg-stone-800 dark:text-white' 
                    : 'bg-white/50 dark:bg-stone-900 border-stone-200 dark:border-stone-800'
                }`}
              >
                <span>👏 Mantap</span>
                <span className="font-mono text-[11px] tabular-nums">({reactions.mantap.count})</span>
              </button>
            </div>
          </div>

          {/* Contextual Product Recommendation Banner */}
          <div className="p-6 rounded-3xl bg-stone-900 text-white space-y-4 shadow-md border border-stone-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Produk Terkait Artikel Ini
                </span>
                <h4 className="text-base sm:text-lg font-bold font-display text-white">
                  Coba Langsung di Rumah / Kolam Anda
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-stone-800 px-3 py-1 rounded-md self-start sm:self-auto">
                Harga Resmi {recommendedProduct.priceFormatted}
              </span>
            </div>

            <div className="bg-stone-800/90 p-4 rounded-2xl border border-stone-700 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-700 shrink-0">
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-1 text-center sm:text-left">
                <h5 className="text-sm font-bold text-white">{recommendedProduct.name}</h5>
                <p className="text-xs text-stone-300">{recommendedProduct.tagline}</p>
                <p className="text-[11px] text-emerald-300 font-mono">
                  {recommendedProduct.weight} · {recommendedProduct.priceFormatted}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onAddToCart(recommendedProduct, 1)}
                  className="px-4 py-2.5 text-xs font-semibold bg-stone-700 hover:bg-stone-600 text-white rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>+ Keranjang</span>
                </button>
                <button
                  onClick={() => handleDirectWaProduct(recommendedProduct)}
                  className="px-4 py-2.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Beli via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Social Share & Tag Section */}
          <div className={`pt-4 border-t ${currentTheme.border} flex flex-wrap items-center justify-between gap-3`}>
            <div className="flex items-center gap-2">
              <span className="text-xs opacity-70 font-mono">Bagikan:</span>
              <button
                onClick={handleShareWa}
                className="px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors flex items-center gap-1.5 border border-emerald-200/80 shadow-2xs"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => setIsShareStoryOpen(true)}
                className="px-3 py-1.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Format Story</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Tersalin!' : 'Salin Tautan'}</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <span key={t} className="text-xs opacity-60 font-mono">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Reader Comments Section */}
          <div className={`pt-6 border-t ${currentTheme.border} space-y-4`}>
            <h4 className="text-sm font-bold font-display">
              Tanggapan Pembaca & Diskusi ({comments.length})
            </h4>

            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Tulis tanggapan atau pertanyaan untuk agronomis kami..."
                className="flex-1 px-3.5 py-2.5 text-xs border border-stone-300 dark:border-stone-700 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-emerald-700 bg-white dark:bg-stone-900"
              />
              <button
                type="submit"
                className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors flex items-center gap-1.5 shrink-0 shadow-2xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim</span>
              </button>
            </form>

            <div className="space-y-3 pt-1">
              {comments.map((c, i) => (
                <div key={i} className={`p-4 rounded-2xl border ${currentTheme.card} text-xs space-y-1`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{c.name}</span>
                    <span className="text-[11px] opacity-60 font-mono">{c.time}</span>
                  </div>
                  <p className="leading-relaxed opacity-90">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story Graphic Modal */}
      <ViralQuoteShareModal
        post={post}
        isOpen={isShareStoryOpen}
        onClose={() => setIsShareStoryOpen(false)}
      />
    </div>
  );
};
