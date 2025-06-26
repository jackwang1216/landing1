"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="section-padding bg-hero min-h-screen flex items-center justify-center">
      <div className="container-max text-center">
        <div className="max-w-5xl mx-auto">
          {/* Smaller spacer to move content up */}
          <div className="h-12"></div>

          {/* Main headline with improved layout */}
          <div className="mb-14">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-wide max-w-4xl mx-auto">
              <span className="block text-text">AI-Powered</span>
              <span className="block text-gradient leading-normal pb-1">
                Engineering Analysis
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Transform your engineering and construction projects with advanced
              AI that analyzes plans, documents, and workflows to deliver
              actionable insights, improve efficiency, and reduce risk across
              every stage of your project.
            </p>
          </div>

          {/* CTA button centered */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleScrollToContact}
              className="btn-primary flex items-center gap-3 text-lg px-8 py-4"
            >
              Start Analysis
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
