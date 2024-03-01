import React from 'react';
import ServiceCard from './ServiceCard';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import {SectionWrapper} from "../hoc";

const About = () => {
    return (
        <>
            <motion.div>
                <p className={styles.sectionSubText}>
                    Introduction
                </p>
                <h2 className={styles.sectionHeadText}>
                    Overview
                </h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Highly seasoned Web Developer with a proven track record of success in leading roles within product companies and the dynamic higher education sector. Proficient in crafting seamless User Experiences, leveraging a diverse skill set encompassing PHP, React.js, JavaScript, MySQL, CSS, WordPress, Bash scripting, and CI/CD implementation. Adept at overseeing release processes as part of release ownership responsibilities.
            </motion.p>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                My expertise extends to Nest.js and MongoDB, adding depth to my capabilities in backend development and database management. Additionally, I bring hands-on experience in Bash scripting for automation and efficiency, as well as a solid understanding of continuous integration and continuous deployment practices to streamline development workflows.
            </motion.p>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                With a PHP Developer specialization in Front-end development from Appleseeds Academy and a Bachelor of Arts in Mass and Digital Communication from Sapir Academic College, I am committed to delivering top-tier solutions while driving innovation in web development.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {
                    services.map( (service, index) => (
                        <ServiceCard index={index} {...service} />
                    ) )
                }
            </div>
        </>
    )
}

export default SectionWrapper( About, "about" )