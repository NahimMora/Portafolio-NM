import Link from 'next/link';

export interface Props{
  href: string;
  title: string;
}

const NavLink = ({href, title}: Props) => {
  return (
    <Link href={href} className='block py-2 pl-4 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-yellow-400 hover:scale-105'>
        {title}
    </Link>
  );
};

export default NavLink