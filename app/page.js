'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/SignUp'); // Redirect to SignUp page on load
  }, [router]);

  return null;
}
