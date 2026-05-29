import React from 'react';
import { Users, MessageSquare, Award, Zap, Globe, BookMarked } from 'lucide-react';

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: Users,
      title: 'Micro-Batches (Max 8)',
      description: 'No massive lecture halls. Small interactive round-tables guarantee you get active speaking time every single class.'
    },
    {
      icon: MessageSquare,
      title: 'AI Companion Tools',
      description: '24/7 smart portal access to evaluate speech accent accuracy, generate real-time feedback, and practice pronunciation patterns.'
    },
    {
      icon: Award,
      title: 'Global Certifications',
      description: 'Our certifications align exactly with global benchmarks (CEFR), creating clear pathways for international resumes and student visas.'
    },
    {
      icon: Zap,
      title: 'Live Interaction',
      description: 'Real-time conversation with native speakers. Get corrected instantly and build genuine conversational confidence.'
    },
    {
      icon: Globe,
      title: 'Career Support',
      description: 'Interview preparation, resume review, and placement assistance with our 50+ corporate partners.'
    },
    {
      icon: BookMarked,
      title: 'Lifetime Access',
      description: 'All classes recorded and available forever. Review content at your own pace, anytime.'
    }
  ];

  return (
    <section id="features" className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4 animate-fadeInUp">
          <h2 className="text-3xl font-extrabold sm:text-4xl">The LingoSphere Advantage</h2>
          <p className="text-indigo-100 text-lg">Traditional learning builds rules; we build workflows for intuitive speech and natural confidence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={idx}
                className="card-hover bg-white/5 backdrop-blur border border-white/10 p-8 rounded-2xl space-y-4 group hover:bg-white/10"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="bg-indigo-500/20 group-hover:bg-indigo-500/30 text-indigo-400 p-3 rounded-xl w-fit transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-indigo-200 transition-colors">{benefit.title}</h3>
                <p className="text-indigo-100/80 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}