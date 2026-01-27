import React from 'react'


function About() {
  return (
    <section className="w-full flex justify-center items-center py-24 bg-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 items-stretch">
        {/* About WinX Media Small Green Box */}
        <div className="flex flex-col items-center justify-center  rounded-2xl shadow-none  bg-[#d6efe9] h-auto md:h-full min-h-[120px] md:mr-6 flex-1 p-6 md:p-10">
          <div className="text-[#00b388] font-bold text-base md:text-3xl px-2 py-1">About WinX Media</div>
        </div>
        {/* First Point Box */}
        <div className="bg-[#f3f3f3] rounded-2xl p-8 md:p-12 flex flex-col shadow-md relative min-h-[240px] flex-1 items-start justify-center">
          {/* Single Dot */}
          <span className="absolute left-6 top-4 w-2 h-2 bg-gray-400 rounded-full" />
          <p className="text-base md:text-lg text-gray-700 mt-4">
            You know that friend who always knows exactly what to say to make everyone love them? That’s us, but for your business. We take brands that are amazing (but somehow invisible online) and turn them into the main character of their industry’s story.
          </p>
        </div>
        {/* Second Point Box */}
        <div className="bg-[#f3f3f3] rounded-2xl p-8 md:p-12 flex flex-col shadow-md relative min-h-[240px] flex-1 items-start justify-center">
          {/* Single Dot */}
          <span className="absolute left-6 top-4 w-2 h-2 bg-gray-400 rounded-full" />
          <p className="text-base md:text-lg text-gray-700 mt-4">
            We don’t just post content and pray, we create digital experiences that make people screenshot, share, and obsess over your brand like it’s their new favorite Netflix series.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About