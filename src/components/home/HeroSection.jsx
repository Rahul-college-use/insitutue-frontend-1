import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32" id="hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-violet-200/20 rounded-full blur-3xl -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full text-indigo-700 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-bounce-soft" />
            Live Interactive Batches Starting This Week
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Master any language, <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Unlock the world.
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join live, immersive cohorts led by certified native experts. Learn to converse fluently with structured tracks designed for career growth, immigration, and global testing.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
              Book a Free Trial Class
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md">
              View Curriculum
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-slideInRight">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-violet-400 rounded-3xl rotate-3 scale-102 opacity-15 blur-2xl" />
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl space-y-6 hover:shadow-3xl transition-shadow">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Next Live Cohort</h3>
                <p className="text-sm text-slate-400">Limited seats available</p>
              </div>
              <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100 animate-bounce-soft">
                92% Full
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5 animate-bounce-soft" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Native CEFR Certified Trainers</h4>
                  <p className="text-xs text-slate-500">Learn authentic accent, idioms, and cultural nuances.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5 animate-bounce-soft" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Comprehensive Exam Prep</h4>
                  <p className="text-xs text-slate-500">Dedicated tracks for IELTS, Goethe-Zertifikat, DELE, and JLPT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}