"use client"

import { useProModal } from "@/hook/use-pro-modal"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"
import { DialogDescription } from "@radix-ui/react-dialog"
import { Check, Code, ImageIcon, MessageSquare, Music, VideoIcon, Zap } from "lucide-react"
import { Card } from "./ui/card"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { tools } from "@/constants"


function ProModal() {
    const proModal = useProModal()
    const [loading, setLoading] = useState(false)

    const onSubscribe = async () => {
        try {
            setLoading(true);
            const response = axios.get("/api/stripe");

            window.location.href = (await response).data.url;

        } catch (error) {

            toast.error("Something went wrong!!!")

        } finally {
            setLoading(false);
        }
    }


    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2" >
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to Swift

                            <Badge variant={"premium"} className="uppercase text-sm py-1" >
                                Pro
                            </Badge>

                        </div>
                    </DialogTitle>

                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {
                            tools.map((tool) => (
                                <Card
                                    key={tool.label}
                                    className="p-3 border-black/5 flex items-center justify-between "
                                >
                                    <div className="flex items-center gap-x-4 ">
                                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                            <tool.icon className={cn("w-6 h-6", tool.color)} />
                                        </div>

                                        <div className="font-semibold text-sm">
                                            {tool.label}
                                        </div>

                                    </div>
                                    <Check className="text-primary w-5 h-5" />
                                </Card>
                            ))
                        }
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Button
                        disabled={loading}
                        onClick={onSubscribe}
                        variant={"premium"} className="w-full">
                        Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}
export default ProModal