'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          My Blog
        </Link>

        {/* Links and toggle */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>

          {/* Theme toggle button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded bg-gray-700 hover:bg-gray-600 text-sm"
            >
              {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
