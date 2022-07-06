import React from 'react'
import Blog1 from '../../Blog/Blog1'
import HeroSlidder from '../../Slidderhero/HeroSlidder'
import About from '../About'
import Contact from '../Contact'





const Home = () => {
    return (
        <div>
            <HeroSlidder/>
            <h1 className="text-light text-center" > Our Blog Section </h1>
            <Blog1/>
            <About/>
            <Contact/>
            
        </div>
    )
}

export default Home
