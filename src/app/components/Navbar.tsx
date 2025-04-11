import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/pages/about', label: 'About' },
  { href: '/pages/contact', label: 'Contacts' },
  { href: '/pages/fqa', label: 'FQA' },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Next App
        </Link>
        <ul className="flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-blue-500">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


