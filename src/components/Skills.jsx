import React from 'react';
import { DiPython, DiJavascript1, DiReact, DiMongodb } from 'react-icons/di';
import { SiTensorflow, SiNextdotjs, SiCplusplus } from 'react-icons/si';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <DiPython size={50} className="mx-auto" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <DiJavascript1 size={50} className="mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <DiReact size={50} className="mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiNextdotjs size={50} className="mx-auto" />
            <p className="my-4">Next.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <DiMongodb size={50} className="mx-auto" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiTensorflow size={50} className="mx-auto" />
            <p className="my-4">TensorFlow</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiCplusplus size={50} className="mx-auto" />
            <p className="my-4">C++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
