"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings } from "lucide-react"

import { cn } from "@/lib/utils";


const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"]
})


const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-sky-500",
  },
]


function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              alt="logo"
              src={'/logo.png'}
            />
          </div>
          <h1
            className={cn("text-2xl font-bold", montserrat.className)}
          >
            Genius
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (

            <Link
              key={route.href}
              href={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">

              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>

            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
export default Sidebar



// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Montserrat } from 'next/font/google'

// import { cn } from "@/lib/utils";
// import { Badge } from "@/components/ui/badge";

// const poppins = Montserrat ({ weight: '600', subsets: ['latin']  })

// export const Sidebar = () => {
//   const pathname = usePathname();

//   const routes = [
//     {
//       label: 'Chat',
//       icon: '/chat.png',
//       active: pathname === '/',
//       href: '/',
//     },
//     {
//       label: 'Image Generator',
//       icon: '/image.png',
//       active: false,
//       href: '/image',
//       premium: true,
//     },
//     {
//       label: 'Blog Writer',
//       icon: '/blog.png',
//       active: false,
//       href: '/blog',
//       premium: true,
//     },
//     {
//       label: 'Email Writer',
//       icon: '/mail.png',
//       active: false,
//       href: '/email',
//       premium: true,
//     }
//   ]

//   return (
//     <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
//       <div className="px-3 py-2">
//         <div className="flex items-center pl-3 mb-14">
//           <div className="relative h-10 w-10 mr-4">
//             <Image fill alt="Logo" src="/nira.png" />
//           </div>
//           <h1 className={cn("text-3xl font-bold", poppins.className)}>
//             Genius
//           </h1>
//         </div>
//         <div className="space-y-1">
//           {routes.map((route) => (
//             <div
//               key={route.label}
//               className={cn(
//                 "group flex p-3 w-full justify-start font-semibold cursor-pointer hover:text-white transition",
//                 route.active ? "text-white" : "text-zinc-500"
//               )}
//             >
//               <div className="flex items-center flex-1">
//                 <div className="relative h-8 w-8 mr-4 group-hover:scale-125 transition duration-150">
//                   <Image alt="Icon" src={route.icon} fill />
//                 </div>
//                 {route.label}
//               </div>
//               {route.premium && (
//                 <Badge variant="premium" className="font-bold uppercase p-2">
//                   pro
//                 </Badge>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }