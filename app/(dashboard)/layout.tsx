import Navbar from "@/components/Navbar"
import Sidebar from "@/components/sidebar"

function layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative text-gray-600">
      <div className="hidden h-full w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div className="">
          <Sidebar />
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