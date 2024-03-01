import React from 'react'
import {VerticalTimelineElement} from "react-vertical-timeline-component";
const VerticalTimelineItem = ({experience}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #232632' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
               <div className="flex justify-center items-center w-full h-full" >
                   <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                   />
               </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{experience.company_name}</h4>
                <ul className="mt-4 list-disc ml-5 space-y-2">
                    { experience.points.map( (point, index) => (
                        <li
                            key={`point-exp-${index}`}
                            className="text-secondary text-[17px] mt-2"
                        >
                            {point}
                        </li>
                    ) ) }
                </ul>
            </div>
        </VerticalTimelineElement>
    )
}

export default VerticalTimelineItem