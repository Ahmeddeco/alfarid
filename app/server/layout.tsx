import { ServerSidebar } from "@/components/layout/ServerSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function ServerLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<SidebarProvider>
			<ServerSidebar />
			<div className="w-full p-4 ">
				<SidebarTrigger />
				<div className=" p-4">{children}</div>
			</div>
		</SidebarProvider>
	)
}
