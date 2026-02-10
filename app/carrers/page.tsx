"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabaseClient";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof joinTeamSchema>;
export const joinTeamSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  role: z.string().min(2, "Role is required"),
  resume: z
    .any()
    .refine((files) => files?.length === 1, "Resume is required")
    .refine((files) => files?.[0]?.type === "application/pdf", {
      message: "Only PDF files allowed",
    }),
});

export default function JoinTeamForm() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(joinTeamSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setError("");


      const file = data.resume[0];
      const timestamp = Date.now();
      const filePath = `${timestamp}_${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const resumeUrl = filePath;

      const { error } = await supabase.from("team_applications").insert({
        
        full_name: data.fullName,
        email: data.email,
        role: data.role,
        resume_url: resumeUrl,
      });

      if (error) throw error;

      setShowSuccess(true);
      reset();
      
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase border border-[#181f7c]/30 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl shadow-lg bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
              Careers
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-transparent bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text">
            Join Our
            <span className="block bg-gradient-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
              Creative Team
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            We're building the future of digital experiences. If you're passionate, 
            talented, and ready to make an impact — we want to hear from you.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Apply Now</h2>
            <p className="text-gray-600">Fill out the form and we'll get back to you within 48 hours</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-700 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition">
              Full Name *
            </label>
            <input
              {...register("fullName")}
              placeholder="John Doe"
              className="w-full px-4 py-4 bg-white/60 backdrop-blur-xl border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none text-gray-900 placeholder-gray-400 shadow-sm"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-2">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition">
              Email Address *
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-4 bg-white/60 backdrop-blur-xl border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none text-gray-900 placeholder-gray-400 shadow-sm"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>

          {/* Role */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition">
              Role *
            </label>
            <input
              {...register("role")}
              placeholder="e.g., Frontend Developer, UI/UX Designer"
              className="w-full px-4 py-4 bg-white/60 backdrop-blur-xl border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none text-gray-900 placeholder-gray-400 shadow-sm"
            />
            {errors.role && (
              <p className="text-red-600 text-sm mt-2">{errors.role.message}</p>
            )}
          </div>

          {/* Resume Upload */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition">
              Resume (PDF) *
            </label>
            <div className="relative">
              <input
                type="file"
                accept="application/pdf"
                {...register("resume")}
                className="w-full px-4 py-4 bg-white/60 backdrop-blur-xl border border-gray-300/50 rounded-xl file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-gradient-to-r file:from-[#181f7c] file:to-[#a34fdc] file:text-white hover:file:from-[#181f7c] hover:file:to-[#a34fdc] file:transition file:shadow-lg cursor-pointer text-gray-600 shadow-sm"
              />
            </div>
            {errors.resume && (
              <p className="text-red-600 text-sm mt-2">{errors.resume.message as string}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#181f7c] to-[#a34fdc] text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#181f7c]/30 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Application...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Submit Application
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            )}
          </button>
        </form>
      </div>

   
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-xl" />
            
            {/* Modal */}
            <div className="relative bg-white/50 backdrop-blur-2xl rounded-3xl shadow-2xl p-12 max-w-lg w-full text-center animate-scale-in border border-white/60">
            <div className="mb-6">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-linear-to-r from-[#181f7c] to-[#a34fdc] mb-6 animate-bounce shadow-xl">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-4xl font-black mb-4 bg-linear-to-r from-[#181f7c] to-[#a34fdc] bg-clip-text text-transparent">
                Application Submitted!
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                Thank you for applying to join our team!
              </p>
              <p className="text-gray-500">
                We'll review your application and get back to you within 48 hours.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Redirecting to home page...
            </div>
            </div>
          </div>
        )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}
