'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
    const pathname = usePathname();
    return (
        <header id="header">
            <div className="inner">
                <h1 id="logo">
                    <Link href="/">logo</Link>
                </h1>
                <nav id="gnb">
                    <ul>
                        <li>
                            {/* 삼항연산자 */}
                            {/* {조건 ? 참 : 거짓} */}
                            <Link href="/active" className={pathname === '/about' ? 'active' : ''}>
                                about
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className={pathname === '/login' ? 'active' : ''}>
                                login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
