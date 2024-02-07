import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./Mobile-sidebar"

function Navbar() {
    return (
        <div className="flex items-center p-4 bg-red-200">

            <MobileSidebar />

            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}
export default Navbar