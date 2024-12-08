import * as React from 'react';
import { PricingCardProps } from '../types';

export const PricingCard: React.FC<PricingCardProps> = ({ type, price, description, isHighlighted }) => {
  const baseClasses = "flex flex-col items-center px-10 py-12 rounded-xl border border-sky-500 border-solid max-md:px-5";
  const bgClasses = isHighlighted ? "bg-slate-800" : "bg-white";
  const textClasses = isHighlighted ? "text-white" : "text-slate-800";
  const descriptionClasses = isHighlighted ? "text-white" : "text-neutral-500";

  return (
    <div className="flex overflow-hidden flex-col items-center min-w-[240px]">
      <div className={`${baseClasses} ${bgClasses}`}>
        <div className={`text-2xl font-bold tracking-normal leading-none ${textClasses}`}>
          {type}
        </div>
        <div className={`mt-9 text-base font-bold tracking-normal leading-6 text-center ${descriptionClasses}`}>
          {description}
        </div>
        <div className="flex overflow-hidden gap-2.5 items-center mt-9 font-bold">
          <div className="self-stretch my-auto text-4xl tracking-wide leading-none text-sky-500">
            {price}
          </div>
          <div className="flex flex-col self-stretch my-auto">
            <div className="text-2xl tracking-normal leading-none text-sky-500">
              $
            </div>
            <div className="text-sm tracking-wide leading-6 text-blue-300">
              Per Month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};