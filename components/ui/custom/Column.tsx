import { cn } from "@/lib/utils"
import { ArrowUpRightFromCircle, Globe, LucideIcon } from "lucide-react"

interface Column {
    href?: string,
    textColor?: string,
    bgColor?: string,
    text?: string,
    Icon?: LucideIcon
}

function Column({ href, textColor = "text-gray-600", bgColor = "bg-gray-600/10", text, Icon }: Column) {


    const domElement = <div className={cn(" h-full flex items-center justify-between rounded-md ", bgColor, (href ? "p-4" : "p-1"))}>
        <div className="flex items-center justify-center ">
            {Icon && <span className={cn('inline-block w-10 h-10 mr-5 p-1 rounded-md', bgColor)} >
                <Icon className={cn('w-full h-full ', textColor)} />
            </span>}
            {(href || text) && <span className={cn(" font-extralight text-center border-b border-spacing-1 border-opacity-10 ", textColor)}> {href || text} </span>}
        </div>

        {href && <span className='flex items-center justify-center w-10 h-10 '> <ArrowUpRightFromCircle className={cn("w-1/2 ", textColor)} /> </span>}
    </div>


    const renderColumn = () => {
        if (href) {
            return (<a href='https://nishadchowdhury.netlify.app' target="_blank" rel="noopener noreferrer">
                {domElement}
            </a>)
        } else {
            return domElement
        }
    }



    return (
        <div className="p-2 w-full">
            {renderColumn()}
        </div>
    )
}
export default Column