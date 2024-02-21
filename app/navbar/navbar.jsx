'use client';
import { Source_Sans_3 } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import classes from './navbar.module.scss';

const sourceSans3 = Source_Sans_3({ subsets: ['latin'], weight: '500' });

const Navbar = () => {
  const [selected, setSelected] = useState('Home');

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
  return (
    <div className={classes.navbar}>
      <div className={classes.professorName}>Aníbal González</div>
      <nav className={`${sourceSans3.className} ${classes.nav}`}>
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
            {/* <span className={`${classes[nl.className]}`}>{nl.title}</span> */}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
