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

/*

- React.ReactNode is a type that represents any valid React element. 
It is a union type that includes elements, strings, and numbers. 
This is used to specify the type of the children prop in the AccordionProps interface.

- React.FC is a generic type that stands for "Function Component". 
It is a shorthand way of defining a function component in React. 
The FC type is a utility type that takes a type parameter to specify the shape of the 
props object that the component expects.

- <AccordionProps> is a type parameter that specifies the shape of the props object
 that the AccordionHandleToggle component expects. In this case, the component expects
  to receive a prop called title which is a string, and a prop called children which 
  can be any valid React element.

- useState(false) is a hook in React that allows a functional component to have state.
 The hook takes an initial state value as an argument and returns an array with two 
 elements: the current state value and a function to update the state. In this case,
  the initial state value is false because the accordion is initially closed.

- The JSX expression <div className={accordion${isOpen ? ' active' : ''}}> sets the class of
 the div element to accordion plus active if the isOpen state variable is truthy, and an empty 
 string if it is falsy. This allows the component to add a class to the div element when the 
 accordion is open, which can be used to style the accordion differently when it is open.

- The JSX expression {isOpen && <div className="accordion-content">{children}</div>} is a
 conditional expression that renders the div element with the class accordion-content and the 
 children prop if the isOpen state variable is truthy, and nothing if it is falsy. This allows 
 the component to only render the content of the accordion when it is open.

- The JSX expression {accordionData.map((accordion) => 
    ( <AccordionHandleToggle title={accordion.title}>{accordion.children}</AccordionHandleToggle>))}
         uses the map() method to iterate over the accordionData
         array and render an AccordionHandleToggle component for each item in the array.
          The component is passed the title and children props from each item in the array.

*/