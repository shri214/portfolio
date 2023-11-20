//TODO use tourist folder from jingle to show your projects lists

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { GroupDes } from "./GroupDes";

export const Project = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  
  let description=[
    {num:"01", ui:"E-COMMERCE", des:` Developed an e-commerce website using HTML, CSS, and JavaScript. Implemented features like product listings, shopping cart, and user authentication. Utilized Local Storage for seamless sign up and login functionality, as well as storing cart item data`, link:"https://react-e-commerce-lv87x4dy0-shri214.vercel.app"},
    {num:"02", ui:"CRYPTO-TRACKER", des:`Developed a real-time crypto coin tracking website using React JS. Applied Material UI for styling and integrated Framer-Motion for dynamic animations, resulting in an engaging user interface. Ensured full responsiveness across all screen 
    sizes for optimal viewing experience` , link:"https://crypto-currencies-b5biiy0ow-shri214.vercel.app"},
    {num:"03", ui:"CANDIDATE.LY", des:"I crafted a React-based clone of an candidate.ly site, focusing on personal growth. It replicates item filtering, cart manipulation, and a user-friendly interface. Building this enhanced my React skills while diving into ecommerce development.", link:"https://candidately.vercel.app/"},
    {num:"04", ui:"EXCEL", des:"I developed a JavaScript-based Excel clone, mirroring spreadsheet functionality. It employs JS for formulas, cell manipulation, and data organization. Crafting this honed my skills in data management and frontend development.", link:"https://excel-8o919r4g8-shri214.vercel.app"},
    {num:"05", ui:"Clone website", des:"I recreated a website using HTML, CSS, and JS, mimicking its design and functionality. This project sharpened my frontend skills, focusing on layout, styling, and interactive elements within a familiar web environment.", link:"https://the-buddha.vercel.app/"},
  ]

  return (
    <div id="project" className="our-service-container">
       
      <div className="services">
        <motion.div className="services-heading"
        ref={ref1}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: inView1 ? 1 : 0, scale: inView1 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        >
          <div className="texts mb-20">
            <span className="span1 col-white">MY PROJECTS</span>
            <span className="span2 fs-5 col-white">My Personal</span>
            <span className="span3 fs-5">Project</span>
          </div>
          
        </motion.div>
        <div className="services-lists">
          {
            description.map((val)=>{
              return <GroupDes num={val.num} ui={val.ui} desc={val.des} link={val.link}/>
            })
          }
          
        </div>
      </div>
   
    </div>
  );
};
