'use client';
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, Clock, Tag } from "lucide-react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import BLOGS from "@/lib/blog.ts";
/* ─────────── PASTE YOUR NAVBAR HERE ─────────── */
// For preview we drop a minimal stand-in that matches your glass nav style.
// DELETE this and import your real one.

/* ─────────── DATA ─────────── */


/* ─────────── DETAIL PAGE ─────────── */


/* ─────────── CARD ─────────── */
function BlogCard({ blog, isHov, shrunk, isSingle, onSelect }) {
  return (
    <div
      onClick={() => onSelect(blog)}
      style={{
        /* sizing - simplified since parent handles flex */
        width: "100%",
        
        /* card shell */
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        background: isHov ? "#fafafa" : "#fff",
        border: `2px solid ${isHov ? blog.accent : "#eee"}`,
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-between",
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
  const [hov, setHov] = useState<number | null>(null);

  const rows = [];
  for (let i = 0; i < BLOGS.length; i += 2) rows.push(BLOGS.slice(i, i + 2));

  return (
    <div style={{ minHeight: "100vh", background: "#fff", paddingTop: 64 }}>
      {/* YOUR Navbar drops in here */}
      <Navbar />

      {/* ── Heading ── */}
      <div className="font-serif" style={{ textAlign: "center", padding: "72px 20px 48px" }}>
        <p className="" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "rgba(0,0,0,0.32)", marginBottom: 16 }}>
          Insights & Strategy
        </p>
        <h1  className="text-3xl" style={{
          fontSize: "clamp(38px,5.5vw,58px)", fontWeight: 800, lineHeight: 1.1,
          background: "linear-gradient(135deg, #181f7c, #a34fdc)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>Our Blogs</h1>
      
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
              <div 
                key={blog.id}
                onMouseEnter={() => setHov(gi)}
                onMouseLeave={() => setHov(null)}
                style={{
                  ...(isSingle
                    ? { width: "calc(50% - 7px)", flexShrink: 0 }
                    : {
                        flex: hov === gi ? "1.9 0 0%" : (rowHov !== null && hov !== gi) ? "0.55 0 0%" : "1 0 0%",
                        transition: "flex 1s cubic-bezier(.22,.61,0,1)",
                      }),
                  minWidth: 0,
                }}
              >
                <Link href={`/blog/${blog.id}`} style={{ display: "block", textDecoration: "none" }}>
                  <BlogCard
                    blog={blog}
                    isHov={hov === gi}
                    shrunk={rowHov !== null && hov !== gi}
                    isSingle={isSingle}
                    onSelect={onSelect}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        );
      })}
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
  );
}

/* ─────────── ROOT ─────────── */
export default function App() {
  const [sel, setSel] = useState(null);
  return <BlogGrid onSelect={setSel} />;
}