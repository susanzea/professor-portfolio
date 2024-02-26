'use client';
import { Source_Sans_3 } from 'next/font/google';
import { motion, AnimatePresence, button, ul, li } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import classes from './navbar.module.scss';
import IconButton from '../shared components/IconButton/iconButton';
import Image from 'next/image';
import ClickAway from '../../utils/customHooks/useClickAway';

const sourceSans3 = Source_Sans_3({ subsets: ['latin'], weight: '500' });

const navLinks = [
  {
    id: 0,
    title: 'Home',
    href: '/home',
    icon: { src: '/home.svg', alt: 'house' },
  },
  {
    id: 1,
    title: 'Academic Writing',
    href: '/academic-writing',
    icon: { src: '/pen-fancy.svg', alt: 'pen nib' },
    className: 'academicWriting',
  },
  {
    id: 2,
    title: 'Books',
    href: '/books',
    icon: { src: '/book.svg', alt: 'book' },
  },
  {
    id: 3,
    title: 'Fiction',
    href: '/fiction',
    icon: { src: '/user-astronaut.svg', alt: 'astronaut with a helmet on' },
  },
];

const hideNavItemsVariant = {
  opened: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  closed: {
    opacity: 1,
    y: '0%',
    transition: {
      delay: 1.1,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const mobileMenuVariant = {
  opened: {
    y: '0%',
    transition: {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  closed: {
    y: '-100%',
    transition: {
      delay: 0.35,
      duration: 0.63,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

const fadeInVariant = {
  opened: {
    opacity: 1,
    transition: {
      delay: 1.2,
    },
  },
  closed: { opacity: 0 },
};

const ulVariant = {
  opened: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.18,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

const liVariant = {
  opened: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
  closed: {
    opacity: 0,
    y: '100%',
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
};

const ResponsiveNavbar = ({
  selected,
  setSelected,
  setIsResponsiveNavbarOpen,
}) => {
  const handleOnNavItemClick = (title) => {
    setSelected(title);
    setTimeout(() => setIsResponsiveNavbarOpen(false), 300);
  };

  return (
    // <div className={`${classes.overlay} overlay`}>
    <motion.div variants={mobileMenuVariant} className={classes.mobileMenu}>
      <motion.button
        variants={fadeInVariant}
        onClick={() => setIsResponsiveNavbarOpen(false)}
      >
        Close
      </motion.button>
      <motion.ul variants={ulVariant}>
        {navLinks.map((navItem) => (
          <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
            <motion.div variants={liVariant}>{navItem.title}</motion.div>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div variants={fadeInVariant} className="contact">
        <h5>+852 5650 2233</h5>
        <h5>hi@designagency.com</h5>
      </motion.div>
    </motion.div>
    // </div>
  );
};

const Navbar = () => {
  const [isResponsiveNavbarOpen, setIsResponsiveNavbarOpen] = useState(false);
  const [selected, setSelected] = useState('Home');
  return (
    <>
      {isResponsiveNavbarOpen && (
        <ResponsiveNavbar
          selected={selected}
          setSelected={setSelected}
          setIsResponsiveNavbarOpen={setIsResponsiveNavbarOpen}
        />
      )}
      <div className={classes.navbar}>
        <div className={`${classes.professorName} uppercase`}>
          Aníbal González
        </div>
        <IconButton
          className={classes.hamburger}
          icon="hamburger"
          onClick={() => setIsResponsiveNavbarOpen(true)}
        />
        <nav className={`${sourceSans3.className} ${classes.nav} uppercase`}>
          {navLinks.map((nl, i) => (
            <Link
              key={i}
              onClick={() => setSelected(nl.title)}
              className={`${
                nl.title === selected ? classes.selected : classes.notSelected
              } ${classes[nl.className]}`}
              href={nl.href}
            >
              {nl.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
