import { motion } from 'framer-motion';

import { styles} from '../styles.js';
import { ComputersCanvas } from './canvas';
import autoprefixer from "autoprefixer";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mxs-autoprefixer">
        <div className={`${styles.paddingX} absolute inset-0 top-3 max-w-7x1 mx-auto flex flex-row items-stars gap-5`}>
            <div className="flex flex-col items-center mt-5">
                {/*circle*/}
                <div className="w-5 h-5 bg-primary rounded-full violet-bg" />
                {/*line*/}
                <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
                <h1 className={`${styles.heroHeadText} text-5xl text-white font-bold`}>
                    Hi, Im <span className="violet-text">David</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    I am a <span className="violet-text">FullStack Developer</span>

                </p>
            </div>
        </div>
        <ComputersCanvas />
        <div className="absolute xs:bottom-25 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items items-start p-2">
                    <div className="mouse-scroll w-3 h-3 bg-secondary rounded-full"></div>
                </div>
            </a>
        </div>
    </section>
  )
}

export default Hero