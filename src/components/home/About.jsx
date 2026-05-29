import React from 'react';
import { Check, BookOpen, Users, Globe } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Native speakers with international certifications and 8-12 years of teaching experience'
    },
    {
      icon: BookOpen,
      title: 'Structured Curriculum',
      description: 'CEFR-aligned courses designed for maximum retention and real-world application'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Certifications accepted worldwide for immigration, career advancement, and further studies'
    },
    {
      icon: Users,
      title: 'Micro-Batch Learning',
      description: 'Maximum 8 students per class ensuring personalized attention and active participation'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                About LingoSphere Institute
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2015, LingoSphere Institute is India's most trusted platform for immersive language learning. We've helped 15,000+ professionals, students, and career-changers master languages through our innovative cohort-based approach.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Live Interactive Classes</h4>
                  <p className="text-sm text-slate-600">Real-time conversation with native trainers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Lifetime Recording Access</h4>
                  <p className="text-sm text-slate-600">Rewatch classes and catch up anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">AI-Powered Practice Tools</h4>
                  <p className="text-sm text-slate-600">24/7 personalized pronunciation & accent coaching</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900">Career Growth Support</h4>
                  <p className="text-sm text-slate-600">Interview prep, resume review, placement assistance</p>
                </div>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-indigo-200 hover:shadow-xl transform hover:-translate-y-0.5">
              Learn More About Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slideInRight">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="card-hover bg-white p-6 rounded-2xl border border-slate-100 shadow-md"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
