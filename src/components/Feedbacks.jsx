import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl max-w-[800px] mx-auto'
  >
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-20 h-20 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  appendDots: dots => (
    <div
      style={{
        backgroundColor: "transparent",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "white",
        borderRadius: "50%",
        opacity: "0.5",
      }}
    ></div>
  ),
  nextArrow: (
    <div
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        color: "white",
        fontSize: "24px",
        zIndex: "1",
        transition: "all 0.3s ease",
        right: "10px", // Adjusted positioning
      }}
      className="slick-next"
    >
      →
    </div>
  ),
  prevArrow: (
    <div
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        color: "white",
        fontSize: "24px",
        zIndex: "1",
        transition: "all 0.3s ease",
        left: "10px", // Adjusted positioning
      }}
      className="slick-prev"
    >
      ←
    </div>
  ),
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .slick-prev:before,
        .slick-next:before {
          font-family: 'slick';
          font-size: 24px;
          line-height: 1;
        }

        .slick-prev:hover,
        .slick-next:hover {
          background-color: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
