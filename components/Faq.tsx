import React, { useState, ReactElement } from 'react';
import RiArrowDownSLine from '../icons/RiArrowDownSLine';

const FaqItem = ({ question, answer, isOpen, toggle }) => (
  <div className='border-b border-slate-500 border-opacity-25'>
    <div onClick={toggle} className='flex justify-between w-full cursor-pointer'>
      <div className='inline-block pb-2'>{question}</div>
      <div className='flex items-center mt-8'>
        {isOpen ? <RiArrowDownSLine className='h-6 w-6 rotate-180' /> : <RiArrowDownSLine className='h-6 w-6' />}
      </div>
    </div>
    {isOpen && <div className='py-4'>{answer}</div>}
  </div>
);

const Faq = ({ children }) => {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const toggleFAQ = (index) => {
    setOpenIndexes((prevIndexes) => {
      const newIndexes = new Set(prevIndexes);
      newIndexes.has(index) ? newIndexes.delete(index) : newIndexes.add(index);
      return newIndexes;
    });
  };

  const faqItems = React.Children.toArray(children).reduce<ReactElement[]>((acc, child, index) => {
    if (React.isValidElement(child) && child.type === Faq.Question) {
      const nextChild = React.Children.toArray(children)[index + 1];
      if (nextChild && React.isValidElement(nextChild) && nextChild.type === Faq.Answer) {
        acc.push(
          <FaqItem
            key={index}
            question={child}
            answer={nextChild}
            isOpen={openIndexes.has(index)}
            toggle={() => toggleFAQ(index)}
          />
        );
      }
    }
    return acc;
  }, []);

  return <div>{faqItems}</div>;
};

Faq.Question = ({ children }) => <>{children}</>;
Faq.Answer = ({ children }) => <>{children}</>;

export default Faq;
