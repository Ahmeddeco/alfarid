"use client"

import { frontNavLinks } from "@/constants/nav"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

export default function FrontNavigation() {
	const pathName = usePathname()

	return (
		<>
			{frontNavLinks.map((link) => (
				<Button
					asChild
					key={link.title}
					variant={"ghost"}
					className="w-full lg:w-fit"
				>
					<Link
						href={link.href}
						className={`${
							pathName === link.href
								? "underline-offset-8 underline font-extrabold"
								: "font-medium"
						}  capitalize`}
					>
						{link.title}
					</Link>
				</Button>
			))}
		</>
	)
}
