// ============================================
// src/components/ContentSection/ContentSection.jsx
// ============================================
import React from 'react';

const ContentSection = () => {
  const cards = [
    {
      title: 'Immigration Services',
      description: 'Comprehensive immigration solutions for visas, green cards, and citizenship applications.'
    },
    {
      title: 'Business Immigration',
      description: 'Strategic immigration planning for businesses and corporate clients worldwide.'
    },
    {
      title: 'Expert Guidance',
      description: '50 years of experience navigating complex immigration laws and regulations.'
    }
  ];

  return (
    <section className="container mx-auto py-16 px-6">
      <div className="grid grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;