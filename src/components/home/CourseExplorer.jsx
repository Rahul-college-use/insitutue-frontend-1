import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { languages, courses } from '../../data/coursesData';

export default function CourseExplorer() {
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const filteredCourses = selectedLanguage === 'All' 
    ? courses 
    : courses.filter(c => c.lang === selectedLanguage);

  return (
    <section id="courses" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 animate-fadeInUp">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Explore Our Course Programs</h2>
        <p className="text-slate-600 text-lg">Filter courses by language target and discover tailored curriculums designed for high engagement and real-world fluency.</p>
        
        <div className="pt-8 flex flex-wrap justify-center gap-3">
          {languages.map((lang) => (
            <button
              key={lang.name}
              onClick={() => setSelectedLanguage(lang.name)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all transform hover:-translate-y-0.5 ${
                selectedLanguage === lang.name
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course, idx) => (
          <div 
            key={course.id} 
            className="card-hover bg-white border border-slate-200 rounded-2xl overflow-hidden group flex flex-col justify-between"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-indigo-50 to-violet-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-indigo-100">
                  {course.lang}
                </span>
                <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-lg">{course.level}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors line-clamp-2">
                {course.title}
              </h3>
              <div className="grid grid-cols-2 gap-y-3 pt-3 border-t border-slate-100 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-1">⏳ <span>{course.duration}</span></div>
                <div className="flex items-center gap-1">👥 <span>{course.students}</span></div>
                <div className="flex items-center gap-1">⭐ <span>{course.rating}/5.0</span></div>
                <div className="text-emerald-600 font-bold flex items-center gap-1">✓ <span>Cert</span></div>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between bg-slate-50/70 border-t border-slate-100">
              <span className="text-2xl font-black text-indigo-600">{course.price}</span>
              <button className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 font-bold text-sm flex items-center gap-1.5 transition-all px-3 py-2 rounded-lg">
                Enroll <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}