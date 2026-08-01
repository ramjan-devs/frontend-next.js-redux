import React from 'react';
import Link from 'next/link';

export default function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
      <Link href="/dashboard" className="text-xl font-bold tracking-tight">
        Dashboard
      </Link>
      <nav className="flex items-center space-x-4 text-sm font-medium">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/login" className="hover:text-primary transition-colors">
          Logout
        </Link>
      </nav>
    </header>
  );
}
