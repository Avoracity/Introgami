import React from 'react';
import Trend from '../data/topSixPopular';
import TrendItem from './TrendItem';

function Portfolio() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Trend.map(project => (
               <TrendItem 
                    img_preview={project.img_preview}
                    title={project.title}
                    badges={project.badges}
                    link={project.link} 
                    author={project.author} 
                    date_created={project.date_created} 
                    description={project.description} 
                    likes={project.likes}               />
            ))}
         </div>
      </div>
   )
}

export default Trend;