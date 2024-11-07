
import '../App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import "../App.css";
import TextReveal from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <div id='about' className="bg-black px-6  py-8 md:px-12 md:py-24">
      <div className="max-w-[1120px] mx-auto">
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">
          About Me
        </p>
        <div className='hidden md:block'>
          <TextReveal />
        </div>
        <div className='block md:hidden'>
          <h1 className='text-3xl font-bold text-white'>
I am a dedicated <span className='text-green-500'>MERN Stack Developer</span> with over a
decade of experience specializing in building fast,
responsive, and scalable web applications. My core
expertise lies in MongoDB, Express.js, React.js, and
Node.js, and I have helped over 100 clients achieve
their development goals, earning a 100% Job
Success Score on Upwork.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;



