"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card";
import { Max_Free_Counts } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hook/use-pro-modal";

interface FreeCounterProps {
    apiLimitCount: number
}


function FreeCounter({ apiLimitCount = 0 }: FreeCounterProps) {
    const [mounted, setMounted] = useState(false)
    const proModal = useProModal();


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="px-3" >
            <Card className="bg-white/10 border-10 " >
                <CardContent className="py-6">

                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {Max_Free_Counts} Free Generations
                        </p>

                        <Progress
                            className="h-3"
                            value={(apiLimitCount / Max_Free_Counts) * 100}
                        />
                    </div>
                    <Button
                        onClick={proModal.onOpen}
                        className="w-full"
                        variant={"premium"}
                    >
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
export default FreeCounter