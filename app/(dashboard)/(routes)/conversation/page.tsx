"use client"
import * as z from "zod";
import { Heading } from "@/components/Heading"
import { MessageSquare } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { ChatCompletionRequestMessage } from "openai";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";

import { formSchema } from "./constants"
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/User-avatar";
import { BotAvatar } from "@/components/Bot-avatar";
import { useProModal } from "@/hook/use-pro-modal";
import toast from "react-hot-toast";


function Conversation() {

    const router = useRouter();
    const [Messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
    const proModal = useProModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",

        }
    });

    const isLoading = form.formState.isSubmitting;

    const openAI_keys = [JSON.parse(String(localStorage.getItem("OPENAI_API_KEY"))).key]
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {

            const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
            const newMessages = [...Messages, userMessage];

            const response = await axios.post('/api/conversation', { messages: newMessages, apiKey: openAI_keys[0] });

            setMessages((current) => [...current, userMessage, response.data]);
            form.reset()

        } catch (error: any) {

            if (error?.response?.status === 403) {
                proModal.onOpen()
            } else {
                toast.error("Something went wrong!!!")
            }

        } finally {

            //it will refresh this server component
            router.refresh()
        }
    }

    return (
        <div>
            <Heading
                title="Conversation"
                description="Our most advanced conversation model."
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div className="">
                    <Form {...form} >
                        <form

                            onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10" >
                                        <FormControl className="m-0 p-0" >
                                            <Input
                                                className="border-0 outline-none focus-visible:ring-0 
                                            focus-visible:ring-transparent
                                            "
                                                disabled={isLoading}
                                                placeholder="How do I calculate the radius of a circle?"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <Button className="col-span-12 lg:col-span-2 w-full"
                                disabled={isLoading}
                            >
                                Generate
                            </Button>

                        </form>
                    </Form>
                </div>


                <div className="space-y-4 mt-4">

                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader />
                        </div>
                    )}

                    {Messages.length === 0 && !isLoading && (
                        <div>
                            <Empty label="No conversation started." />
                        </div>
                    )}

                    <div className="flex flex-col-reverse gap-4">
                        {
                            Messages.map((message) => (
                                <div key={message.content}

                                    className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg", message.role === 'user' ? "bg-white border border-black/10 " : "bg-muted")}
                                >
                                    {message.role === "user" ? <UserAvatar /> : <BotAvatar />}

                                    <p className="text-sm ">
                                        {message.content}
                                    </p>

                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Conversation