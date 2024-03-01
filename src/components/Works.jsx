import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {github} from '../assets'
import {SectionWrapper} from '../hoc'
import {fadeIn} from '../utils/motion.js'
import {projects} from '../constants'

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            key={`project-${ index }`} >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                            <img src={github} alt="github" className="w-8 h-8 object-contain"/>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="text-secondary mt-3 text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={tag.name}
                            className={`text-secondary bg-secondary text-[12px] px-2 py-1 rounded-full ${ tag.color}`}>
                            #{tag.name}
                        </p>
                    ) ) }
                </div>

            </Tilt>

        </motion.div>
    )
}

const Works = () => {
    return (
        <>
            <motion.div>
                <p className={styles.sectionSubText}>
                    my work
                </p>
                <h2 className={styles.sectionHeadText}>
                    projects
                </h2>
            </motion.div>
            <div className="full-width">
                <motion.p
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    I'm self-taught developer with a passion for creating software that is both beautiful and
                    functional.
                    I have a strong foundation in web development and I am constantly learning new technologies and
                    frameworks to improve my skills. I am a quick learner and a team player who is always looking for
                    new challenges and opportunities to grow.
                </motion.p>
                <div className="mt-20 flex flex-wrap gap-7 justify-center">
                    {projects.map((project, index) => (
                        <ProjectCard index={index} {...project} />
                    ))}
                </div>
            </div>
        </>
    )

}

export default SectionWrapper(Works, "works");