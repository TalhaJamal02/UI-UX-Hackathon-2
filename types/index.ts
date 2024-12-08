
export interface PricingCardProps {
  type: string;
  price: string;
  description: string;
  isHighlighted?: boolean;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface TrustedCompanyProps {
  logo: string;
  name: string;
}