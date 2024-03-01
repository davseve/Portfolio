import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';


const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}>
            <div className="w-full flex items-center justify-between max-w-7x1 mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
                    <p className="text-[18px] font-bold text-white cursor-pointer">
                        David Seveloff
                        <span
                            className="sm:block hidden">FullStack Developer
                        </span>
                    </p>
                </Link>
            </div>
            <ul className="list-none hidden sm:flex flex-row gap-10">
                {navLinks.map((link, index) => (
                    <li
                        key={index}
                        className={`${
                            active === link.title
                                ? "text-white"
                                : "text-secondary"
                        } text-[18px] hover:text-white cursor-pointer`}
                    >
                        <a
                            href={`#${link.id}`}
                            onClick={() => {
                                setActive(link.title);
                            }}
                        >{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="min-w-6 h-6 object-contain cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                />
                <div
                    className={`${!toggle ? 'hidden' : 'flex '} p-6 black-gradient absolute top-12 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                >
                    <ul className="list-none flex justify-end items-start flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className={`${
                                    active === link.title
                                        ? "text-white"
                                        : "text-secondary"
                                } font-poppins font-medium cursor-pointer text=[16px]`}
                            >
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar