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

export function ServerSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>
						<Logo />
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
