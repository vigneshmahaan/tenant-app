"use client";

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"
import { NavbarSidebar } from "./Navbar-Sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
})

interface NavBarItemsProp {
    href: string,
    children: React.ReactNode,
    isActive: boolean,
}

const NavBarItems = ({
    href,
    children,
    isActive,
}: NavBarItemsProp) => {
    return (
        <Button
        asChild
        variant={"outline"}
        className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg", 
        isActive && "bg-black text-white hover:bg-black hover:text-white",
    )}
        >
            <Link href={href}>
            {children}
            </Link>
            
        </Button>
    )
}
const NavBarItemsList = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About us" },
    { href: "/features", children: "Features" },
    { href: "/pricing", children: "Pricing" },
    { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
    const pathName = usePathname();
    const [sideBarOpen, setSidebarOpen] = useState(false);
    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <span className={cn("text-5xl font-semibold ", poppins.className)}>
                    E-Commerce
                </span>
            </Link>

            <NavbarSidebar 
            items={NavBarItemsList}
            open={sideBarOpen}
            onOpenChange={setSidebarOpen}
            />
            <div className="items-center gap-4 hidden pr-6 lg:flex">
                {NavBarItemsList.map((item) => (
                    <NavBarItems 
                    key={item.href}
                    href={item.href}
                    isActive= {pathName === item.href}
                    >
                        {item.children}
                    </NavBarItems>
                ))}
            </div>

            <div className="hidden lg:flex">
                <Button asChild variant={"secondary"} className="border-l border-t-0 border-b-0 border-r-0 bg-white px-12 h-full rounded-none hover:bg-pink-400 transition-colors text-lg ">
                   <Link href={"/sign-in"}>Log in</Link> 
                </Button>
                <Button asChild variant={"secondary"} className="border-l border-t-0 border-b-0 border-r-0 bg-black text-white px-12 h-full rounded-none hover:bg-pink-400 hover:text-black transition-colors text-lg ">
                    <Link href={"/sign-up"}>Start Selling</Link>
                </Button>
            </div>
            <div className="flex lg:hidden items-center justify-center">
                <Button variant={"ghost"} className="border-transparent bg-white size-12" onClick={() => setSidebarOpen(true)}>
                    <MenuIcon/>
                </Button>
            </div>
        </nav>
    )
}

