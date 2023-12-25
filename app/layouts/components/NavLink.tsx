import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, exact, children, ...props }: any) {
  const pathname = usePathname();
  const active = 'text-primary font-bold text-xl';
  const isActive = exact ? pathname == href : pathname.startsWith(href)

  if (isActive) {
    props.className += active
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
