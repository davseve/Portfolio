import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from "../styles";
import {EarthCanvas} from "./canvas";
import {SectionWrapper} from '../hoc'
import {slideIn} from '../utils/motion'
import particles from '../assets/videos/particles.mp4'

const Contact = () => {
    const formRef = useRef(),
        [form, setForm] = useState({name: '', email: '', message: ''}),
        [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {}

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-8 mt-12"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What should I call you?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary
                            text-white rounded-lg outlined-none border-none font-medium"
                            required
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Where can I reach you?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary
                            text-white rounded-lg outlined-none border-none font-medium"
                            required
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Message</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What is you message?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                            required
                        />
                    </label>

                    <button
                        className="violet-bg py-4 px-6 text-white rounded-lg font-medium hover:bg-primary transition-all duration-300 ease-in-out"
                        type="submit"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[400px] relative"
            >
                <EarthCanvas/>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, 'contact');