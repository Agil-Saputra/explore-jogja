'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';

/** Routes where the global Navbar should be hidden. */
const HIDDEN_NAVBAR_ROUTES = ['/plan-your-visit/create'];

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const hide = HIDDEN_NAVBAR_ROUTES.some((r) => pathname.startsWith(r));

  if (hide) return null;
  return <Navbar />;
}
