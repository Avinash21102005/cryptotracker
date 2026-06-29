import React from 'react';
import Headerindex from '../components/common/Header/Headerindex';
import Maincomindex from '../components/landingpage/Maincom/Maincomindex';
import Heroindex from '../components/common/Hero/Heroindex';
import Hero2index from '../components/common/Hero2/Hero2index';
import TestimonialSlider from '../components/common/TestimonialSlider/TestimonialSlider';
import Marquee from '../components/common/Marquee/Marquee';
import Footerindex from '../components/common/Footer/Footerindex';
import AccordionTransitionfrombottom from '../components/common/AccordionTransition/AccordionTransition';

const Home = () => {
  return (
    <div>
      <Headerindex />
      <Maincomindex />
      <Hero2index />
      <Heroindex />
      <TestimonialSlider />
      <Marquee />
      <AccordionTransitionfrombottom />
      <Footerindex />
    </div>
  );
};

export default Home;
