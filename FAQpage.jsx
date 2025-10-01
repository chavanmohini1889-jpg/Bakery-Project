import React, { useState } from "react";

const faqs = [
  {
    question: "What are your delivery times?",
    answer:
      "We deliver from 9:00 AM to 9:00 PM every day. Same-day delivery is available for orders placed before 5:00 PM."
  },
  {
    question: "What payment options do you accept?",
    answer:
      "We accept cash on delivery, UPI payments, debit/credit cards, and major digital wallets."
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you receive a damaged or incorrect order, please contact us within 24 hours for a replacement or refund. Refunds are processed within 3–5 business days."
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-pink-800 mb-8">
        Frequently Asked Questions
      </h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-5 cursor-pointer border border-pink-200"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-semibold text-pink-700 flex justify-between items-center">
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </h2>
            {openIndex === index && (
              <p className="text-gray-600 mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
