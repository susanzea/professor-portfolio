import Link from 'next/link';

const Navbar = () => {
  return (
    <div id="navbar">
      <div>Aníbal González</div>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/academic-writing">Academic Writing</Link>
        <Link href="/books">Books</Link>
        <Link href="/fiction">Fiction</Link>
      </nav>
    </div>
  );
};

export default Navbar;
