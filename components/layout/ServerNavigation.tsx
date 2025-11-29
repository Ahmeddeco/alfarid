"use client"

import { serverNav } from "@/constants/serverNav"
import { SidebarMenu, SidebarMenuButton } from "../ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React from "react"

export default function ServerNavigation() {
	const pathName = usePathname()

	return (
		<SidebarMenu>
			{serverNav.map(({ href, icon, title }) => (
				<SidebarMenu key={href}>
					<SidebarMenuButton
						asChild
						className={`${
							pathName === href
								? "underline-offset-8 underline font-extrabold text-primary"
								: "font-medium"
						}  capitalize`}
					>
						<Link href={href}>
							{React.createElement(icon)}
							{title}
						</Link>
					</SidebarMenuButton>
				</SidebarMenu>
			))}
		</SidebarMenu>
	)
}
