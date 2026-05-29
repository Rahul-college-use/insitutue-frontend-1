import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Business Consultant, Delhi',
      course: 'Business English',
      rating: 5,
      text: 'Transformed my career. The personalized feedback and live interaction made all the difference. My IELTS score improved to 8.5!',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Marco Rossi',
      role: 'Software Engineer, Bangalore',
      course: 'Advanced Spanish',
      rating: 5,
      text: 'Best language learning experience I\'ve had. The native trainers teach real conversational Spanish, not just textbook rules.',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Lisa Mueller',
      role: 'Marketing Executive, Mumbai',
      course: 'German A1 to B1',
      rating: 5,
      text: 'The small batch model ensures everyone gets speaking time. I went from zero to conversational in 3 months!',
      avatar: '👩‍🔬'
    },
    {
      id: 4,
      name: 'Arjun Verma',
      role: 'Student, Hyderabad',
      course: 'Japanese N5 - N4',
      rating: 5,
      text: 'The AI companion tools are game-changers. Practice pronunciation whenever I want and get instant feedback. Highly recommended!',
      avatar: '👨‍🎓'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Success Stories from Our Learners
          </h2>
          <p className="text-lg text-slate-600">
            Real results from real students who transformed their language skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="card-hover bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-xs text-indigo-600 font-semibold mt-1">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
