import { currentUser } from "@clerk/nextjs/server"
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { getNotifications } from "@/actions/notification.action";

const DesktopNavbar = async () => {
    const user = await currentUser();

    let unreadCount = 0;

    if (user) {
        try {
            const notifications = await getNotifications();
            unreadCount = notifications.filter(n => !n.read).length;
        } catch (error) {
            console.error("Failed to fetch notifications: ", error);
        }
    }

    return (
        <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />

            <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href="/">
                    <HomeIcon className="w-4 h-4" />
                    <span className="hidden lg:inline">Home</span>
                </Link>
            </Button>

            {user ? (
                <>
                    <Button variant="ghost" className="relative flex items-center gap-2" asChild>
                        <Link href="/notifications" className="relative flex items-center">
                            <div className="relative">
                                <BellIcon className="w-4 h-4" />
                                {unreadCount > 0 && (
                                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                )}
                            </div>
                            <span className="hidden lg:inline">Notifications</span>
                        </Link>
                    </Button>
                    
                    <Button variant="ghost" className="flex items-center gap-2" asChild>
                        <Link
                            href={`/profile/${user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]}`}
                        >
                            <UserIcon className="w-4 h-4" />
                            <span className="hidden lg:inline">Profile</span>
                        </Link>
                    </Button>
                    <UserButton />
                </>
            ) : (
                <SignInButton mode="modal">
                    <Button variant="default">Sign In</Button>
                </SignInButton>
            )}
        </div>    
    )
}

export default DesktopNavbar