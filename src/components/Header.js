import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'
import { AiOutlineHome, AiFillThunderbolt } from 'react-icons/ai';
import { MdOutlineSchool, MdWorkOutline } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Header = () => {
    return (
        <nav>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500} title="Accueil"><AiOutlineHome /></Link>
            <Link to="training" spy={true} smooth={true} offset={-2} duration={500} title="Formations"><MdOutlineSchool /></Link>
            <Link to="skills" spy={true} smooth={true} offset={-2} duration={500} title="Compétences"><AiFillThunderbolt /></Link>
            <Link to="experience" spy={true} smooth={true} offset={-2} duration={500} title="Expérience"><MdWorkOutline /></Link>
            <Link to="contact" spy={true} smooth={true} offset={-2} duration={500} title="Contact"><BiMessageSquareDetail /></Link>
        </nav>
    );
};

export default Header;