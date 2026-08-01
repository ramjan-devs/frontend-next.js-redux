import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card min-h-screen p-4 flex flex-col space-y-2">
      <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        Navigation
      </div>
      <Link
        href="/dashboard"
        className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        Overview
      </Link>
    </aside>
  );
}
