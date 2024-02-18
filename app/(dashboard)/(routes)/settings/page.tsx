import { Settings } from "lucide-react";



import { checkSubscription } from "@/lib/subscription";
import { Heading } from "@/components/Heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { Form } from "@/components/ui/form";

const SettingsPage = async () => {
    const isPro = await checkSubscription();

    return (
        <div>
            <Heading
                title="Settings"
                description="Manage account settings."
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />


            <div className="px-4 lg:px-8 space-y-4 bg-red-400 h-full">

                <div className="px-4 lg:px-8">
                    <div className="">
                        {/* <Form>

                        </Form> */}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default SettingsPage;
