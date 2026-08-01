import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold tracking-tight">
        Invictus Labs
      </Link>
      <nav className="flex items-center space-x-4 text-sm font-medium">
        <Link href="/dashboard" className="hover:text-primary transition-colors">
          Dashboard
        </Link>
        <Link href="/login" className="hover:text-primary transition-colors">
          Login
        </Link>
        <Link
          href="/register"
          className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
