import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, UserIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const navigation = [
        { name: 'Home', href: '/', current: false },
        ...(isLoggedIn ? [{ name: 'Dashboard', href: '/dashboard', current: false }] : []),
        { name: 'About Us', href: '/about', current: false },
        { name: 'Contact Us', href: '/contact', current: false },
        
    ];

    return (
        <Disclosure as="nav" className="border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo and Navigation */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <a className="flex items-center" href="/">
                            <img
                                className="h-11 w-auto"
                                src="/images/logo.png"
                                alt="Logo"
                            />
                            <p className="ml-4 text-xl font-semibold">Dengue Shield</p>
                        </a>
                        <div className="hidden sm:flex sm:justify-center sm:flex-1">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current
                                                ? 'text-gray-900 border-b-2 border-gray-900'
                                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* User Authentication Section */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {isLoggedIn ? (
                            <>
                                {/* Bell Icon */}
                                <button
                                    type="button"
                                    className="relative rounded-full p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="size-6" />
                                </button>

                                {/* User Avatar */}
                                <Menu as="div" className="relative ml-4">
                                    <MenuButton className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            alt="User"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="size-8 rounded-full"
                                        />
                                    </MenuButton>
                                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                        <MenuItem>
                                            {({ active }) => (
                                                <a
                                                    href="/profile"
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700'
                                                    )}
                                                >
                                                    Your Profile
                                                </a>
                                            )}
                                        </MenuItem>
                                        <MenuItem>
                                            {({ active }) => (
                                                <a
                                                    href="/settings"
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700'
                                                    )}
                                                >
                                                    Settings
                                                </a>
                                            )}
                                        </MenuItem>
                                        <MenuItem>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => setIsLoggedIn(false)}
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block w-full text-left px-4 py-2 text-sm text-gray-700'
                                                    )}
                                                >
                                                    Sign out
                                                </button>
                                            )}
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </>
                        ) : (
                            <div className="space-x-4 flex items-center text-gray-500">
                                <Link
                                    to="/sign-in"
                                    className="flex items-center hover:text-gray-700 px-3 py-2 text-sm font-medium"
                                >
                                    <UserIcon className="h-5 w-5 mr-1" />
                                    Sign In
                                </Link>
                                <span className="text-gray-300">|</span>
                                <Link
                                    to="/create-account"
                                    className="flex items-center hover:text-gray-700 px-3 py-2 text-sm font-medium"
                                >
                                    <PlusCircleIcon className="h-5 w-5 mr-1" />
                                    Create Account
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}
