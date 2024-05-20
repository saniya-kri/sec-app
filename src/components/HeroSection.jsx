import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import heroImg from "../assets/asset 5.jpeg";
import { FaYoutube } from "react-icons/fa";
import heroImgSec from "../assets/asset 6.jpeg";
import heroImgThird from "../assets/asset 7.jpeg";
import heroImgFour from "../assets/asset 8.jpeg";
import heroImgFive from "../assets/asset 9.jpeg";
import heroImgOne from "../assets/asset 1.jpeg";
import heroImgSix from "../assets/asset 10.jpeg";
import heroImgSeven from "../assets/asset 11.jpeg";
import heroImgEight from "../assets/asset 12.jpeg";
import { motion } from 'framer-motion';
import { pricingOptions } from "../constant";

const HeroSection = () => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <motion.div 
      whileInView={{opacity :1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="w-10/12 hero "></motion.div>
      <div className="lg:w-7/12 w-10/12 lg:mt-32 mt-16 mx-auto text-left">
        <motion.h3
        whileInView={{opacity :1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.8}}
         className="lg:text-[1.75rem] text-[1.2rem] leading-[1.5] mb-[.7em] font-medium pr-10">
          We make <span className="text-blue-600">Live</span>,{" "}
          <span className="text-blue-600">Push</span>,{" "}
          <span className="text-blue-600">Note</span> and{" "}
          <span className="text-blue-600">Link</span> — unique software and
          hardware for music creation and performance. With these products, our
          community of users creates amazing things.
        </motion.h3>
        <motion.p 
         whileInView={{opacity :1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.9}}
        className="text-[1rem] leading-[1.5] font-normal">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </motion.p>
      </div>
      <div className="w-full mt-20 border-t border-t-white">
        <div className="w-8/12 absolute right-0 -z-50 bg-[#fbffa7] lg:h-[900px] h-[320px] md:h-[510px]"></div>
        <div className="flex w-10/12 mx-auto lg:justify-evenly md:justify-evenly justify-center  m-10 mt-20 lg:mt-40">
          <div>
            <motion.img 
             whileInView={{opacity :1, x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:2.0}}
            className="lg:w-[80%] md:w-[70%] md:mt-10" src={heroImg} />
          </div>
          <img 
        

            className="lg:w-[400px] lg:h-[300px] md:w-[300px] md:h-[180px] w-[220px] h-[90px] lg:mt-40 mt-10 ml-10 md:mt-16"
            src={heroImgSec}
          />
        </div>
      </div>
      <div className="lg:w-7/12 w-10/12 lg:mt-64 mt-44 mx-auto text-left xl:mt-56">
        <motion.h3 
         whileInView={{opacity :1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.5}}
        className="lg:text-[1.75rem] text-[1.2rem] leading-[1.5] mb-[.7em] font-medium pr-10">
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </motion.h3>
        <motion.p
          whileInView={{opacity :1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:2}}
        className="text-[1rem] leading-[1.5] font-normal">
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </motion.p>
      </div>
      <div className="lg:w-10/12 w-11/12 mx-auto lg:mt-40 mt-24 flex justify-center">
        <motion.iframe
         whileInView={{opacity :1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:2.5}}
          className="lg:w-[768px] lg:h-[432px] w-[500px] h-[250px]"
          src="https://www.youtube.com/embed/9SbnhgjeyXA"
          title="Why Ableton - Juanpe"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></motion.iframe>
      </div>
      <div className="lg:w-7/12 w-10/12 lg:mt-32 mt-24 mx-auto text-left">
        <motion.h3 
         whileInView={{opacity :1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.9}}
        className="lg:text-[1.75rem] text-[1.2rem] leading-[1.5] mb-[.7em] font-medium pr-10">
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </motion.h3>
        <motion.p 
         whileInView={{opacity :1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.9}}
        className="text-[1rem] leading-[1.5] font-normal">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </motion.p>
      </div>
      <div className="w-full mt-20 border-t border-t-white flex justify-evenly">
        <div className="w-8/12 absolute left-0 -z-50 bg-[#b6ffc0] lg:h-[980px] h-[400px] md:h-[800px]"></div>
        <div className="flex flex-col lg:w-6/12 w-5/12 lg:ml-36 ml-10 lg:mt-44 xl:mt-16 mt-24">
          <div className="text-center">
            <motion.img
             whileInView={{opacity :1, x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:1.9}}
              className="lg:w-[600px] w-[500px] lg:mb-20 mb-10 xl:w-[500px]"
              src={heroImgThird}
            />
          </div>
          <motion.img
           whileInView={{opacity :1, y:0}}
           initial={{opacity:0, y:-100}}
           transition={{duration:1.9}}
            className="lg:w-[600px] w-[500px] xl:w-[500px]"
            src={heroImgFour}
          />
        </div>
        <div className="lg:mt-[250px] mt-[135px] md:mt-40 lg:ml-0 ml-10 xl:ml-0 xl:mr-40 xl:mt-28">
          <motion.img
        
            className="lg:w-[600px] xl:w-[700px] xl:h-[600px] lg:h-[500px] lg:ml-20 w-[190px] h-[180px] md:w-[400px] md:h-[400px]"
            src={heroImgFive}
          />
        </div>
      </div>
      <div className="lg:w-7/12 w-10/12 lg:mt-60 xl:mt-64 mt-28 md:mt-64 mx-auto text-left">
        <motion.h3
         whileInView={{opacity :1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.9}}
        className="lg:text-[1.75rem] text-[1.2rem] leading-[1.5] mb-[.7em] font-medium pr-10">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </motion.h3>
        <motion.p 
         whileInView={{opacity :1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.9}}
        className="text-[1rem] leading-[1.5] font-normal">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </motion.p>
      </div>
      <div className="w-10/12 mx-auto lg:mt-32 mt-28">
        <motion.img 
        whileInView={{opacity :1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        src={heroImgOne} />
      </div>
      <div className="lg:w-7/12 w-10/12 mt-28 mx-auto text-left">
        <motion.h3 
        whileInView={{opacity :1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.9}}
        className="lg:text-[1.75rem] text-[1.2rem] leading-[1.5] mb-[.7em] font-medium pr-10">
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </motion.h3>
        <motion.p 
         whileInView={{opacity :1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.9}}className="text-[1rem] leading-[1.5] font-normal">
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </motion.p>{" "}
        <br></br>
        <motion.p 
        whileInView={{opacity :1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:2.2}}
        className="text-[1rem] leading-[1.5] font-normal">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </motion.p>
      </div>
      <div className="w-full mt-20 flex">
        <div className="w-8/12 mx-auto -z-50 bg-[#d5b3ff] lg:h-[900px] h-[320px] md:h-[510px] "></div>
        <div className="flex w-11/12 absolute right-0 justify-between mr-0 lg:mt-40 mt-16">
          <div>
            <motion.img
              whileInView={{opacity :1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1.9}}
              className="xl:w-[500px] lg:w-[400px] md:w-[300px] w-[130px] xl:mt-40 lg:mt-32 md:mt-14 mt-10"
              src={heroImgSix}
            />
          </div>
          <motion.img
             whileInView={{opacity :1, x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:2.5}}
            className="xl:w-[600px] lg:w-[500px] md:w-[320px] w-[180px]"
            src={heroImgSeven}
          />
        </div>
      </div>
      <div className="lg:w-7/12 w-10/12 mt-28 mx-auto text-left">
        <motion.h3 
        whileInView={{opacity :1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.9}}
        className="lg:text-[1.75rem] text-[1.2rem] leading-[1.5] mb-[.7em] font-medium pr-10">
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </motion.h3>
        <motion.p 
         whileInView={{opacity :1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.9}}
        className="text-[1rem] leading-[1.5] font-normal">
          If you're joining us in Berlin, we'll help with relocation and
          paperwork. We’ll even provide you with free German or English lessons.
          Plus, working in Germany means you can expect comprehensive health
          insurance for you and your family, as well as generous maternity and
          paternity leave. Office hours are flexible, but it’s not all work; we
          have several company and team outings throughout the year as well as a
          variety of fun, informal small-group activities.
        </motion.p>
      </div>
      <div className="w-10/12 b mx-auto flex lg:flex-nowrap flex-wrap lg:mt-32 mt-24">
        <div className="border lg:w-6/12 w-full">
          <motion.img
          whileInView={{opacity :1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1.5}}
          className="" src={heroImgEight} />
        </div>
        <motion.div
        className="border w-full bg-[#b1c5ff] lg:w-6/12">
          <div className="lg:w-10/12 w-11/12  md:w-7/12 mx-auto xl:mt-52 lg:mt-[17px]  pb-10 md:mt-28 mt-20 md:pt-5 md:pb-20">
            <h3 className="lg:text-[1.75rem] text-[1.2rem] leading-[1.5] mb-[.7em] font-medium pr-10 mt-8">
              We’re really proud of the work we’ve done so far. But there’s so
              much more to come. If you’d like to be a part of it, please join
              us.
            </h3>
          </div>
        </motion.div>
      </div>
      {/* footer */}
      <div className="border lg:mt-28 mt-10 text-neutral-500"></div>

      <div className="mt-20 w-10/12 mx-auto">
      <h2 className="text-5xl sm:text-6xl lg:text-6xl  ml-10 font-bold text-neutral-900 text-left my-5 tracking-wider">
        Abletone
      </h2>
     
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 text-neutral-700">
            <div className="p-10">
              <p className="lg:text-[17px] sm:text-[16px] text-[13px] mb-3">
                {option.title}{ " > "}
              </p>
              <p className="lg:text-[17px] sm:text-[16px] text-[13px] mb-3">
                {option.title2} { " > "}
              </p>
              <p className="lg:text-[17px] sm:text-[16px] text-[13px] mb-3">
                {option.title3} { " > "}
              </p>
             
             
            </div>
          </div>
        ))}
      </div>
    </div>
    <center className="bg-neutral-300 py-4 mt-3"><em>&copy;This site is made by Anjali.. 2024</em></center>
    </div>
    // width="768" height="432"
  );
};

export default HeroSection;
