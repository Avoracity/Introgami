import React, { useState } from 'react';
import '../assets/styles/qna.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionHandleToggle: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={`accordion${isOpen ? ' active' : ''}`}>
        <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  };
  
const QnA: React.FC = () => {
  const accordionData = [
    {
      title: 'Accordion 1',
      children: 'Accordion 1 content',
    },
    {
      title: 'Accordion 2',
      children: 'Accordion 2 content',
    },
    {
      title: 'Accordion 3',
      children: 'Accordion 3 content',
    },
    {
      title: 'Accordion 4',
      children: 'Accordion 4 content',
    },
  ];

  return (
    <div>
      {accordionData.map((accordion) => (
        <AccordionHandleToggle title={accordion.title}>{accordion.children}</AccordionHandleToggle>
      ))}
    </div>
  );
};

export default QnA;