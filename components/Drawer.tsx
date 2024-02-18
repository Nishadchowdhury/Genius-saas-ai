"use client"
import { Drawer } from 'vaul';
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRightFromCircle } from "lucide-react";

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

                <Drawer.Content className=" backdrop-blur-md flex flex-col rounded-t-[10px] h-[60%] mt-24 fixed bottom-0 left-0 right-0">
                    <div className="p-4  rounded-t-[10px] flex-1">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                        <div className="max-w-md mx-auto">
                            <Drawer.Title className="font-medium mb-4">
                            
                            </Drawer.Title>

                        </div>
                    </div>


                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}
export default Drawer_Component


