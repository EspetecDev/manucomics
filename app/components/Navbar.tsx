import '../globals.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
        <nav className="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 sticky top-0 ">
            <div className="w-full flex flex-wrap items-center justify-between p-4">
                <Link href="#" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MANUCOMICS</span>
                </Link>
                
                <div className="relative flex items-center">
                    <button type="button" className="relative text-sm bg-gray-800 rounded-full  focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <Image
                            className='rounded-full'
                            src="/pochita_avatar.png"
                            width={48}
                            height={48}
                            alt="avatar"
                        />
                    </button>
                    {/* Dropdown menu */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
                        </li>
                        <li>
                            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  );
}
