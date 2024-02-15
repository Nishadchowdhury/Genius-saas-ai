"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"


function CrispChat() {

    useEffect(() => {
        Crisp.configure("dcdab2a7-6164-4b65-8b1e-e2922aa2fcc4");
    }, [])


    return null;
}
export default CrispChat