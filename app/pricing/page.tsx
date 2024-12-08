import React from 'react';
import { PricingCard } from '@/components/Pricing';
import { FAQItem } from '@/components/FaqItem';

const pricingCards = [
  { type: "FREE", price: "0", description: "Organize across all\napps by hand" },
  { type: "STANDARD", price: "9.99", description: "Organize across all\napps by hand", isHighlighted: true },
  { type: "PREMIUM", price: "19.99", description: "Organize across all\napps by hand" }
];

const faqItems = [
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  }
];


export default function PricingPage() {
  // Rest of the original component implementation with the extracted components
  return (
    <div className="flex overflow-hidden flex-col bg-white">

      {/* Pricing Cards */}
      <div className="flex flex-wrap items-end mx-auto">
        {pricingCards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>

      {/* FAQ Section */}
      <div className="flex flex-wrap gap-8 mx-auto">
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>

    </div>
  );
}