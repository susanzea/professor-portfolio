'use client';
import { Source_Sans_3 } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import classes from './navbar.module.scss';
import IconButton from '../shared components/IconButton/iconButton';
import Image from 'next/image';
import ClickAway from '../../utils/customHooks/useClickAway';

const sourceSans3 = Source_Sans_3({ subsets: ['latin'], weight: '500' });

const navLinks = [
  { title: 'Home', href: '/home', icon: { src: '/home.svg', alt: 'house' } },
  {
    title: 'Academic Writing',
    href: '/academic-writing',
    icon: { src: '/pen-fancy.svg', alt: 'pen nib' },
    className: 'academicWriting',
  },
  { title: 'Books', href: '/books', icon: { src: '/book.svg', alt: 'book' } },
  {
    title: 'Fiction',
    href: '/fiction',
    icon: { src: '/user-astronaut.svg', alt: 'astronaut with a helmet on' },
  },
];

const ResponsiveNavbar = ({
  selected,
  setSelected,
  setIsResponsiveNavbarOpen,
}) => {
  return (
    <div className={`${classes.overlay} overlay`}>
      <ClickAway onClickAway={() => setIsResponsiveNavbarOpen(false)}>
        <div className={`${classes.responsiveNavbar} uppercase`}>
          <IconButton
            className={classes.close}
            onClick={() => setIsResponsiveNavbarOpen(false)}
          />
          <div className={`${classes.professorName}`}>Aníbal González</div>
          <nav>
            {navLinks.map((nl, i) => (
              <div className={classes.navItem} key={i}>
                <Image
                  src={nl.icon.src}
                  alt={nl.icon.alt}
                  width={20}
                  height={20}
                />
                <Link
                  onClick={() => setSelected(nl.title)}
                  className={`${
                    nl.title === selected
                      ? classes.selected
                      : classes.notSelected
                  } ${sourceSans3.className}`}
                  href={nl.href}
                >
                  {nl.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </ClickAway>
    </div>
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
