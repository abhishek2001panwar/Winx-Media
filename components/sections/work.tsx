'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const storyBeats = [
  {
    type: 'problem',
    text: "You know how Indian weddings generate approximately 47,000 photos, but somehow you can never find the ones where you actually look good?",
    highlight: "47,000 photos",
    icon: "📸"
  },
  {
    type: 'problem',
    text: "And don't even get us started on trying to hunt down pictures of yourself from your cousin's phone while avoiding those unflattering candid shots your uncle took.",
    highlight: "hunt down pictures",
    icon: "🔍"
  },
  {
    type: 'solution',
    text: "Its Forever solved this chaos with features that feel like magic.",
    highlight: "Its Forever",
    icon: "✨"
  },
  {
    type: 'feature',
    text: "Their highly accurate AI facial recognition automatically finds and matches photos of you across all uploads no more playing digital detective to track down that perfect shot.",
    highlight: "AI facial recognition",
    icon: "🎯"
  },
  {
    type: 'feature',
    text: "Meanwhile, photographers can upload their entire collection but choose exactly what guests can download, and couples get the ultimate power move: deciding which photos guests can even see.",
    highlight: "ultimate power move",
    icon: "👑"
  },
  {
    type: 'feature',
    text: "It's like having a personal photo curator who knows your face better than your mirror, plus the privacy controls that let you curate your own wedding story.",
    highlight: "personal photo curator",
    icon: "🖼️"
  },
  {
    type: 'result',
    text: "We didn't just build their social media presence—we made their brand the solution to every couple's biggest wedding photography nightmares: finding the good photos while hiding the questionable ones.",
    highlight: "wedding photography nightmares",
    icon: "💡"
  },
  {
    type: 'result',
    text: "Their Instagram became the place where love stories get organized, shared, and celebrated on YOUR terms.",
    highlight: "on YOUR terms",
    icon: "❤️"
  },
  {
    type: 'impact',
    text: "Now they're not just a QR code app; they're the reason families actually get to keep their precious memories AND their dignity intact.",
    highlight: "precious memories AND dignity",
    icon: "🏆"
  }
];

const StoryBeat: React.FC<{ beat: typeof storyBeats[0] }> = ({ beat }) => {
  const getTypeStyles = () => {
    switch (beat.type) {
      case 'problem':  return 'border-l-4 border-gray-400 bg-gray-50';
      case 'solution': return 'border-l-4 border-black bg-black/5';
      case 'feature':  return 'border-l-4 border-gray-600 bg-gray-100/50';
      case 'result':   return 'border-l-4 border-gray-700 bg-gray-200/30';
      case 'impact':   return 'border-l-4 border-black bg-black/10';
      default:         return 'border-l-4 border-gray-300';
    }
  };

  return (
    <div
      className={`relative p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl ${getTypeStyles()} mb-2 sm:mb-3 md:mb-4`}
    >
      <div className="absolute -left-4 sm:-left-5 md:-left-6 top-4 sm:top-6 md:top-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-base sm:text-xl md:text-2xl shadow-lg border-2 border-gray-200">
        {beat.icon}
      </div>

      <p className="text-sm sm:text-base md:text-md lg:text-lg text-gray-800 leading-relaxed">
        {beat.text.split(beat.highlight).map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && (
              <span className="bg-yellow-200">
                {beat.highlight}
              </span>
            )}
          </React.Fragment>
        ))}
      </p>

      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-white/80 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-600 border border-gray-200">
        {beat.type}
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  return (
    <section className="relative pt-1 sm:pt-2 md:pt-3 lg:pt-4 xl:pt-5 pb-2 overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-black rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-20 w-[600px] h-[600px] bg-gray-800 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <p className="text-gray-600 text-xs sm:text-sm font-sans tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3">
            Our Work
          </p>

          <div className="max-w-5xl mx-auto relative mb-2 sm:mb-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-center text-black">
              Less talking
              <br />
              More showing
            </h2>
          </div>

          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-black mx-auto rounded-full" />
        </div>

        {/* Client showcase card */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-black/5 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-black/5 rounded-tl-full" />

            <div className="relative z-10 text-center">
              <div className="mb-4 sm:mb-6 w-full">
                <div className="relative w-full max-w-2xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 aspect-[16/9]">
                  <Image
                    className='w-full h-full object-contain'
                    src="/image.png"
                    alt="Its Forever App"
                    width={1200}
                    height={675}
                    sizes="(max-width: 608px) 90vw, (max-width: 1200px) 70vw, 600px"
                    priority={true}
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%23f3f4f6' width='1200' height='675'/%3E%3C/svg%3E"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 md:pt-10 border-t border-gray-200">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-black">47K+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 uppercase tracking-wide mt-1">Photos/Wedding</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-black">100%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 uppercase tracking-wide mt-1">AI Accuracy</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-black">∞</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 uppercase tracking-wide mt-1">Memories Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 tracking-tight">The Journey</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">From chaos to clarity, one feature at a time.</p>
          </div>

          <div className="relative pl-6 sm:pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-gray-300 via-gray-500 to-black" />

            <div>
              {storyBeats.map((beat, index) => (
                <StoryBeat key={index} beat={beat} />
              ))}
            </div>
          </div>
        </div>

        {/* Final Impact Section */}
        <div className="max-w-4xl mx-auto m-4 mt-12 sm:mt-16 md:mt-20">
          <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 border-l-4 border-gray-700 bg-gray-200/30 text-black border rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-5xl mb-4 sm:mb-6 tracking-tight">The Result?</h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8">
                A brand that doesn't just solve problems it transforms the entire wedding photography experience. From scattered chaos to organized magic.
              </p>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-white text-black rounded-full text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Full Case Study
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;