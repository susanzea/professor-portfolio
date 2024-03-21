'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Source_Sans_3 } from 'next/font/google';
import Link from 'next/link';
import classes from './navbar.module.scss';
import IconButton from '../shared components/Buttons/Icon/IconButton';
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

const ResponsiveNavbar = ({ selected, setIsResponsiveNavbarOpen }) => {
  const handleOnNavItemClick = (title) => {
    setTimeout(() => setIsResponsiveNavbarOpen(false), 300);
  };

  return (
    <div className={`${classes.overlay} overlay`}>
      <ClickAway onClickAway={() => setIsResponsiveNavbarOpen(false)}>
        <div className={classes.responsiveNavbar}>
          <IconButton
            className={classes.close}
            onClick={() => setIsResponsiveNavbarOpen(false)}
          />
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
                  onClick={() => handleOnNavItemClick(nl.title)}
                  className={`${
                    nl.href === selected
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
  const pathname = usePathname();

  return (
    <>
      {isResponsiveNavbarOpen && (
        <ResponsiveNavbar
          pathname={pathname}
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
              className={`${
                nl.href === pathname ? classes.selected : classes.notSelected
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
