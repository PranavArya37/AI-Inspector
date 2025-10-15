
import React from 'react';
import { AccordionItem } from './AccordionItem';

const faqs = [
  {
    question: 'Is the detection 100% accurate?',
    answer: 'No tool can guarantee 100% accuracy. Our AI provides a confidence score based on its analysis. It is highly accurate but should be used as a strong indicator, not an absolute proof.',
  },
  {
    question: 'What image formats are supported?',
    answer: 'We currently support the most popular web image formats: JPG, PNG, and WEBP. We are working on expanding our supported formats in the future.',
  },
  {
    question: 'Is my data safe? Do you store my images?',
    answer: 'Your privacy is paramount. We do not store your images after the analysis is complete. The image is processed in memory and then discarded.',
  },
  {
    question: 'How does the AI detection work?',
    answer: 'The AI model has been trained on a massive dataset of both human-made and AI-generated images. It looks for subtle artifacts that are often invisible to the human eye, such as inconsistent lighting, strange textures, unnatural patterns, and anatomical impossibilities.',
  },
];

export const FAQ: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-slate-400 mt-2">Have questions? We have answers.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} title={faq.question}>
            {faq.answer}
          </AccordionItem>
        ))}
      </div>
    </section>
  );
};
