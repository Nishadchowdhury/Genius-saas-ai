import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./Mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"

async function Navbar() {

    const apiLimitCount = await getApiLimitCount()

    return (
        <div className="flex items-center p-4">

            <MobileSidebar apiLimitCount={apiLimitCount} />

            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}
export default Navbar