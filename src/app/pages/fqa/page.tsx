'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQData: FAQItem[] = [
  {
    question: 'What is your return policy?',
    answer: 'Our return policy allows you to return items within 30 days of purchase for a full refund or exchange, provided the items are unused and in their original packaging.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping times vary depending on your location. Typically, domestic orders take 3-5 business days, while international orders can take 7-14 business days.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer customer support via email and phone. Our support hours are Monday to Friday, 9 AM to 5 PM EST.',
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier\'s website.',
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier\'s website.',
  },
];

const FAQAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {FAQData.map((item, index) => (
        <div key={index} className="rounded-md shadow-md overflow-hidden">
          <div
            className="bg-gray-100 py-3 px-4 cursor-pointer flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                expandedIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {expandedIndex === index && (
            <div className="bg-white py-3 px-4">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FQAPage = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
      <FAQAccordion />
    </div>
  );
};

export default FQAPage;