import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About Me</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Darshan, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a student at IIT Roorkee in Mechanical Engineering. 
              I'm passionate about building excellent software that improves the lives of those around me. 
              I specialize in creating software for clients ranging from individuals and small-businesses 
              all the way to large enterprise corporations. I'm currently working as a Software Developer 
              at Information Management Group and Tinkering Lab at IIT Roorkee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
