import React from 'react';
import { Link } from 'react-scroll'
import CV from "../assets/Florian_Fournier_CV.pdf"
import { BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs';
import IMG from "../img/image.png";
const Home_page = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className='sub-container'>
                    <div>
                        <p>Hey, je suis</p>
                        <h1>Fournier Florian</h1>
                        <h3>Développeur web Fullstack / mobile </h3>
                    </div>
                    <div>
                        <a href={CV} target="_blank">Télécharger</a>
                        <Link to="contact" spy={true} smooth={true} offset={-2} duration={500}>Contactez-moi</Link>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/florian-fournier-520050207/"><BsLinkedin /></a>
                        <a href="https://github.com/GeneralPlayfix?tab=repositories"><BsGithub /></a>
                        <a href="https://stackoverflow.com/users/16371982/generalplayfix"><BsStackOverflow /></a>
                    </div>
                </div>
                <div className='image-container'>
                    <div className="image">
                        <img src={IMG} alt="profil-pic" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home_page;