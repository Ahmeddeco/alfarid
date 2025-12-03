import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarFooter,
} from "@/components/ui/sidebar"
import Logo from "./Logo"
import { ThemeButton } from "../theme/ThemeButton"
import UserButton from "../auth/UserButton"
import ServerNavigation from "./ServerNavigation"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"

export function ServerSidebar() {
	return (
		<Sidebar className="py-2">
			<SidebarContent>
				<SidebarGroup className="space-y-6">
					<SidebarGroupLabel>
						<Button variant={"ghost"}>
							<Logo />
						</Button>
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<ServerNavigation />
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter className="flex flex-row items-center justify-between">
				<ThemeButton />
				<UserButton />
			</SidebarFooter>
		</Sidebar>
	)
}
