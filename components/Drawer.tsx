"use client"
import { Drawer } from 'vaul';
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightFromCircle, Facebook, Github, Globe, Linkedin } from "lucide-react";

function Drawer_Component() {

    return (
        <Drawer.Root

        >
            <Drawer.Trigger asChild>
                <div className=" relative h-8 px-2 rounded-full border flex items-center justify-center cursor-pointer " >
                    <Image src={'/who.png'} width={30} height={30} alt="developer" title="developer" />
                    <ArrowUpRightFromCircle className="w-4 opacity-50" />
                </div>
            </Drawer.Trigger>

            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xsm  " />

                <Drawer.Content className=" backdrop-blur-md flex flex-col rounded-t-[10px] h-[70%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="p-4  rounded-t-[10px] flex-1 h-full">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />

                        <div className=" mx-auto  h-full">
                            <Drawer.Title className="font-medium mb-4 h-full ">

                                <div className='flex flex-col md:flex-row gap-3 h-full' >
                                    <div className='md:w-1/2 h-full  flex flex-col justify-center items-center'>

                                        <div className='relative w-80 h-80  ' >
                                            <Image className='absolute' src={'/empty.png'} fill alt='author' />
                                        </div>

                                        <div className='relative md:w-3/5 w-3/4 h-14 mx-auto md:hidden flex flex-row items-center justify-evenly' >
                                            <a className='inline-block bg-blue-600/40 p-2 rounded-md ' href='https://linkedin.com/in/nishadchowdhury/'> <Linkedin className='text-blue-600' />  </a>
                                            <a className='inline-block bg-gray-600/40 p-2 rounded-md ' href='https://github.com/Nishadchowdhury'> <Github className='text-gray-600' />  </a>
                                            <a className='inline-block bg-blue-600/40 p-2 rounded-md ' href='https://facebook.com/NishadChowdhury.fb'> <Facebook className='text-blue-600' />   </a>
                                            <a className='inline-block bg-gray-600/40 p-2 rounded-md ' href='https://nishadchowdhury.netlify.app'> <Globe className='text-gray-600' />  </a>
                                        </div>

                                    </div>
                                    <div className='md:w-1/2 h-full hidden md:flex items-center '>


                                        <div className="flex flex-wrap w-full ">
                                            <div className="p-2 w-full">
                                                <a href='https://linkedin.com/in/nishadchowdhury' target="blank" >
                                                    <div className="bg-blue-600/10 p-4 h-full flex items-center justify-between rounded-md ">
                                                        <div className="flex items-center justify-center ">
                                                            <span className='inline-block w-10 h-10 mr-5 p-1 bg-blue-600/10 rounded-md' >  <Linkedin className='w-full h-full text-blue-600' /> </span>
                                                            <span className="text-blue-600 font-extralight text-center border-b border-spacing-1 border-opacity-10 "> https://linkedin.com/in/nishadchowdhury/ </span>
                                                        </div>

                                                        <span className='flex items-center justify-center w-10 h-10 '> <ArrowUpRightFromCircle className="w-1/2 text-blue-600" /> </span>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="p-2 w-full">
                                                <a href='https://github.com/Nishadchowdhury' target="blank" >
                                                    <div className="bg-gray-600/10 p-4 h-full flex items-center justify-between rounded-md ">
                                                        <div className="flex items-center justify-center ">
                                                            <span className='inline-block w-10 h-10 mr-5 p-1 bg-gray-600/10 rounded-md' >  <Github className='w-full h-full text-gray-600' /> </span>
                                                            <span className="text-gray-600 font-extralight text-center border-b border-spacing-1 border-opacity-10 "> https://github.com/Nishadchowdhury </span>
                                                        </div>

                                                        <span className='flex items-center justify-center w-10 h-10 '> <ArrowUpRightFromCircle className="w-1/2 text-gray-600" /> </span>
                                                    </div>
                                                </a>
                                            </div>


                                            <div className="p-2 w-full">
                                                <a href='https://facebook.com/NishadChowdhury.fb' target="blank" >
                                                    <div className="bg-blue-600/10 p-4 h-full flex items-center justify-between rounded-md ">
                                                        <div className="flex items-center justify-center ">
                                                            <span className='inline-block w-10 h-10 mr-5 p-1 bg-blue-600/10 rounded-md' >  <Facebook className='w-full h-full text-blue-600' /> </span>
                                                            <span className="text-blue-600 font-extralight text-center border-b border-spacing-1 border-opacity-10 "> https://facebook.com/NishadChowdhury.fb </span>
                                                        </div>

                                                        <span className='flex items-center justify-center w-10 h-10 '> <ArrowUpRightFromCircle className="w-1/2 text-blue-600" /> </span>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="p-2 w-full">
                                                <a href='https://nishadchowdhury.netlify.app' target="blank" >
                                                    <div className="bg-gray-600/10 p-4 h-full flex items-center justify-between rounded-md ">
                                                        <div className="flex items-center justify-center ">
                                                            <span className='inline-block w-10 h-10 mr-5 p-1 bg-gray-600/10 rounded-md' >  <Globe className='w-full h-full text-gray-600' /> </span>
                                                            <span className="text-gray-600 font-extralight text-center border-b border-spacing-1 border-opacity-10 "> https://nishadchowdhury.netlify.app </span>
                                                        </div>

                                                        <span className='flex items-center justify-center w-10 h-10 '> <ArrowUpRightFromCircle className="w-1/2 text-gray-600" /> </span>
                                                    </div>
                                                </a>
                                            </div>


                                        </div>


                                    </div>
                                </div>

                            </Drawer.Title>
                        </div>


                    </div>


                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}
export default Drawer_Component


