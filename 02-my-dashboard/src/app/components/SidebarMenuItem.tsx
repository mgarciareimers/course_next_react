'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

const SidebarMenuItem = ({ path, icon, title, subtitle }: Props) => {
    const pathname = usePathname();

    return (
        <Link 
            href={ path } 
            className={ `w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 transition ease-linear duration-150 ${ pathname === path ? ' bg-blue-800 hover:bg-white/5' : 'border-slate-700 py-3 hover:bg-white/5' }` 
        }>
            <div>
                { icon }
            </div>
            <div className='flex flex-col'>
                <span className={ `text-lg font-bold leading-5 ${ pathname === path ? 'text-white' : 'text-slate-500' } `}>{ title }</span>
                <span className={ `text-sm md:block ${ pathname === path ? 'text-white/50' : 'text-slate-500' }` }>{ subtitle }</span>
            </div>
        </Link>
    );
}

export default SidebarMenuItem;