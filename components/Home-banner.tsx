import { tools } from "@/constants"
import SVG_OpenAi from "./svgs/openAi"
import SVG_Replicate from "./svgs/replicateAi"
import { cn } from "@/lib/utils"
import { ArrowUpRightFromCircle } from "lucide-react"
import Link from "next/link"
import HomeFooter from "./HomeFooter"


function HomeBanner() {

    const conversation = tools[0]
    const code = tools[1]
    const image = tools[2]
    const music = tools[3]
    const video = tools[4]

    return (
        <div className=" md:h-[50vh] text-center flex flex-col justify-between " >
            <div >
                <h1 className=" md:text-6xl text-2xl pt-5 md:pt-2 capitalize">first fully <span className="neonText capitalize">free </span>  AI for eternity</h1>

                <h3 className="mt-1" >Just a few steps away.</h3>



                <div className="mt-3 w-full relative" >
                    <div className="p-4 mt-4 w-full flex flex-col gap-5">




                        <div className="min-h-[80px] w-full flex flex-col md:grid grid-cols-12  gap-5 text-white">

                            <div className=" bg-[url(/openAi.png)]  bg-cover bg-center bg-opacity-5 col-start-1 col-end-7  rounded-xl  shadow-md w-full">
                                <div className="h-full w-ful  relative mr-auto backdrop-blur rounded-xl" >
                                    <div className="h-12 w-12 -top-4 -left-4 absolute bg-[url(/openAi.png)]   text-white rounded-3xl p-3
                                
                                shadow-[8px_9px_17px_0px_#000000fc]
                                ">
                                        <SVG_OpenAi />
                                    </div>

                                    <div className="md:pl-10  h-full rounded-xl bg-black/50 flex flex-col items-center justify-center " >
                                        <h1 className="font-bold text-2xl" > Powered by Open AI</h1>
                                        <h1 className="font-bold text-base" >Swift uses Open AI in its way to present you with a niche output.</h1>
                                    </div>
                                </div>

                            </div>


                            {/* cards of open ai */}

                            <div className=" bg-[url(/openAi.png)] bg-cover bg-center bg-opacity-5  col-start-7 col-end-9  rounded-xl   shadow-md w-full">
                                <Link href={conversation.href} >
                                    <div className="h-full w-full relative mr-auto bac flex items-center justify-start md:justify-evenly  gap-3 backdrop-blur-xl bg-black/50 rounded-xl " >
                                        <span className={cn("flex items-center justify-center w-10 h-10 ")}> <conversation.icon className={conversation.color} /> </span> {conversation.label}

                                        <ArrowUpRightFromCircle className={cn("w-5 h-5 absolute -top-2 -right-2  ", conversation.color)} />
                                    </div>
                                </Link>
                            </div>

                            <div className=" bg-[url(/openAi.png)] bg-cover bg-center bg-opacity-5  col-start-9 col-end-11  rounded-xl  shadow-md w-full">
                                <Link href={code.href} >
                                    <div className="h-full w-ful flex items-center justify-start md:justify-evenly mr-auto backdrop-blur-xl bg-black/50 rounded-xl " >
                                        <span className={cn("flex items-center justify-center w-10 h-10 ")}> <code.icon className={code.color} /> </span> {code.label}
                                        <ArrowUpRightFromCircle className={cn("w-5 h-5 absolute -top-2 -right-2  ", code.color)} />
                                    </div>
                                </Link>
                            </div>

                            <div className=" bg-[url(/openAi.png)] bg-cover bg-center bg-opacity-5  col-start-11 col-end-13  rounded-xl  shadow-md w-full">
                                <Link href={image.href} >
                                    <div className="h-full w-ful flex items-center justify-start md:justify-evenly mr-auto backdrop-blur-xl bg-black/50 rounded-xl " >
                                        <span className={cn("flex items-center justify-center w-10 h-10 ")}> <image.icon className={image.color} /> </span> {image.label}
                                        <ArrowUpRightFromCircle className={cn("w-5 h-5 absolute -top-2 -right-2  ", image.color)} />
                                    </div>
                                </Link>
                            </div>

                        </div>




                        {/* div of replicate */}


                        <div className="min-h-[80px] w-full flex flex-col md:grid grid-cols-12  gap-5 text-white">

                            <div className=" bg-[url(/replicateAi.png)]  bg-cover bg-center bg-opacity-5 col-start-1 col-end-9  rounded-xl  shadow-md w-full">

                                <div className="h-full w-ful  relative mr-auto backdrop-blur rounded-xl" >
                                    <div className="h-12 w-12 -top-4 -left-4 absolute bg-[url(/replicateAi.png)] text-white rounded-3xl p-3
                                
                                shadow-[8px_9px_17px_0px_#000000fc]">
                                        <SVG_Replicate />
                                    </div>

                                    <div className="md:pl-10  h-full rounded-xl bg-black/50 flex flex-col items-center justify-center " >
                                        <h1 className="font-bold text-2xl" > Powered by Replicate AI</h1>
                                        <h1 className="font-bold text-base" >Swift uses Replicate AI in its way to present you with a niche output.</h1>
                                    </div>


                                </div>

                            </div>

                            {/* cards of replicate ai */}

                            <div className=" bg-[url(/replicateAi.png)] bg-cover bg-center bg-opacity-5  col-start-9 col-end-11  shadow-md w-full rounded-xl">
                                <Link href={music.href} >

                                    <div className="h-full w-ful flex items-center justify-start md:justify-evenly mr-auto backdrop-blur-xl bg-black/50  rounded-xl " >
                                        <span className={cn("flex items-center justify-center w-10 h-10 ")}> <music.icon className={music.color} /> </span> {music.label}
                                        <ArrowUpRightFromCircle className={cn("w-5 h-5 absolute -top-2 -right-2  ", music.color)} />
                                    </div>

                                </Link>
                            </div>


                            <div className=" bg-[url(/replicateAi.png)] bg-cover bg-center bg-opacity-5  col-start-11 col-end-13  shadow-md w-full rounded-xl">
                                <Link href={video.href} >

                                    <div className="h-full w-ful flex items-center justify-start md:justify-evenly mr-auto backdrop-blur-xl bg-black/50 rounded-xl " >
                                        <span className={cn("flex items-center justify-center w-10 h-10 ")}> <video.icon className={video.color} /> </span> {video.label}
                                        <ArrowUpRightFromCircle className={cn("w-5 h-5 absolute -top-2 -right-2  ", video.color)} />
                                    </div>

                                </Link>
                            </div>

                        </div>




                    </div>
                </div>
            </div>



            <HomeFooter />

        </div>
    )
}
export default HomeBanner