import { ArrowUpRightFromCircle, LinkedinIcon } from "lucide-react"
import Image from "next/image"
import Drawer_Component from "./Drawer"

function HomeFooter() {
    return (
        <div className="h-10 flex flex-row items-center justify-center gap-2 p-2" >
            <h5 className="text-center  inline-block" >Swift AI developed By </h5>

            <Drawer_Component />
        </div>
    )
}
export default HomeFooter