// eslint-disable-next-line no-unused-vars
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="relative">
      <img
        className="w-full h-screen object-cover object-center"
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Coding in Action"
      />
      
      <div className="w-full h-screen absolute top-0 left-0 bg-black/60">
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <a
            href="tel:+91 7091727303"
            className="flex items-center text-white hover:text-gray-300 transition-colors"
            aria-label="Call me"
          >
            <FaPhone size={20} className="mr-2" />
            +91 7091727303
          </a>
          
          <a
            href="mailto:kumar.ranu@gmail.com"
            className="flex items-center text-white hover:text-gray-300 transition-colors"
            aria-label="Send me an email"
          >
            <FaEnvelope size={20} className="mr-2" />
            kumar.ranu@gmail.com
          </a>
        </div>

        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center px-4">
          
          {/* Updated Image Size */}
          <img
            src="src\assets\_DSC0424-1-min(1).png" 
            alt="Ranu Kumar"
            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-white shadow-lg" // Changed to 48x48 for a larger square image
          />

          <h1 className="sm:text-5xl text-4xl font-bold text-white">
            Ranu Kumar
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white">
            I
            <TypeAnimation
              sequence={[
                "'m a Developer",
                2000, // Wait for 2 seconds
                "'m proficient in React & Tailwind",
                2000,
                // Add more sequences if needed
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[80px] w-full">
            <a
              href="https://linkedin.com/in/ranu-kumar-b03120284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/RanuKr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
