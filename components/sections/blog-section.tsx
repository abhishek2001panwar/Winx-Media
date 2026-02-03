'use client';
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Clock, Tag } from "lucide-react";
import Navbar from "@/components/navbar";
import Link from "next/link";
/* ─────────── PASTE YOUR NAVBAR HERE ─────────── */
// For preview we drop a minimal stand-in that matches your glass nav style.
// DELETE this and import your real one.

/* ─────────── DATA ─────────── */
const BLOGS = [
  {
    id: 1,
    title: "How to Go Viral on Social Media in 2026",
    short: "Going viral isn't about luck — it's about understanding algorithms and human psychology the right way.",
    tags: ["Viral Strategy", "Algorithms", "Psychology"],
    accent: "#6366F1",   // indigo
    glow: "rgba(99,102,241,0.45)",
    full: [
      "Going viral in 2026 isn't about luck — it's about understanding platform algorithms and human psychology. At WinX Media, we've helped dozens of brands break through the noise, and here's what actually works.",
      "First, prioritize shareability over polish. Audiences respond to authentic, relatable content that sparks emotion or conversation. Raw, behind-the-scenes footage often outperforms overproduced ads because it feels real.",
      "Second, master the hook. You have 1.5 seconds to stop the scroll. Start with a bold statement, unexpected visual, or provocative question. The first frame determines everything.",
      "Third, leverage trend velocity intelligently. Don't jump on every trend — choose ones that align with your brand values and add your unique perspective. Being first matters less than being memorable.",
      "Platform-specific optimization is crucial. What works on TikTok won't work on LinkedIn. Understanding each platform's culture, format preferences, and peak engagement times dramatically increases your viral potential.",
      "Finally, virality without strategy is just noise. At WinX Media, we build viral moments into larger campaigns designed for ROI, not just vanity metrics. Every viral post should ladder up to business objectives.",
      "The truth? Most brands chase virality without understanding their audience. We help you create content that resonates deeply with your target market, making virality a natural byproduct of genuine connection."
    ]
  },
  {
    id: 2,
    title: "Why Most Brands Fail on Social Media",
    short: "Most brands treat social media as a megaphone when it should be a conversation. Here's the fix.",
    tags: ["Brand Strategy", "Engagement", "ROI"],
    accent: "#10B981",   // emerald
    glow: "rgba(16,185,129,0.45)",
    full: [
      "Most brands treat social media as a megaphone when it should be a conversation. That's why they fail. At WinX Media, we've diagnosed the problem repeatedly: brands post without listening, sell without building trust, and measure success by follower counts instead of real business impact.",
      "The first mistake? No clear content strategy. Posting inconsistently or without purpose creates confusion, not community. Your audience needs to know what you stand for and what value you consistently deliver.",
      "Second, brands ignore platform-native behavior. LinkedIn isn't Instagram. TikTok isn't Facebook. Each platform has its own language, format, and culture. Cookie-cutter content across all channels screams \"we don't understand our audience.\"",
      "Third, the obsession with vanity metrics. Ten thousand followers mean nothing if they're not your ideal customers. We've seen accounts with 5,000 engaged followers outperform accounts with 100,000 bots every single time.",
      "Here's what works in 2026: Strategy-led content that solves problems, entertains, or inspires. Authentic storytelling that builds emotional connection. Performance marketing that tracks what actually drives revenue.",
      "At WinX Media, we don't just grow your social presence — we align it with your business goals. We create SEO-optimized content, develop brand narratives that resonate, and design campaigns for measurable ROI.",
      "Success on social media isn't about doing more — it's about doing what matters. Stop posting into the void. Start building a strategy that converts attention into customers."
    ]
  },
 
];

/* ─────────── DETAIL PAGE ─────────── */
function DetailPage({ blog, onBack }) {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 50); return () => clearTimeout(t); }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111", paddingTop: 64 }}>
      {/* YOUR Navbar drops in here */}
      <Navbar />

      <div style={{
        maxWidth: 740, margin: "0 auto", padding: "60px 24px 100px",
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.55s ease, transform 0.55s cubic-bezier(.22,.61,0,1)"
      }}>

        {/* ── Back button — accent coloured per card ── */}
        <button onClick={onBack} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: `${blog.accent}15`,
          border: `1px solid ${blog.accent}40`,
          borderRadius: 28, padding: "9px 20px",
          color: blog.accent, cursor: "pointer",
          fontSize: 13, fontWeight: 700,
          marginBottom: 48,
          transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s"
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${blog.accent}28`;
            e.currentTarget.style.borderColor = blog.accent;
            e.currentTarget.style.boxShadow = `0 0 18px ${blog.glow}`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = `${blog.accent}15`;
            e.currentTarget.style.borderColor = `${blog.accent}40`;
            e.currentTarget.style.boxShadow = "none";
          }}>
          <ArrowLeft size={15} /> Back to Blog
        </button>

        {/* ── Tags row ── */}
        <div style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
          {blog.tags.map(t => (
            <span key={t} style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
              background: `${blog.accent}12`, border: `1px solid ${blog.accent}30`,
              borderRadius: 20, padding: "5px 14px", color: blog.accent
            }}>{t}</span>
          ))}
        </div>

        {/* ── Title ── */}
        <h1 style={{
          fontSize: "clamp(28px,4.2vw,40px)", fontWeight: 800, lineHeight: 1.15,
          color: "#111", marginBottom: 12
        }}>{blog.title}</h1>

        {/* ── Meta ── */}
        <div style={{ display: "flex", gap: 16, color: "rgba(0,0,0,0.38)", fontSize: 13, marginBottom: 40, alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Clock size={14} /> 5 min read</span>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(0,0,0,0.15)" }} />
          <span style={{ color: blog.accent, fontWeight: 600 }}>WinX Media</span>
        </div>

        {/* ── Accent bar ── */}
        <div style={{ height: 3, width: 56, borderRadius: 2, background: blog.accent, boxShadow: `0 0 12px ${blog.glow}`, marginBottom: 44 }} />

        {/* ── Body ── */}
        {blog.full.map((p, i) => (
          <p key={i} style={{
            fontSize: 16, lineHeight: 1.9,
            color: i === 0 ? "rgba(0,0,0,0.88)" : "rgba(0,0,0,0.5)",
            marginBottom: 22, fontWeight: i === 0 ? 500 : 400
          }}>{p}</p>
        ))}

        {/* ── CTA box ── */}
        <div style={{
          marginTop: 60, padding: "40px 36px", borderRadius: 20, textAlign: "center",
          background: "#f5f5fa", border: "1px solid #e8e8f0"
        }}>
          <p style={{ fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 8 }}>Ready to grow smarter?</p>
          <p style={{ fontSize: 14, color: "rgba(0,0,0,0.42)", marginBottom: 24 }}>Let WinX Media build a strategy tailored for your business.</p>
         <Link href="/#contact" >
          <button style={{
            background: "linear-gradient(135deg,#181f7c,#a34fdc)", border: "none", borderRadius: 30,
            padding: "12px 38px", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer",
            boxShadow: "0 4px 24px rgba(163,79,220,0.4)", transition: "opacity 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Let's Talk</button>
         </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────── CARD ─────────── */
function BlogCard({ blog, isHov, shrunk, isSingle, onSelect, onEnter, onLeave }) {
  return (
    <div
      onClick={() => onSelect(blog)}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        /* sizing */
        ...(isSingle
          ? { width: "calc(50% - 7px)", flexShrink: 0 }
          : {
              flex: isHov ? "1.9 0 0%" : shrunk ? "0.55 0 0%" : "1 0 0%",
              transition: "flex 0.42s cubic-bezier(.22,.61,0,1), box-shadow 0.35s, border-color 0.35s",
            }),
        minWidth: 0,

        /* card shell — always black */
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        background: isHov ? "#fafafa" : "#fff",
        border: `2px solid ${isHov ? blog.accent : "#eee"}`,
       

        display: "flex", flexDirection: "column", justifyContent: "space-between",
        minHeight: 290,
        position: "relative",
      }}
    >
      {/* ── glow wash on hover (subtle gradient overlay) ── */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: 20, pointerEvents: "none",
        background: isHov ? `radial-gradient(ellipse at top left, ${blog.glow.replace("0.45","0.12")} 0%, transparent 60%)` : "none",
        transition: "background 0.4s"
      }} />

      {/* ── top accent stripe ── */}
      <div style={{
        height: 3, background: blog.accent, position: "relative", zIndex: 1,
        boxShadow: isHov ? `0 0 10px ${blog.glow}` : "none",
        transition: "box-shadow 0.35s"
      }} />

      {/* ── body ── */}
      <div style={{ padding: "24px 22px 0", flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        {/* number */}
        <span style={{
          fontSize: 11, fontWeight: 800, letterSpacing: 2.5,
          color: isHov ? blog.accent : "rgba(0,0,0,0.28)",
          transition: "color 0.3s", marginBottom: 16
        }}>
          {String(blog.id).padStart(2, "0")}
        </span>

        {/* title */}
        <h3 style={{
          fontSize: isHov ? 19 : 16,
          fontWeight: 700, lineHeight: 1.35,
          color: isHov ? "#111" : "rgba(0,0,0,0.82)",
          marginBottom: 10,
          transition: "font-size 0.35s ease, color 0.3s",
          display: "-webkit-box",
          WebkitLineClamp: shrunk ? 2 : 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>{blog.title}</h3>

        {/* short desc — reveal on hover */}
        <div style={{
          overflow: "hidden",
          maxHeight: isHov ? 78 : 0,
          opacity: isHov ? 1 : 0,
          transition: "max-height 0.4s ease, opacity 0.32s ease",
          marginBottom: isHov ? 4 : 0
        }}>
          <p style={{ fontSize: 13.5, color: "rgba(0,0,0,0.42)", lineHeight: 1.65 }}>{blog.short}</p>
        </div>
      </div>

      {/* ── footer ── */}
      <div style={{ padding: "16px 22px 22px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 10, position: "relative", zIndex: 1 }}>
        {/* tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {blog.tags.slice(0, isHov ? 3 : 2).map(t => (
            <span key={t} style={{
              fontSize: 10, fontWeight: 700, letterSpacing: 0.7, textTransform: "uppercase",
              background: isHov ? `${blog.accent}14` : "rgba(0,0,0,0.05)",
              border: `1px solid ${isHov ? `${blog.accent}35` : "rgba(0,0,0,0.1)"}`,
              borderRadius: 14, padding: "4px 11px",
              color: isHov ? blog.accent : "rgba(0,0,0,0.42)",
              whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 96,
              transition: "all 0.3s"
            }}>{t}</span>
          ))}
        </div>

        {/* arrow circle */}
        <div style={{
          width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: isHov ? blog.accent : "rgba(0,0,0,0.05)",
          border: `1.5px solid ${isHov ? blog.accent : "rgba(0,0,0,0.1)"}`,
          boxShadow: isHov ? `0 0 16px ${blog.glow}` : "none",
          transition: "all 0.3s"
        }}>
          <ArrowRight size={17} color={isHov ? "#fff" : "rgba(0,0,0,0.4)"}
            style={{ transition: "transform 0.3s", transform: isHov ? "translateX(2px)" : "translateX(0)" }} />
        </div>
      </div>
    </div>
  );
}

/* ─────────── GRID ─────────── */
function BlogGrid({ onSelect }) {
  const [hov, setHov] = useState(null);

  const rows = [];
  for (let i = 0; i < BLOGS.length; i += 2) rows.push(BLOGS.slice(i, i + 2));

  return (
    
    <div style={{ minHeight: "100vh", background: "#fff", paddingTop: 64 }}>
      {/* YOUR Navbar drops in here */}
      <Navbar />

      {/* ── Heading ── */}
      <div style={{ textAlign: "center", padding: "72px 20px 48px" }}>
        <p className=" " style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "rgba(0,0,0,0.32)", marginBottom: 16 }}>
          Insights & Strategy
        </p>
        <h1 className="font-serif mt-3" style={{
          fontSize: "clamp(38px,5.5vw,58px)", fontWeight: 800, lineHeight: 1.1,
          background: "linear-gradient(135deg, #181f7c, #a34fdc)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>Our Blog</h1>
        
      </div>

      {/* ── Card rows (2 per row) ── */}
    <div
      className="md:flex"
      style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: "0 22px 100px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {rows.map((row, rowIdx) => {
        const isSingle = row.length === 1;
        const base = rowIdx * 2;
        const rowHov =
        hov !== null && hov >= base && hov < base + row.length
          ? hov - base
          : null;

        return (
        <div
          key={rowIdx}
          style={{
            display: "flex",
            gap: 16,
            ...(isSingle ? { justifyContent: "center" } : {}),
            flexDirection: "row",
          }}
          className="blog-row"
        >
          {row.map((blog, colIdx) => {
            const gi = base + colIdx;
            return (
            <BlogCard
              key={blog.id}
              blog={blog}
              isHov={hov === gi}
              shrunk={rowHov !== null && hov !== gi}
              isSingle={isSingle}
              onSelect={onSelect}
              onEnter={() => setHov(gi)}
              onLeave={() => setHov(null)}
            />
            );
          })}
        </div>
        );
      })}
       <div className="relative mx-auto max-w-3xl text-center">
  

    <h2 className=" mt-10 text-3xl font-serif md:text-4xl font-extrabold text-neutral-900 leading-tight">
      One blog gives clarity.  
      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Reading more gives advantage.
      </span>
    </h2>

   

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link href="/blog" >
      <button
        className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Explore More Blogs
        <span>→</span>
      </button>
        </Link>

    
    </div>
      <style jsx global>{`
        @media (max-width: 700px) {
        .blog-row {
          flex-direction: column !important;
          gap: 16px !important;
        }
        .blog-row > div {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
        }
        }
      `}</style>
    </div>

    
    
    </div>

    </div>
    
    
   

    
  );
}

/* ─────────── ROOT ─────────── */
export default function App() {
  const [sel, setSel] = useState(null);
  if (sel) return <DetailPage blog={sel} onBack={() => setSel(null)} />;
  return <BlogGrid onSelect={setSel} />;
}