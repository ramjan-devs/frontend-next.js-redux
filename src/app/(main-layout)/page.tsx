import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] p-6 text-center space-y-6">
      <div className="space-y-3 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Welcome to Invictus Labs
        </h1>
        <p className="text-lg text-muted-foreground">
          Enterprise Next.js starter template initialized with TypeScript, Tailwind CSS, Redux Toolkit, and shadcn/ui.
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center h-10 px-6 font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors shadow"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/login"
          className="inline-flex items-center justify-center h-10 px-6 font-medium border border-input bg-background rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
