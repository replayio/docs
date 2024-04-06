'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Logo, Logomark } from '@/components/Logo';
import { MobileNavigation } from '@/components/MobileNavigation';
import { Search } from '@/components/Search';
import { ThemeSelector } from '@/components/ThemeSelector';
import { subPages } from '@/lib/navigation';
import { GitHubIcon } from './Layout';

export function Header({headerPage}: {headerPage: any}) {
  console.log(headerPage)
  let [isScrolled, setIsScrolled] = useState(false);
  let pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50  bg-white px-4 pt-5 shadow-md shadow-gray-900/5 transition duration-500 sm:px-6 sm:py-5 lg:px-8 lg:pb-0 dark:shadow-none',
        isScrolled
          ? 'dark:bg-gray-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-gray-900/75'
          : 'dark:bg-transparent'
      )}
    >
      <div>
        <div className='flex flex-none flex-wrap items-center justify-between'>
          <div className="mr-6 flex lg:hidden">
            <MobileNavigation />
          </div>
          <div className="relative flex flex-grow basis-0 items-center">
            <Link href="/" aria-label="Home page">
              <Logomark className="h-9 w-9 lg:hidden" />
              <Logo className="hidden h-9 w-auto fill-gray-700 lg:block dark:fill-sky-100" />
            </Link>
          </div>
          <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
            <Search />
          </div>
          <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
            <ThemeSelector className="relative z-10" />
            <Link href="https://github.com" className="group" aria-label="GitHub">
              <GitHubIcon className="h-6 w-6 fill-gray-400 group-hover:fill-gray-500 dark:group-hover:fill-gray-300" />
            </Link>
          </div>
        </div>
        <nav className="hidden lg:flex lg:space-x-8 lg:pt-4 lg:pb-0" aria-label="Global">
          {subPages.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={clsx(
                pathname.includes(item.href) || (item.href === '/time-travel' && pathname === '/') ? 'border-b-[rgba(240,45,94,1)] border-b-2 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100',
                'inline-flex items-center py-2 px-3 text-sm font-medium'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
