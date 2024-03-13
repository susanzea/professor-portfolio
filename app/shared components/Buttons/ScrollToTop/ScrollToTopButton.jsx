import { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './ScrollToTopButton.module.scss';

const ScrollToTopButton = () => {
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setIsScrollButtonVisible(true);
      } else {
        setIsScrollButtonVisible(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isScrollButtonVisible ? (
    <button className={classes.toTop} onClick={scrollUp}>
      <Image src="chevron-up.svg" alt="up arrow" height={25} width={25} />
    </button>
  ) : (
    <></>
  );
};

export default ScrollToTopButton;
