"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchemaSettingAI, formSchemaSettingReplicate } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SVG_Replicate from "@/components/svgs/replicateAi";
import SVG_OpenAi from "@/components/svgs/openAi";
import { Plus } from "lucide-react";
import Column from "@/components/ui/custom/Column";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


interface localStorageProps {
    OPENAI_API_KEY?: string;
    REPLICATE_API_TOKEN?: string;
}

function SettingForms() {

    const [mounted, setMounted] = useState(false)


    //openAI
    const formOpenAi = useForm<z.infer<typeof formSchemaSettingAI>>({
        resolver: zodResolver(formSchemaSettingAI),
        defaultValues: {
            OPENAI_API_KEY: ""
        }
    });


    //replicate 
    const formReplicate = useForm<z.infer<typeof formSchemaSettingReplicate>>({
        resolver: zodResolver(formSchemaSettingReplicate),
        defaultValues: {
            REPLICATE_API_TOKEN: "",

        }
    });


    //openAI Submit
    const onSubmitOpenAI = async (values: z.infer<typeof formSchemaSettingAI>) => {
        LocalStorage({ OPENAI_API_KEY: values.OPENAI_API_KEY })

    }

    //replicate Submit
    const onSubmitReplicate = async (values: z.infer<typeof formSchemaSettingReplicate>) => {

        LocalStorage({ REPLICATE_API_TOKEN: values.REPLICATE_API_TOKEN })

    }


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    // CRUD with localstorage
    function LocalStorage({ OPENAI_API_KEY, REPLICATE_API_TOKEN }: localStorageProps) {

        if (OPENAI_API_KEY) {
            localStorage.setItem("OPENAI_API_KEY", JSON.stringify({ key: OPENAI_API_KEY, creatingTime: new Date().getTime() }))

        } else if (REPLICATE_API_TOKEN) {
            localStorage.setItem("REPLICATE_API_TOKEN", JSON.stringify({ key: REPLICATE_API_TOKEN }))

        } else {
            return toast.error("No API key added!!!")
        }


    }

    const openAI_keys = [JSON.parse(String(localStorage.getItem("OPENAI_API_KEY"))).key]

    const replicateAi_Tokens = [JSON.parse(String(localStorage.getItem("REPLICATE_API_TOKEN"))).key]

    return (
        <>
            <div>
                <div className="rounded-lg border bg-[url(/openAi.png)] bg-no-repeat bg-cover" >
                    <Form {...formOpenAi} >
                        <form onSubmit={formOpenAi.handleSubmit(onSubmitOpenAI)}
                            className="rounded-lg w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 backdrop-blur-md" >
                            <FormField
                                name="OPENAI_API_KEY"
                                render={({ field }) => (
                                    <FormItem className="col-span-9" >
                                        <FormControl >
                                            <Input
                                                className="bg-white/60 text-black "
                                                placeholder="Add your openAi API_KEY"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}

                            />
                            <div className="col-span-3 md:col-span-1 rounded-lg flex items-center justify-center" >
                                <div className="h-10 w-10 bg-[url(/openAi.png)] text-white rounded-xl p-2"
                                >
                                    <SVG_OpenAi />
                                </div>
                            </div>

                            <Button className="col-span-12 lg:col-span-2 w-full  bg-[url(/openAi.png)]"
                            // disabled={isLoading}
                            >
                                Add <Plus className="w-5 h-5 ml-2" />
                            </Button>
                        </form>
                    </Form>

                </div>

                <div>
                    <ScrollArea className="h-[150px] w-full" >
                        {
                            openAI_keys.map((token: string) => (

                                <div key={token} >
                                    <Column
                                        text={token}
                                    />
                                </div>

                            ))
                        }
                    </ScrollArea>
                </div>

            </div>

            <div className="mt-5" >
                <div className="rounded-lg border  bg-[url(/replicateAi.png)] bg-no-repeat bg-cover " >
                    <Form {...formReplicate} >
                        <form onSubmit={formReplicate.handleSubmit(onSubmitReplicate)}
                            className="rounded-lg w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 backdrop-blur-md" >
                            <FormField
                                name="REPLICATE_API_TOKEN"
                                render={({ field }) => (
                                    <FormItem className="col-span-9 " >
                                        <FormControl >
                                            <Input
                                                className="bg-white/60 text-black "
                                                placeholder="Add your openAi API_TOKEN"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}

                            />
                            <div className="col-span-3 md:col-span-1 rounded-lg flex items-center justify-center" >
                                <div className="h-10 w-10 bg-[url(/replicateAi.png)] text-white rounded-xl p-2"
                                >
                                    <SVG_Replicate />
                                </div>
                            </div>

                            <Button className="col-span-12 lg:col-span-2 w-full  bg-[url(/replicateAi.png)]"
                            // disabled={isLoading}
                            >
                                Add <Plus className="w-5 h-5 ml-2" />
                            </Button>
                        </form>
                    </Form>

                </div>

                <div>
                    <ScrollArea className="h-[150px] w-full" >
                        {
                            replicateAi_Tokens.map((token: string) => (

                                <div key={token} >
                                    <Column
                                        text={token}
                                    />
                                </div>

                            ))
                        }
                    </ScrollArea>
                </div>

            </div>
        </>
    )
}
export default SettingForms