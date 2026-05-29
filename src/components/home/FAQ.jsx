import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the ideal class size?',
      answer: 'We maintain micro-batches of maximum 8 students per class. This ensures every learner gets active speaking time and personalized attention from the trainer.'
    },
    {
      question: 'Do I need prior language knowledge?',
      answer: 'No! We have beginner-friendly courses for all languages. Our A1 level tracks are designed for complete beginners with zero prior exposure to the language.'
    },
    {
      question: 'What certificates will I receive?',
      answer: 'You receive our institute certificate aligned with CEFR standards. You can also prepare for and take official exams (IELTS, DELE, Goethe-Zertifikat, JLPT) with our dedicated prep tracks.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: '100% satisfaction guaranteed! If you\'re not satisfied after the first session, we offer a full refund. No questions asked.'
    },
    {
      question: 'How do the AI companion tools work?',
      answer: 'Our AI portal provides 24/7 access to practice pronunciation, accent analysis, real-time feedback, and personalized exercises based on your learning level.'
    },
    {
      question: 'What if I miss a class?',
      answer: 'All classes are recorded and available for lifetime access. You can watch at your own pace and catch up anytime.'
    },
    {
      question: 'Is there a payment plan option?',
      answer: 'Yes! We offer flexible monthly installment plans for all courses. EMI starting from just ₹999/month with zero interest.'
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'Click "Explore Classes" or select any course and hit "Enroll". Complete your registration and book a free trial class to get started!'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Have questions? We've got answers for everything!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors flex items-center justify-between group"
              >
                <span className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-indigo-600 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 animate-fadeInUp">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-600 mb-6">
            Our learning counselors are available 24/7 to help you choose the perfect course
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
            Chat with Us Now
          </button>
        </div>
      </div>
    </section>
  );
}
