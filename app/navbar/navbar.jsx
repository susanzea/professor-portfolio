'use client';
import { Source_Sans_3 } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import classes from './navbar.module.scss';
import IconButton from '../shared components/IconButton/iconButton';

const sourceSans3 = Source_Sans_3({ subsets: ['latin'], weight: '500' });

const navLinks = [
  { title: 'Home', href: '/home' },
  {
    title: 'Academic Writing',
    href: '/academic-writing',
    className: 'academicWriting',
  },
  { title: 'Books', href: '/books' },
  { title: 'Fiction', href: '/fiction' },
];

const ResponsiveNavbar = ({ selected, setSelected }) => {
  return (
    <div className="overlay">
      <div className={`${classes.responsiveNavbar} uppercase`}>
        <div className={`${classes.professorName} uppercase`}>
          Aníbal González
        </div>
        <nav>
          {navLinks.map((nl, i) => (
            <Link
              key={i}
              onClick={() => setSelected(nl.title)}
              className={`${
                nl.title === selected ? classes.selected : classes.notSelected
              } ${sourceSans3.className}`}
              href={nl.href}
            >
              {nl.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isResponsiveNavbarOpen, setIsResponsiveNavbarOpen] = useState(false);
  const [selected, setSelected] = useState('Home');
  return (
    <>
      {isResponsiveNavbarOpen && (
        <ResponsiveNavbar selected={selected} setSelected={setSelected} />
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
