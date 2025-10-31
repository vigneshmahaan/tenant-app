import { Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle
 } from "@/components/ui/sheet";
 import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Button } from "@/components/ui/button";



interface NavBarItems{
    href: string,
    children: React.ReactNode,
}

interface Props{
    items: NavBarItems[];
    open: boolean;
    onOpenChange: (open: boolean)=> void;
}




export const NavbarSidebar = ({
    items,
    open,
    onOpenChange
}: Props) => {
    return(
       <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="p-0 transition-none">
            <SheetHeader className="p-4 border-b">
                <div className="flex items-center">
                    <SheetTitle>
                        Menu
                    </SheetTitle>
                </div>
            </SheetHeader>
            <ScrollArea className="flex flex-col pb-2 h-full overflow-y-auto">
                {items.map((item)=>(
                    <Link key={item.href}
                    href={item.href} 
                    className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">
                    {item.children}
                    </Link>
                ))}
                <div className="border-t">
                    <Link href={"/sign-in"} className="w-full text-left p-4 hover:text-black flex items-center text-base font-medium">
                        Log in
                    </Link >
                    <Link href={"/sign-up"} className="w-full text-left p-4 bg-black text-white hover:bg-pink hover:text-black hover:bg-white flex items-center text-base font-medium">
                        Start Selling
                    </Link >
                </div>
            </ScrollArea>
        </SheetContent>
       </Sheet>
    )
}