import {motion} from 'framer-motion';
import {styles} from "../styles";
import {staggerContainer} from "../utils/motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView={"show"}
                id={idName}
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} relative max-w-7x1 mx-auto z-0`}
            >
                {'contact' === idName ?
                <video autoPlay muted loop id="myVideo" className="absolute left-0 top-0 z-[-1]">
                    <source src='src/assets/videos/particles.mp4' type="video/mp4"/>
                </video> : '' }

                <span className="hash-dash" id={idName}>

                </span>
                <Component/>
            </motion.section>
        )
    }

export default SectionWrapper;