'use client';

import { useEffect, useState } from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import BLOGS from "@/lib/blog.ts";

export default function BlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [vis, setVis] = useState(false);

  const blog = BLOGS.find(b => b.id === Number(id));

  useEffect(() => {
    setVis(true);
  }, []);

  if (!blog) {
    return <div className="p-20 text-center">Blog not found</div>;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#fff", paddingTop: 64 }}>
      <Navbar />

      <div
        style={{
          maxWidth: 740,
          margin: "0 auto",
          padding: "60px 24px 100px",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "0.55s ease",
        }}
      >
        {/* Back */}
        <button
          onClick={() => router.push("/#blog")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: `${blog.accent}15`,
            border: `1px solid ${blog.accent}40`,
            borderRadius: 28,
            padding: "9px 20px",
            color: blog.accent,
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 48,
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={15} /> Back to Blog
        </button>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {blog.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 11,
              fontWeight: 700,
              background: `${blog.accent}12`,
              border: `1px solid ${blog.accent}30`,
              borderRadius: 20,
              padding: "5px 14px",
              color: blog.accent
            }}>
              {tag}
            </span>
          ))}
        </div>

        <h1 style={{ fontSize: 40, fontWeight: 800, margin: "20px 0" }}>
          {blog.title}
        </h1>

        <div style={{ color: "rgba(0,0,0,0.4)", marginBottom: 40 }}>
          <Clock size={14} /> 5 min read · WinX Media
        </div>

        {blog.full.map((p, i) => (
          <p key={i} style={{
            fontSize: 16,
            lineHeight: 1.9,
            marginBottom: 22,
            color: i === 0 ? "#111" : "rgba(0,0,0,0.55)"
          }}>
            {p}
          </p>
        ))}

        {/* CTA */}
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
