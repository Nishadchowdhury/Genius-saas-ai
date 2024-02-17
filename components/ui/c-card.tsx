import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

interface CcardProps {
    label: string;
    Icon: LucideIcon;
    href: string;
    color: string;
    bgColor: string;
    i: number
}

const labelStrings = ["Argue", "Listen", "See", "Watch", "Implement"]


function C_card({ label, Icon, href, color, bgColor, i, }: CcardProps) {

    const classes = {
        circle: "block absolute aspect-[1] rounded-[50%] top-0 right-0  backdrop-blur-[0.8px] transition-all duration-500 ease-in-out"
    }

    return (
        <Link href={href}>
            <div className="wrapper w-[290px] h-[300px] ">

                <div className={cn("card h-full rounded-[50px] transition-all duration-500 ease-in-out", bgColor)}>
                    <div className="logo absolute top-0 right-0 bg-black">
                        <div
                            className={cn("circle circle1", classes.circle)}>
                        </div>
                        <div
                            className={cn("circle circle2", classes.circle)}>
                        </div>
                        <div
                            className={cn("circle circle3", classes.circle)}>
                        </div>
                        <div
                            className={cn("circle circle4", classes.circle)}>
                        </div>
                        <div
                            className={cn("circle circle5", classes.circle, bgColor)}>
                            <span className="text-white">
                                <Icon />
                            </span>
                        </div>
                    </div>


                    <div
                        className="glass absolute inset-[8px] rounded-[55px] rounded-tr-[100%] border-x transition-all duration-500 ease-in-out ">

                        <div className="content">
                            <span className="block text-black font-semibold text-xl">
                                {label}
                            </span>
                            <span className="text text-base  block text-black  font-normal tracking-[1px] mt-5">
                                Think as you go and {labelStrings[i]} in reality.
                            </span>
                        </div>

                        <div
                            className="bottom px-[10px] py-[12px] absolute bottom-5 left-5 right-5 flex items-center justify-between ">
                            <div className=" transition-all duration-200 ease-in-out w-full">

                                <span className="block">
                                    <Image src="/logo.png" className="inline grayscale " width={30} height={30} alt="Empty" />    Start {label}
                                </span>
                            </div>
                        </div>


                    </div>


                </div >
            </div >
        </Link>
    )
}
export default C_card;