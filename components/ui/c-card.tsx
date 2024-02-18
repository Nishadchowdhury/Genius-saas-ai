import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import { Ubuntu } from "next/font/google";

interface CcardProps {
    label: string;
    Icon: LucideIcon;
    href: string;
    color: string;
    bgColor: string;
    i: number
}
const labelStrings = ["Argue", "Listen", "See", "Watch", "Implement"]
const classes = {
    circle: "block absolute aspect-[1] rounded-[50%] top-0 right-0  backdrop-blur-[0.8px] transition-all duration-500 ease-in-out"
}


function C_card({ label, Icon, href, color, bgColor, i, }: CcardProps) {




    return (
        <Link href={href}>
            <div className={cn("wrapper text-black font-bold md:w-[217.5px] w-[290px] h-[300px] md:h-[225px]")}>

                <div className={cn("card h-full rounded-[50px] transition-all duration-500 ease-in-out", bgColor)}>
                    <div className="logo absolute top-0 right-0 bg-black">
                        <div
                            className={cn(`circle circle1  w-[170px] md:w-[127.5px]    `, classes.circle, bgColor)}>
                        </div>
                        <div
                            className={cn(`circle circle2  w-[140px] md:w-[105px] `, classes.circle, bgColor)}>
                        </div>
                        <div
                            className={cn(`circle circle3  w-[110px] md:w-[82.5px]     `, classes.circle, bgColor)}>
                        </div>
                        <div
                            className={cn(`circle circle4 w-[80px] md:w-[60px]  `, classes.circle, bgColor)}>
                        </div>
                        <div
                            className={cn(`circle circle5 w-[50px] md:w-[37.5px]`, classes.circle, bgColor)}>
                            <span className="text-white" >
                                <Icon className={color} />
                            </span>

                        </div>
                    </div>


                    <div
                        className="glass absolute inset-[8px] rounded-[55px] rounded-tr-[100%] border-x transition-all duration-500 ease-in-out ">
                        <div className="content pt-24 md:pt-14 pb-0 px-10 md:px-4">
                            <span className="block font-semibold text-xl md:text-sm ">
                                {label}
                            </span>
                            <span className="text text-base md:text-sm block   font-normal  tracking-[1px] mt-5">
                                Think as you go and {labelStrings[i]} in reality.
                            </span>
                        </div>

                        <div
                            className="bottom px-[10px] py-[12px] md:p-0 md:text-sm absolute bottom-5 left-5 right-5 flex items-center justify-between ">
                            <div className=" transition-all duration-200 ease-in-out w-full">
                                <Image src="/logo.png" className=" grayscale hidden md:inline w-6 h-6 " width={30} height={30} alt="Empty" />
                                <span className="block ">
                                    <Image src="/logo.png" className="inline grayscale md:hidden " width={30} height={30} alt="Empty" /> Start {label}
                                </span>
                            </div>
                        </div>


                    </div>


                </div >
            </div >
        </Link >
    )
}
export default C_card;

