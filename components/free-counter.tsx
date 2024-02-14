"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card";
import { Max_Free_Counts } from "@/constants";

interface FreeCounterProps {
    apiLimitCount: number
}


function FreeCounter({ apiLimitCount = 0 }: FreeCounterProps) {
    const [mounted, setMounted] = useState(false)

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
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}
export default FreeCounter