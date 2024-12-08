import React from 'react';
import { FAQItemProps } from '../types';

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div className="flex overflow-hidden flex-col grow shrink self-stretch my-auto min-w-[240px] w-[393px] max-md:max-w-full">
    <div className="flex overflow-hidden flex-col justify-center p-6 w-full rounded-lg max-w-[491px] max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden gap-5 items-start max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f537f29a15991f02eadb597a130ec11b975f9c93130c83b6654e535331eb4dac?placeholderIfAbsent=true&apiKey=41eacd01fa214ec29fb05b71220b6403"
          className="object-contain shrink-0 aspect-[0.56] w-[9px]"
          alt=""
        />
        <div className="flex flex-col min-w-[240px]">
          <div className="text-base font-bold tracking-normal text-slate-800">
            {question}
          </div>
          <div className="mt-1.5 text-sm tracking-wide leading-5 text-neutral-500">
            {answer}
          </div>
        </div>
      </div>
    </div>
  </div>
);