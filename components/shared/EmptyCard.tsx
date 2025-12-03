import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "../ui/button"
import { LucideIcon, Trash2 } from "lucide-react"
import Link from "next/link"
import React from "react"

type Props = {
	href: string
	linkTitle: string
	linkIcon: LucideIcon
}

export default function EmptyCard({ href, linkTitle, linkIcon }: Props) {
	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia variant="icon">
					<Trash2 />
				</EmptyMedia>
				<EmptyTitle>No data</EmptyTitle>
				<EmptyDescription>No data found in the database.</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button asChild>
					<Link href={href}>
						{React.createElement(linkIcon)}
						{linkTitle}
					</Link>
				</Button>
			</EmptyContent>
		</Empty>
	)
}
