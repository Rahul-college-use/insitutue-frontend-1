import React from 'react';

export default function StatsTracker() {
  const stats = [
    { value: '15,000+', label: 'Alumni Trained', icon: '🎓' },
    { value: '98.4%', label: 'Exam Pass Rate', icon: '✅' },
    { value: '50+', label: 'Corporate Partners', icon: '🤝' },
    { value: '4.9★', label: 'Google Rating', icon: '⭐' }
  ];

  return (
    <section id="stats" className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 animate-fadeInUp" style={{ animationDelay: `${i * 100}ms` }}>
              <p className="text-4xl">{stat.icon}</p>
              <p className="text-3xl sm:text-4xl font-extrabold">{stat.value}</p>
              <p className="text-sm font-medium text-indigo-100 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}