import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Awesome Vibe Coding',
  description:
    'A Curated List of Vibe Coding Open-Source Projects, Tools, and Learning Resources',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setTheme(theme) {
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                }
                
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  setTheme(savedTheme);
                } else {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  setTheme(prefersDark ? 'dark' : 'light');
                }
                
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                  if (!localStorage.getItem('theme')) {
                    setTheme(e.matches ? 'dark' : 'light');
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 transition-colors duration-200 dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
