import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CircleChevronLeft, LucideIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

type Props = {
	icon?: LucideIcon
	children: React.ReactNode
	title: string
	description: string
	btnTitle: string
	href: string
}

export default function ServerPageCard({
	icon = CircleChevronLeft,
	children,
	title,
	description,
	btnTitle,
	href,
}: Props) {
	return (
		<Card className="min-h-[90vh]">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<CardAction>
					<Button asChild size={"sm"}>
						<Link href={href}>
							{React.createElement(icon)}
							{btnTitle}
						</Link>
					</Button>
				</CardAction>
			</CardHeader>
			<Separator />
			<CardContent>{children}</CardContent>
		</Card>
	)
}
