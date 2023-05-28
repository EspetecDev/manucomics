'use client'
import Link from "next/link";
import React, { ReactNode } from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArchiveIcon from '@mui/icons-material/Archive';

export default function Sidebar() {

    const listButton = (l : object) => {
        return (
            <li>
            <Link href={l.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               {l.icon}
               <span className="ml-3">{l.content}</span>
            </Link>
            </li>
        );
    }

    const sidebarOptions = [
        {icon: <HomeIcon/>, content: "Home", link: '/'},
        {icon: <MenuBookIcon/>, content: "Catalog", link: '/catalog'},
        {icon: <ArchiveIcon/>, content: "Local Inventory", link: '/inventory'},
    ];

    return (
        <div className="flex flex-col justify-between bg-indigo-700 text-zinc-50  md:sticky md:top-16 md:z-0 top-0 z-20 fixed md:h-[calc(100vh_-_64px)] h-full w-[300px] transition-transform .3s ease-in-out md:translate-x-0-translate-x-full">
        <nav className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            {/* nav items */}
            <ul className="space-y-2 font-medium">
                {sidebarOptions.map(l => {
                    return (
                        listButton(l)
                    )
                })
                }
            </ul>
        </nav>
        </div>
    );
}
