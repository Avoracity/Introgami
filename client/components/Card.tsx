import React from 'react';
import '../assets/styles/card.css';
import '../assets/styles/global.css';

function Card(){
  return(
    <div>
          <div className="mt-8 grid grid-template-columns-3 grid-template-rows-2 pr-8 pb-8">
        
          <div className="card shadow-lg">
          <img src="../assets/images/plaid-pattern.png" alt="curry" className="h-32 sm:h-48 w-full object-cover"></img>
      <div className="m-4">
      <span className="card-title-name font-bold">Tofu Curry</span>
        <span className="card-title-author block text-gray-500 text-sm">Recipe by Mario</span>
      </div>
      <div className="badge w-full">
        <svg className="inline-block w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span className="card-text">25 mins</span>
      </div>
    </div>

    <div className="card shadow-lg">
      <img src="../assets/images/plaid-pattern.png" alt="curry" className="h-32 sm:h-48 w-full object-cover"></img>
      <div className="m-4">
        <span className="card-title-name font-bold">Tofu Curry</span>
        <span className="card-title-author block text-gray-500 text-sm">Recipe by Mario</span>
      </div>
      <div className="badge w-full">
        <svg className="inline-block w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span className="card-text w-full">25 mins</span>
      </div>
      </div>

      <div className="card shadow-lg">
      <img src="../assets/images/plaid-pattern.png" alt="curry" className="h-32 sm:h-48 w-full object-cover"></img>
      <div className="m-4">
      <span className="card-title-name font-bold">Tofu Curry</span>
        <span className="card-title-author block text-gray-500 text-sm">Recipe by Mario</span>
      </div>
      <div className="badge w-full">
        <svg className="inline-block w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span className="card-text w-full">25 mins</span>
      </div>
    </div>
        </div>
      </div>

    
  )
}
export default Card;
