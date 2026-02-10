"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaHandPointer } from "react-icons/fa";

function Strategy() {
  const [activeTap, setActiveTap] = useState<number | null>(null);

  const handleTap = (index: number) => {
    setActiveTap(activeTap === index ? null : index);
  };

  return (
    <div>
      <div data-scroll data-scroll-speed={4} className="page4">
        {/* ROI Section */}
        <div 
          className={`elem ${activeTap === 0 ? 'active' : ''}`}
          onClick={() => handleTap(0)}
        >
          <img
            src="https://images.unsplash.com/photo-1556740772-1a741367b93e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
            alt="Brand Strategy Discussion"
          />
          <div className="text-div">
            <h1>ROI</h1>
            <h1>ROI</h1>
            {/* Mobile tap indicator */}
            <div className="tap-indicator">
              <div className="tap-button">
                <FaHandPointer className="tap-icon" />
                <span>Tap to reveal</span>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
            alt="Creative Strategy Planning"
          />
        </div>

        {/* Campaigns Section */}
        <div 
          className={`elem ${activeTap === 1 ? 'active' : ''}`}
          onClick={() => handleTap(1)}
        >
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" />
          <div className="text-div uppercase">
            <h1>Campaigns</h1>
            <h1>Campaigns</h1>
            {/* Mobile tap indicator */}
            <div className="tap-indicator">
              <div className="tap-button">
                <FaHandPointer className="tap-icon" />
                <span>Tap to reveal</span>
              </div>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" />
        </div>

        {/* Obsession Section */}
        <div 
          className={`elem ${activeTap === 2 ? 'active' : ''}`}
          onClick={() => handleTap(2)}
        >
          <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop" />
          <div className="text-div">
            <h1>OBSESSION</h1>
            <h1>OBSESSION</h1>
            {/* Mobile tap indicator */}
            <div className="tap-indicator">
              <div className="tap-button">
                <FaHandPointer className="tap-icon" />
                <span>Tap to reveal</span>
              </div>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" />
        </div>
      </div>
    </div>
  );
}

export default Strategy;