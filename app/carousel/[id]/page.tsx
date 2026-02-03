'use client';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { FaInstagram, FaWordpress } from "react-icons/fa";
import { caseStudiesData } from "@/lib/caseStudiesData";

const tagIcons = {
  Instagram: FaInstagram,
  WordPress: FaWordpress,
};

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = await params;
  const caseStudy = caseStudiesData.find((item) => item.slug === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Case Study Not Found</h1>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Back Button - Fixed */}
      <motion.button
        onClick={() => router.back()}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-gray-900 shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold">Back</span>
      </motion.button>

      {/* Hero Section - Compact */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-60">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(168,85,247,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(236,72,153,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, rgba(168,85,247,0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-2 mb-4"
          >
            {caseStudy.tags.map((tag) => {
              const Icon = tagIcons[tag as keyof typeof tagIcons];
              return (
                <span
                  key={tag}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-md border border-gray-200 text-gray-900 text-xs font-semibold"
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {tag}
                </span>
              );
            })}
          </motion.div>

          {/* Title - Smaller */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 font-serif leading-tight"
          >
            {caseStudy.title}
          </motion.h1>

          {/* Subtitle - Smaller */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 mb-6 font-light max-w-3xl"
          >
            {caseStudy.subtitle}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </section>

      {/* Hero Image - Smaller */}
      <section className="relative max-w-4xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-[300px] sm:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </section>

      {/* Content Grid - Compact */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                The Story
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* Challenge */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm">!</span>
                The Challenge
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">✦</span>
                Our Solution
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Results */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-5 font-serif">
                Results & Impact
              </h3>
              <div className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed flex-1">
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-r from-[#181f7c] to-[#a34fdc] rounded-xl p-6 text-center shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-sm text-white/90 mb-4">
                Let's create something amazing together
              </p>
              <button
                onClick={() => router.push('/#contact')}
                className="w-full px-6 py-3 bg-white text-purple-600 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get In Touch
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation - Compact */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => router.push('/client')}
            className="flex-1 px-6 py-3 bg-white rounded-xl border border-gray-200 text-gray-900 hover:shadow-lg transition-all duration-300 font-semibold group"
          >
            <span className="flex items-center justify-center gap-2">
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        
        </motion.div>
      </section>
    </div>
  );
}