import React from 'react'
import {motion} from 'framer-motion'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {styles} from '../styles'
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc'
import {textVariant} from '../utils/motion'
import VerticalTimelineItem from './VerticalTimelineItem'

import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className={styles.sectionSubText}>
                    What I have done so far?
                </p>
                <h2 className={styles.sectionHeadText}>
                    Work Experience
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {
                        experiences.map((experience, index) => (
                            <VerticalTimelineItem key={index} experience={experience} />
                        ))
                    }
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "experience")