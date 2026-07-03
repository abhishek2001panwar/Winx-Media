import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  const projects = [
    {
      title: "Aureya",
      subtitle: " Yoga and Wellness Sanctuary ",
      image:
        "/brand/01.jpg",
      tags: [
        "Food & Drink",
        "Brand Strategy",
        "Verbal Identity",
        "Visual Identity",
      ],
      slug: "aureya",
    },
    {
      title: "Sandals & Beaches Resorts",
      subtitle: "Rooted In Caribbean Soul",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3?q=80&w=1600&auto=format&fit=crop",
      tags: ["Travel", "Hospitality", "Visual Identity", "Branding"],
      slug: "sandals-and-beaches-resorts",
    },
    {
      title: "House Of Bliss",
      subtitle: "Luxury Wellness Retreat",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
      tags: ["Luxury", "Website", "Creative Direction", "Brand Identity"],
      slug: "house-of-bliss",
    },
    {
      title: "Studio Nova",
      subtitle: "Premium Digital Experience",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop",
      tags: ["Agency", "UI/UX", "Creative"],
      slug: "studio-nova",
    },
    {
      title: "Aurora Fashion",
      subtitle: "Minimal Luxury Identity",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop",
      tags: ["Fashion", "Branding", "Campaign"],
      slug: "aurora-fashion",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-black min-h-screen px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Heading */}

          <div className="py-20">
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontWeight: 400,
              }}
              className="font-serif text-5xl md:text-6xl font-regular  max-w-4xl"
            >
              Every brand has a story-we transform it into a powerful identity
              that inspires trust.
            </h2>
          </div>

          {/* Top Row */}

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Large Card */}

            <div className="lg:col-span-2 group cursor-pointer group  transition-all duration-500 hover:-translate-y-2">
              <Link
                href={`/portfolio/${projects[0].slug}`}
                className="block group"
              >
                <div className="relative h-[650px] rounded-[28px] overflow-hidden group">
                  <Image
                    src={projects[0].image}
                    alt=""
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                  />
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
                      <ArrowUpRight
                        className="text-white transition-transform duration-500 group-hover:rotate-45"
                        size={22}
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="mt-6">
                <h2 className="text-3xl font-semibold">{projects[0].title}</h2>

                <p className="text-neutral-400 text-xl mt-2">
                  {projects[0].subtitle}
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-neutral-700 rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Small Card */}

            <div className="group cursor-pointer">
              <div className="relative h-[470px] rounded-[28px] overflow-hidden">
                <Image
                  src={projects[1].image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-semibold">{projects[1].title}</h2>

                <p className="text-neutral-400 text-lg mt-2">
                  {projects[1].subtitle}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {projects[1].tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-neutral-700 rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Card */}

          <div className="group cursor-pointer">
            <div className="relative h-[520px] rounded-[32px] overflow-hidden">
              <Image
                src={projects[2].image}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-10 left-10">
                <h2 className="text-5xl font-bold">{projects[2].title}</h2>

                <p className="text-xl text-neutral-300 mt-3">
                  {projects[2].subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {projects[2].tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-neutral-700 rounded-full px-5 py-2 hover:bg-white hover:text-black transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Row */}

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Small */}

            <div className="group cursor-pointer">
              <div className="relative h-[450px] rounded-[28px] overflow-hidden">
                <Image
                  src={projects[3].image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-semibold">{projects[3].title}</h2>

                <p className="text-neutral-400 mt-2">{projects[3].subtitle}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {projects[3].tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-neutral-700 rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Large */}

            <div className="lg:col-span-2 group cursor-pointer">
              <div className="relative h-[620px] rounded-[28px] overflow-hidden">
                <Image
                  src={projects[4].image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <h2 className="text-3xl font-semibold">{projects[4].title}</h2>

                <p className="text-neutral-400 text-xl mt-2">
                  {projects[4].subtitle}
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  {projects[4].tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-neutral-700 rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
