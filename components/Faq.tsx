import React, { useState, ReactElement, useEffect } from 'react';
import RiArrowDownSLine from './icons/RiArrowDownSLine';
import { useRouter } from 'next/router';

// faq item that you can toggle
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

// functionality for automatic unfolding of a FAQ item if it uses hash link
const generateSlug = (text) => {
  return text.toLowerCase()
             .replace(/[^\w ]+/g, '')
             .replace(/ +/g, '-');
};

// helper function for extracting id from a heading element
const extractTextContent = (element: React.ReactNode): string => {
  if (typeof element === 'string') {
    return element;
  }

  if (React.isValidElement(element)) {
    // Type assertion to treat element.props as any
    const children = React.Children.toArray((element.props as any).children);
    return children.map(child => extractTextContent(child)).join('');
  }

  return '';
};


const Faq = ({ children }) => {
  const [openIndexes, setOpenIndexes] = useState(new Set());
  const router = useRouter();

  // if link contains a hash, automatically unfold that FAQ item
  useEffect(() => {
    if (router.asPath.includes('#')) {
      const hash = router.asPath.split('#')[1];
      React.Children.forEach(children, (child, index) => {
        if (React.isValidElement(child) && child.type === Faq.Question) {
          // Extract text content from the child
          const questionText = extractTextContent(child);
          const slug = generateSlug(questionText);
          if (slug === hash) {
            setOpenIndexes(new Set([index]));
          }
        }
      });
    }
  }, [children, router.asPath]);

  // manually toggling FAQ items
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
