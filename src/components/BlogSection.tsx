import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, WHATSAPP_NUMBER } from '../data/mockData';
import { BlogPost, Product } from '../types';
import { ArticleReaderModal } from './ArticleReaderModal';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ProductFinderWidget } from './ProductFinderWidget';
import { ViralQuoteShareModal } from './ViralQuoteShareModal';
import { 
  Search, 
  Heart, 
  Share2, 
  ArrowUpRight, 
  Flame, 
  Headphones, 
  TrendingUp, 
  Clock, 
  Bookmark, 
  Check, 
  Sparkles,
  BookOpen,
  Eye,
  X,
  Radio,
  SlidersHorizontal,
  Compass
} from 'lucide-react';

interface BlogSectionProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [storyModalPost, setStoryModalPost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  
  // Persistent bookmarks via localStorage
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('km164b_bookmarks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('km164b_bookmarks', JSON.stringify(bookmarkedPosts));
    } catch {
      // Ignored
    }
  }, [bookmarkedPosts]);

  const categories = ['Semua', 'Inovasi Sirkular', 'Tips Tani & Ternak', 'Kisah Inspiratif', '⭐ Tersimpan'];
  const trendingTags = ['Maggot BSF', 'Pupuk Kasgot', 'POC Super', 'Koi Indonesia', 'Zero Waste', 'Aglonema'];

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const toggleBookmark = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const filteredPosts = BLOG_POSTS.filter((post) => {
    let matchesCategory = true;
    if (selectedCategory === '⭐ Tersimpan') {
      matchesCategory = !!bookmarkedPosts[post.id];
    } else if (selectedCategory !== 'Semua') {
      matchesCategory = post.category === selectedCategory;
    }

    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0] || BLOG_POSTS[0];
  const sideTrendingPosts = BLOG_POSTS.filter((p) => p.id !== featuredPost.id).slice(0, 4);

  const handleShareWa = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `🔥 Artikel Menarik dari Rest Area KM 164B Tol Cipali:\n` +
      `"${post.title}"\n\n` +
      `"${post.viralQuote}"\n\n` +
      `Baca selengkapnya & beli pupuk/maggot berkualitas di portal resmi Rest Area KM 164B Cipali!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleFilterByTag = (tag: string) => {
    setSearchQuery(tag);
    setSelectedCategory('Semua');
  };

  return (
    <section id="blog" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Live Monitoring Ticker Bar - Leaf Green Accent */}
        <div className="mb-10 p-3 sm:p-4 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border-2 border-emerald-800">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-black uppercase tracking-wider text-lime-300">
              Live Monitor KM 164B Tol Cipali:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-200 font-mono">
            <span>♻️ <strong>1.480 Kg</strong> Sampah Terolah Hari Ini</span>
            <span aria-hidden="true" className="text-stone-700">|</span>
            <span>🌱 <strong>310 Kg</strong> Kasgot Siap Panen</span>
            <span aria-hidden="true" className="text-stone-700">|</span>
            <span>🧪 Suhu Biopond BSF: <strong>31.2°C</strong> (Optimal)</span>
          </div>

          <div className="hidden lg:block text-[11px] font-mono text-lime-300 font-bold uppercase">
            Jalur B Arah Jakarta
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-stone-200">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800 font-mono">
              <Flame className="w-4 h-4 fill-emerald-800 text-emerald-800" />
              <span>Warta & Jurnal Sirkular</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-500">Rest Area KM 164B Tol Cipali</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight uppercase font-display text-balance leading-tight">
              JURNAL & RISET SIRKULAR KM 164B
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-pretty font-medium">
              Kisah investigasi lapangan, uji sains biokonversi larva BSF, regenerasi mikrobioma tanah, dan formula pakan kontes berprotein 42% produksi mandiri Rest Area KM 164B Tol Cipali.
            </p>
          </div>

          {/* Search Box with Shortcut hint */}
          <div className="w-full md:w-80 space-y-2">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari riset pupuk, koi, BSF..."
                className="w-full pl-9 pr-8 py-2.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-700 shadow-2xs font-medium"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 p-0.5 text-stone-400 hover:text-stone-700"
                  aria-label="Hapus pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] text-stone-500">
              <span className="font-mono text-stone-400 shrink-0">Tren:</span>
              {trendingTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleFilterByTag(tag)}
                  className="hover:text-emerald-800 transition-colors whitespace-nowrap underline underline-offset-2 decoration-stone-300"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Segmented Control & Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl overflow-x-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              let count = 0;
              if (cat === 'Semua') {
                count = BLOG_POSTS.length;
              } else if (cat === '⭐ Tersimpan') {
                count = BLOG_POSTS.filter((p) => bookmarkedPosts[p.id]).length;
              } else {
                count = BLOG_POSTS.filter((p) => p.category === cat).length;
              }

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-emerald-100 text-emerald-900' : 'bg-stone-300/60 text-stone-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-xs text-stone-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-emerald-700" />
              <span>Diperbarui Setiap Minggu</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>Total 20k+ Pembaca</span>
            </span>
          </div>
        </div>

        {/* Main Magazine Layout: Lead Story + Viral Trending Rail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Lead Story (8 cols) */}
          {featuredPost && (
            <div 
              onClick={() => setActiveArticle(featuredPost)}
              className="lg:col-span-8 cursor-pointer rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Media frame with aspect ratio */}
                <div className="relative aspect-16/9 bg-stone-100 overflow-hidden">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />

                  {/* Overlaid badges & metadata */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-emerald-700 text-white text-[11px] font-bold font-mono px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
                      Artikel Utama
                    </span>
                    {featuredPost.audioDuration && (
                      <span className="bg-stone-900/80 backdrop-blur-xs text-emerald-300 text-[11px] font-medium font-mono px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Headphones className="w-3 h-3 text-emerald-400" />
                        <span>{featuredPost.audioDuration}</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setStoryModalPost(featuredPost);
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-stone-900/70 hover:bg-stone-900 text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1 transition-colors"
                      title="Buat Kartu Story"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden sm:inline">Story</span>
                    </button>
                    <button
                      onClick={(e) => toggleBookmark(featuredPost.id, e)}
                      className={`p-2 rounded-lg backdrop-blur-xs transition-colors ${
                        bookmarkedPosts[featuredPost.id]
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-900/60 text-white hover:bg-stone-900'
                      }`}
                      aria-label="Simpan Artikel"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom title overlay on image */}
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2">
                    <div className="flex items-center gap-2 text-xs text-stone-300 font-mono">
                      <span className="text-emerald-300 font-bold">{featuredPost.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold font-editorial text-white leading-tight group-hover:text-emerald-200 transition-colors text-balance">
                      {featuredPost.title}
                    </h3>
                  </div>
                </div>

                {/* Lead Story Body Snippet & Data */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-pretty">
                    {featuredPost.subtitle}
                  </p>

                  {/* Viral Pull Quote Box */}
                  <div className="p-4 sm:p-5 bg-emerald-50/70 border-l-3 border-emerald-600 rounded-r-xl space-y-1">
                    <p className="text-xs font-bold text-emerald-950 font-mono uppercase tracking-wider">
                      Kutipan Utama Riset:
                    </p>
                    <blockquote className="text-sm sm:text-base font-serif italic text-emerald-950 leading-relaxed">
                      "{featuredPost.viralQuote}"
                    </blockquote>
                  </div>

                  {/* Stat Highlights */}
                  {featuredPost.statHighlights && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      {featuredPost.statHighlights.map((stat, idx) => (
                        <div key={idx} className="p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                          <p className="text-lg sm:text-xl font-extrabold text-stone-900 font-display tabular-nums">
                            {stat.value}
                          </p>
                          <p className="text-xs text-stone-500 font-medium">{stat.label}</p>
                        </div>
                      ))}
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 flex flex-col justify-center">
                        <p className="text-xs text-stone-500 font-medium">Taraf Biokonversi</p>
                        <p className="text-xs font-bold text-emerald-800 font-mono">BSF 14 Hari Mandiri</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Lead Story Footer Actions */}
              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-stone-200"
                  />
                  <div className="text-xs">
                    <p className="font-bold text-stone-900">{featuredPost.author.name}</p>
                    <p className="text-stone-500 text-[11px]">{featuredPost.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(featuredPost.id);
                    }}
                    className="p-2 text-stone-500 hover:text-red-600 transition-colors flex items-center gap-1.5 text-xs font-medium"
                    aria-label="Sukai artikel"
                  >
                    <Heart className={`w-4 h-4 ${likedPosts[featuredPost.id] ? 'fill-red-600 text-red-600' : ''}`} />
                    <span className="font-mono tabular-nums">{featuredPost.likes + (likedPosts[featuredPost.id] ? 1 : 0)}</span>
                  </button>

                  <button
                    onClick={(e) => handleShareWa(featuredPost, e)}
                    className="p-2 text-stone-500 hover:text-emerald-700 transition-colors"
                    title="Bagikan ke WhatsApp"
                    aria-label="Bagikan artikel"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-900 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/70 group-hover:bg-emerald-100 transition-colors">
                    <span>Baca Artikel</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Right Trending Rail (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 bg-white rounded-3xl border border-stone-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 font-display">
                    Paling Viral Minggu Ini
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-stone-400">Trending</span>
              </div>

              <div className="divide-y divide-stone-100">
                {sideTrendingPosts.map((post, idx) => (
                  <div
                    key={post.id}
                    onClick={() => setActiveArticle(post)}
                    className="py-3.5 first:pt-0 last:pb-0 cursor-pointer group flex items-start gap-3"
                  >
                    <span className="text-2xl font-black font-display text-stone-300 group-hover:text-emerald-700 transition-colors font-mono tabular-nums shrink-0">
                      0{idx + 1}
                    </span>

                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 font-mono">
                        <span className="text-emerald-800 font-semibold">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-display group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h4>

                      <div className="flex items-center gap-3 pt-1 text-[11px] text-stone-400">
                        <span>{post.readCount || '3.5k dibaca'}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-700 font-medium">Buka →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Highlight Card */}
            <div className="p-6 bg-stone-900 text-white rounded-3xl shadow-xs space-y-3 border border-stone-800">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Edisi Edukasi Petani & Hobiis</span>
              </div>
              <h4 className="text-base font-bold font-display text-white">
                Ingin Pasokan Pupuk atau Pakan Maggot untuk Komunitas Anda?
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Kami melayani webinar gratis, materi riset format PDF, dan sampel uji coba untuk kelompok tani dan komunitas ikan hias.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Halo Tim Edukasi Rest Area KM 164B Tol Cipali, saya ingin mendapatkan panduan teknis budidaya maggot dan brosur pupuk organik.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-950 bg-white hover:bg-stone-100 px-4 py-2 rounded-xl transition-colors"
              >
                <span>Hubungi Redaksi via WA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Before & After Soil Experiment Showcase */}
        <BeforeAfterSlider onAddToCart={onAddToCart} />

        {/* Interactive Quick Recommendation Finder Quiz */}
        <ProductFinderWidget onAddToCart={onAddToCart} />

        {/* Secondary Article Grid: All Stories */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
              Seluruh Artikel & Panduan Praktis ({filteredPosts.length})
            </h3>
            <span className="text-xs text-stone-500">Klik kartu untuk membaca lengkap</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
              const isLiked = likedPosts[post.id];
              const isBookmarked = bookmarkedPosts[post.id];

              return (
                <article
                  key={post.id}
                  onClick={() => setActiveArticle(post)}
                  className="cursor-pointer flex flex-col justify-between rounded-2xl bg-white border border-stone-200/90 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div>
                    {/* Thumbnail Image Frame */}
                    <div className="aspect-16/10 bg-stone-100 overflow-hidden relative">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-2.5 left-2.5 bg-stone-900/85 backdrop-blur-xs text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded">
                        {post.category}
                      </div>

                      {post.trendingRank && (
                        <div className="absolute top-2.5 right-2.5 bg-amber-500 text-stone-950 text-[10px] font-bold font-mono px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          <span>Top #{post.trendingRank}</span>
                        </div>
                      )}

                      <div className="absolute bottom-2 left-2.5 text-white text-[11px] font-mono">
                        {post.date}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono">
                        <span>{post.readTime}</span>
                        <span>{post.readCount || '2.5k dibaca'}</span>
                      </div>

                      <h4 className="text-base font-bold text-stone-900 font-editorial group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed text-pretty">
                        {post.excerpt}
                      </p>

                      {/* Pull quote small excerpt */}
                      <div className="p-2.5 bg-stone-50 border-l-2 border-emerald-600 rounded-r-md text-[11px] italic text-stone-700 line-clamp-2">
                        "{post.viralQuote}"
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-900 flex items-center gap-1 group-hover:underline">
                      Baca Lengkap →
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(post.id);
                        }}
                        className="p-1 text-stone-500 hover:text-red-600 transition-colors flex items-center gap-1 text-xs"
                        aria-label="Sukai artikel"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-600 text-red-600' : ''}`} />
                        <span className="font-mono text-xs tabular-nums">{post.likes + (isLiked ? 1 : 0)}</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setStoryModalPost(post);
                        }}
                        className="p-1 text-stone-500 hover:text-amber-600 transition-colors"
                        title="Buat Kartu Story"
                        aria-label="Buat Kartu Story"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => handleShareWa(post, e)}
                        className="p-1 text-stone-500 hover:text-emerald-700 transition-colors"
                        title="Bagikan ke WhatsApp"
                        aria-label="Bagikan artikel"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Viral Community Banner */}
        <div className="mt-14 bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-emerald-800">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
              Komunitas Sahabat Sirkular Cipali
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Ingin Berdiskusi Langsung dengan Agronomis & Praktisi BSF?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Dapatkan konsultasi pemupukan tanaman hias, ransum pakan ikan koi, serta pemesanan produk olahan langsung dari tim Rest Area KM 164B Tol Cipali.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Halo Admin Rest Area KM 164B, saya ingin bergabung ke kanal edukasi berkebun organik dan biokonversi maggot BSF.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 rounded-xl transition-colors flex items-center gap-2 shadow-xs"
          >
            <span>Gabung Kanal WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Reader Modal */}
      <ArticleReaderModal
        post={activeArticle}
        onClose={() => setActiveArticle(null)}
        onLike={toggleLike}
        isLiked={activeArticle ? !!likedPosts[activeArticle.id] : false}
        onAddToCart={onAddToCart}
      />

      {/* Standalone Story Card Generator */}
      <ViralQuoteShareModal
        post={storyModalPost}
        isOpen={!!storyModalPost}
        onClose={() => setStoryModalPost(null)}
      />
    </section>
  );
};
