import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Invictus Labs. All rights reserved.
    </footer>
  );
}
