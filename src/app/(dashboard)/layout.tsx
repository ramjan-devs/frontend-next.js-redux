import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <Link href="/dashboard" className="text-xl font-bold tracking-tight">
          Invictus Dashboard
        </Link>
        <nav className="flex items-center space-x-4 text-sm font-medium">
          <Link href="/dashboard" className="hover:text-primary transition-colors">
            Overview
          </Link>
          <Link href="/login" className="hover:text-primary transition-colors">
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
