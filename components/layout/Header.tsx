// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown, Home, Wrench, FolderOpen, FileText, MapPin, User, Mail, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    icon: LucideIcon;
    submenu?: SubMenuItem[];
}

interface SubMenuItem {
    name: string;
    href?: string;
    submenu?: NestedSubMenuItem[];
}

interface NestedSubMenuItem {
    name: string;
    href: string;
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSubmenu = (menu: string) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    const closeAllMenus = () => {
        setIsOpen(false);
        setOpenSubmenu(null);
    };

    const navigation: NavigationItem[] = [
        { name: 'Accueil', href: '/', icon: Home },
        {
            name: 'Services',
            href: '/services',
            icon: Wrench,
            submenu: [
                { name: 'Dépannage domestique', href: '/services/depannage-electrique-domestique-nice' },
                { name: 'Dépannage urgence', href: '/services/depannage-urgence-electrique-nice' },
                { name: 'Domotique & Automatismes', href: '/services/domotique-automatisme-nice' },
                { name: 'Climatisation & Ventilation', href: '/services/installation-climatisation-ventilation-nice' },
                { name: 'Éclairage & Luminaires', href: '/services/installation-eclairage-luminaires-nice' },
                { name: 'Installation électrique', href: '/services/installation-electrique-nice' },
                { name: 'Prises & Tableaux', href: '/services/installation-prise-tableau-electrique-nice' },
                { name: 'Volets & Portails', href: '/services/installation-volets-portails-electriques-nice' },
                { name: 'Mise aux normes', href: '/services/mise-aux-normes-electrique-nice' },
                { name: 'Rénovation électrique', href: '/services/renovation-electrique-nice' },
            ]
        },
        {
            name: 'Portfolio',
            href: '/portfolio',
            icon: FolderOpen,
            submenu: [
                { name: 'Installation complète', href: '/portfolio/installation-electrique-complete-hauteurs-nice' },
                { name: 'Rénovation villa', href: '/portfolio/renovation-electrique-villa-bellet' },
                { name: 'Mise aux normes cuisine', href: '/portfolio/mise-aux-normes-cuisine-feric' },
                { name: 'Bornes recharge VE', href: '/portfolio/installation-bornes-recharge-ve' },
                { name: 'Éclairage extérieur', href: '/portfolio/eclairage-exterieur-villa' },
                { name: 'Bureau commercial', href: '/portfolio/renovation-bureau-commercial' },
            ]
        },
        {
            name: 'Zones',
            href: '/zones',
            icon: MapPin,
            submenu: [
                {
                    name: 'Nice',
                    submenu: [
                        { name: 'Nice Centre', href: '/zones/nice/electricien-nice-centre' },
                        { name: 'Vieux Nice', href: '/zones/nice/electricien-vieux-nice' },
                        { name: 'Cimiez', href: '/zones/nice/electricien-cimiez' },
                    ]
                },
                {
                    name: 'Villes alentour',
                    submenu: [
                        { name: 'Cagnes-sur-Mer', href: '/zones/nice/electricien-cagnes-sur-mer' },
                        { name: 'Saint-Laurent-du-Var', href: '/zones/nice/electricien-saint-laurent-du-var' },
                        { name: 'Antibes', href: '/zones/nice/electricien-antibes' },
                    ]
                }
            ]
        },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'À propos', href: '/a-propos', icon: User },
        { name: 'Contact', href: '/contact', icon: Mail },
    ];

    return (
        <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/"  onClick={closeAllMenus}>
                        <Image
                            src="/images/logo-electrcien-nice.svg"
                            alt="Logo Électricien Nice Expert"
                            width={150}
                            height={50}
                            className="h-10 w-[130px]"
                        />
                    </Link>
                    

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === item.href ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
                                >
                                    {/* <item.icon size={16} className="mr-1" /> */}
                                    {item.name}
                                    {item.submenu && <ChevronDown size={16} className="ml-1" />}
                                </Link>

                                {item.submenu && (
                                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 group-hover:translate-y-0 translate-y-2">
                                        <div className="pt-2">
                                            <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2">
                                                {item.submenu.map((subitem) => (
                                                    <div key={subitem.name}>
                                                        {'href' in subitem ? (
                                                            <Link
                                                                href={subitem.href ? subitem.href : ''}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md"
                                                            >
                                                                {subitem.name}
                                                            </Link>
                                                        ) : (
                                                            <div className="relative submenu-group">
                                                                <div className="px-4 py-2 text-sm font-medium text-gray-900">
                                                                    {subitem.name}
                                                                </div>
                                                                <div className="ml-2 mt-1">
                                                                    {subitem.submenu?.map((nestedItem) => (
                                                                        <Link
                                                                            key={nestedItem.name}
                                                                            href={nestedItem.href}
                                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md"
                                                                        >
                                                                            {nestedItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Buttons - Desktop */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a
                            href="tel:+33756935200"
                            className="flex items-center px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
                        >
                            <Phone size={16} className="mr-1" />
                            07 56 93 52 00
                        </a>
                        <Link
                            href="/devis"
                            className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            Demander un devis
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                        <nav className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <div className="flex items-center">
                                        <Link
                                            href={item.href}
                                            className={`flex-grow flex items-center px-3 py-2 rounded-md text-base font-medium ${pathname === item.href ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'}`}
                                            onClick={() => !item.submenu && closeAllMenus()}
                                        >
                                            {/* <item.icon size={18} className="mr-2" /> */}
                                            {item.name}
                                        </Link>
                                        {item.submenu && (
                                            <button
                                                onClick={() => toggleSubmenu(item.name)}
                                                className="p-2 rounded-md text-gray-400 hover:text-gray-500"
                                            >
                                                <ChevronDown size={18} className={openSubmenu === item.name ? 'transform rotate-180' : ''} />
                                            </button>
                                        )}
                                    </div>
                                    {item.submenu && openSubmenu === item.name && (
                                        <div className="ml-6 mt-1 space-y-1">
                                            {item.submenu.map((subitem) => (
                                                <div key={subitem.name}>
                                                    {'href' in subitem ? (
                                                        <Link
                                                            href={subitem.href ? subitem.href : ''}
                                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-gray-50"
                                                            onClick={closeAllMenus}
                                                        >
                                                            {subitem.name}
                                                        </Link>
                                                    ) : (
                                                        <>
                                                            <div className="px-3 py-2 text-base font-medium text-gray-900">
                                                                {subitem.name}
                                                            </div>
                                                            <div className="ml-4 mt-1 space-y-1">
                                                                {subitem.submenu?.map((nestedItem) => (
                                                                    <Link
                                                                        key={nestedItem.name}
                                                                        href={nestedItem.href}
                                                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-gray-50"
                                                                        onClick={closeAllMenus}
                                                                    >
                                                                        {nestedItem.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 space-y-2">
                                <a
                                    href="tel:+33756935200"
                                    className="flex items-center justify-center w-full px-4 py-3 rounded-md bg-orange-500 text-white text-base font-medium hover:bg-orange-600 transition-colors"
                                    onClick={closeAllMenus}
                                >
                                    <Phone size={18} className="mr-2" />
                                    07 56 93 52 00
                                </a>
                                <Link
                                    href="/devis"
                                    className="flex items-center justify-center w-full px-4 py-3 rounded-md bg-gray-900 text-white text-base font-medium hover:bg-gray-800 transition-colors"
                                    onClick={closeAllMenus}
                                >
                                    Demander un devis
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}