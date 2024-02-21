import { Source_Sans_3 } from 'next/font/google';
import Link from 'next/link';
import classes from './navbar.module.scss';

const sourceSans3 = Source_Sans_3({ subsets: ['latin'], weight: '500' });

const Navbar = () => {
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
          <Link key={i} className={classes[nl.className]} href={nl.href}>
            {nl.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
