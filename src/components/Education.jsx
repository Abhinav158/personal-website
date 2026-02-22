import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import educationAnimation from "../assets/lottie/education.json";
import nitk from "../assets/education/nitk.png";

const Education = () => {
  const useNitkLogo = true;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Where I&apos;ve studied
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <motion.div
        className='mt-20 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-7xl mx-auto'
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Lottie on left */}
        <div className='flex-1 flex justify-center items-center w-full lg:w-auto min-h-[280px] order-2 lg:order-1'>
          <div className='w-full max-w-[520px] lg:max-w-none lg:w-[85%] h-auto'>
            <Lottie
              animationData={educationAnimation}
              loop
              className='w-full h-full'
            />
          </div>
        </div>

        {/* Education card on right - blends with background until hover */}
        <div className='flex-1 w-full order-1 lg:order-2 min-w-0'>
          <div className='group flex flex-row p-6 sm:p-8 rounded-[20px] bg-primary border border-transparent hover:bg-[#1d1836] hover:border-[#2a2348] hover:shadow-lg transition-all duration-300'>
            <div className='w-16 h-16 sm:w-[72px] sm:h-[72px] flex-shrink-0 rounded-full flex justify-center items-center bg-primary group-hover:bg-[#232631] transition-colors duration-300 overflow-hidden'>
              {useNitkLogo ? (
                <img
                  src={nitk}
                  alt='NITK'
                  className='w-[80%] h-[80%] object-contain'
                />
              ) : (
                <div className='w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#915EFF] via-[#6B4FEF] to-[#2A2348] flex items-center justify-center shadow-[0_0_24px_rgba(145,94,255,0.5)]'>
                  <span className='text-white font-bold text-[12px] sm:text-[14px] leading-tight text-center'>
                    NITK
                  </span>
                </div>
              )}
            </div>
            <div className='flex-1 flex flex-col ml-4 sm:ml-6 min-w-0 overflow-hidden'>
              <h3 className='text-white text-[20px] sm:text-[22px] font-semibold leading-[30px] mb-1'>
                National Institute of Technology, Karnataka
              </h3>
              <p className='text-secondary text-[16px] leading-[30px] mb-1'>
                Bachelor of Technology (B.Tech)
              </p>
              <p className='text-secondary text-[14px] leading-[30px] mb-3'>
                December 2020 - April 2024
              </p>
              {/* ADDING CHATGPT CODE */}
              {/* Major */}
<div className="mb-2">
  <p className='text-white-100 text-[15px] leading-[28px] font-medium'>
    Major | Electronics and Communication
  </p>
  <p className='text-secondary text-[14px] leading-[24px] ml-6'>
    GPA: 8.88 | Rank: 12/141
  </p>
</div>

{/* Minor */}
<div>
  <p className='text-white-100 text-[15px] leading-[28px] font-medium'>
    Minor | Information Technology
  </p>
  <p className='text-secondary text-[14px] leading-[24px] ml-6'>
    GPA: 9.40 | Rank: 5/57
  </p>
</div>
              {/* ENDING CHATGPT CODE */}
              {/* <p className='text-white-100 text-[15px] leading-[28px] mb-1'>
                ● Major | Electronics and Communication | GPA: 8.88 | Rank: 12/141
              </p>
              <p className='text-white-100 text-[15px] leading-[28px]'>
                ● Minor | Information Technology | GPA: 9.40 | Rank: 5/57
              </p> */}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "education");
