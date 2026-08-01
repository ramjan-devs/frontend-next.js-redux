export const siteConfig = {
  name: 'Invictus Labs',
  description: 'Enterprise Next.js application with Redux Toolkit, Tailwind CSS, and TypeScript.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/images/og.jpg',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
    },
  ],
  links: {
    github: 'https://github.com/ramjan-devs/frontend-next.js-redux',
  },
};

export type SiteConfig = typeof siteConfig;
