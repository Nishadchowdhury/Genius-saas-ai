import { tools } from "@/constants"
import C_card from "./ui/c-card"

function HeroCards() {



    return (
        <div className="grid grid-flow-row md:grid-cols-5 grid-cols-1 gap-4 place-items-center md:h-[40vh]">
            {
                tools.map(({ label, icon, href, color, bgColor }, i) => {
                    return (
                        <div className="" key={label}>
                            <C_card label={label} href={href} color={color} bgColor={bgColor} Icon={icon} i={i} />
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
export default HeroCards