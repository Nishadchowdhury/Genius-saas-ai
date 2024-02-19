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

function SettingForms() {

    const openAI_Tokens = ["kjfnsajkfdsjfnsjdakffddsakfmdasf", "kjfnsajkfdsdsjfnfsasjdakffdsakfmdasf", "kjfnsajkfsfdsjfnsjdakffdsakfmdasf", "kjfnsajkfdsjfnsjdaksffdsakfmdasf", "kjfnsajkfdsjfnsjsdakffdsakfmdasf", "kjfnsajkfdsjfnsjdakffdsafsakfmdasf", "kjfnsajkfdsjfnsjdakffdfdsakfmdasf",]

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
        console.log(values)
    }

    //replicate Submit
    const onSubmitReplicate = async (values: z.infer<typeof formSchemaSettingReplicate>) => {
        console.log(values)
    }


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
                            openAI_Tokens.map((token: string) => (

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
                                    <SVG_OpenAi />
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
                            openAI_Tokens.map((token: string) => (

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