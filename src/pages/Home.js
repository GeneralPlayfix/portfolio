import React from 'react';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Home_page from '../components/Home_page';
import Skills from '../components/Skills';
import Training from '../components/Training';
const Home = () => {
    return (
        <>
            <div className='sections'>
                <Header />
                <Home_page />
                <Training />
                <Skills />
                <Experience />
                <Contact />
            </div>
        </>
    );
};

export default Home;