import React from "react";
import "../index.css"

export default function About() {
    return  (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Simon.
                        <br className="hidden lg:inline-block" />I love building amazing websites and web apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    {/* TO BE UPDATED WITH PERSONAL QUOTE */}
                    I am a web developer with a keen eye for detail. I enjoy building websites for all scenarios, and take pride in every piece of work I do.
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work with me
                        </a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See my current and past projects below
                        </a>
                    </div>
                </div>
                <div className="lg:max-lg lg:w-full md:w-1/2 w-5/6">
                {/* IMAGE TO BE UPDATED WITH A PICTURE OF MYSELF */}
                    <img className="object-cover object-center rounded heroImage" alt="hero" src="https://c.pxhere.com/photos/3b/90/code_coding_web_development_web_developer_web_development_technology_programming_code-1066093.jpg!d" />
                </div>
            </div>
        </section>
    )
}
