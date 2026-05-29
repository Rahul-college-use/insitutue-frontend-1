import React from 'react';
import { Award, Globe, Users } from 'lucide-react';

export default function Instructors() {
  const instructors = [
    {
      id: 1,
      name: 'Sarah Chen',
      language: 'English',
      expertise: 'IELTS & Business English',
      certifications: 'CELTA, IELTS Examiner',
      experience: '12 years',
      avatar: '👩‍🏫',
      bio: 'Native British English speaker with extensive exam preparation experience'
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      language: 'Spanish',
      expertise: 'Conversational & DELE',
      certifications: 'DELE Examiner, Native Speaker',
      experience: '10 years',
      avatar: '👨‍🏫',
      bio: 'Madrid-based instructor specialized in realistic conversational Spanish'
    },
    {
      id: 3,
      name: 'Annika Schmidt',
      language: 'German',
      expertise: 'Goethe-Zertifikat & Culture',
      certifications: 'Goethe Institute Certified',
      experience: '8 years',
      avatar: '👩‍💼',
      bio: 'Berlin native bringing authentic German culture into every lesson'
    },
    {
      id: 4,
      name: 'Yuki Tanaka',
      language: 'Japanese',
      expertise: 'JLPT & Conversational',
      certifications: 'JLPT N1, Native Speaker',
      experience: '9 years',
      avatar: '👨‍💻',
      bio: 'Tokyo graduate specializing in modern Japanese for professionals'
    }
  ];

  return (
    <section id="instructors" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Meet Your Expert Trainers
          </h2>
          <p className="text-lg text-slate-600">
            Native speakers with international certifications & proven teaching excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, idx) => (
            <div
              key={instructor.id}
              className="group card-hover bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-40 bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {instructor.avatar}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{instructor.name}</h3>
                  <p className="text-sm text-indigo-600 font-semibold">{instructor.language}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Award className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>{instructor.expertise}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Globe className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>{instructor.certifications}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>{instructor.experience} experience</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed italic">
                  {instructor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
