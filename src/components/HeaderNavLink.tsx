'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type HeaderNavLinkProps = {
    children: ReactNode;
    href: string;
  }

const HeaderNavLink = ({ href, children }: HeaderNavLinkProps) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block ${active}`}
    >
      {children}
    </Link>
  );
};

export default HeaderNavLink;