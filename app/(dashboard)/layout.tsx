import Navbar from "@/components/Navbar"
import Sidebar from "@/components/sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"

async function layout({ children }: {
  children: React.ReactNode
}) {

  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()

  return (
    <div className="h-full relative text-gray-600">
      <div className="hidden h-full w-72 md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <div className="h-full ">
          <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        </div>
      </div>

      <main className=" text-gray-600 md:pl-72">
        <Navbar />
        {children}
      </main>

    </div>
  )
}
export default layout