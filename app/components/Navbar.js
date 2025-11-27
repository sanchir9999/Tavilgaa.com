"use client";
import Link from "next/link";
import { ThemeToggle } from './ThemeToggle';
import { useState } from "react";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-black/5 dark:border-white/10">
            <div className="max-w-7xl mx-auto flex h-16 md:h-20 items-center justify-between px-4">
                {/* Logo + Weather нэг мөрөнд */}
                <div className="flex items-center space-x-6">
                    <Link href="/" legacyBehavior>
                        <a className="text-2xl font-bold text-blue-600 dark:text-white cursor-pointer select-none">
                            Tavilgaa.com
                        </a>
                    </Link>

                    {/* Цаг агаар - зөвхөн desktop дээр харуулах */}
                    <div className="hidden md:block">

                    </div>
                </div>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-200">
                    <Link href="/" legacyBehavior>
                        <li><a href="#home" className="hover:text-blue-600 transition">Нүүр</a></li>
                    </Link>

                    <li>
                        <Link href="/category/chairs" legacyBehavior>
                            <a className="hover:text-blue-600 transition">Сандлууд</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/category/tables" legacyBehavior>
                            <a className="hover:text-blue-600 transition">Ширээнүүд</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/category/sets" legacyBehavior>
                            <a className="hover:text-blue-600 transition">Багцууд</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/category/accessories" legacyBehavior>
                            <a className="hover:text-blue-600 transition">Дагалдах</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/About" legacyBehavior>
                            <a className="hover:text-blue-600 transition">Бидний тухай</a>
                        </Link>
                    </li>

                    <li><a href="#contact" className="hover:text-blue-600 transition">Холбоо барих</a></li>
                </ul>

                {/* Theme toggle + Mobile menu toggle */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu Toggle"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700 dark:text-gray-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <ul className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur px-4 py-4 space-y-4 font-medium text-gray-700 dark:text-gray-200 border-b border-black/5 dark:border-white/10">
                    <li>
                        <Link href="/" legacyBehavior>
                            <a className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Нүүр</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/chairs" legacyBehavior>
                            <a className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Сандлууд</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/tables" legacyBehavior>
                            <a className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Ширээнүүд</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/sets" legacyBehavior>
                            <a className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Багцууд</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/accessories" legacyBehavior>
                            <a className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Дагалдах хэрэгсэл</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/About" legacyBehavior>
                            <a className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Бидний тухай</a>
                        </Link>
                    </li>
                    <li><a href="#contact" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Холбоо барих</a></li>
                </ul>
            )}
        </nav>
    );
};
