import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

type Props = {
	title: string
	subTitle: string
	description: string
}
export default function ServiceCard({ description, subTitle, title }: Props) {
	return (
		<Link href={ "/services" }>
			<Card className="max-w-max w-full duration-700 ease-in-out hover:scale-105 ">
				<CardHeader>
					<CardTitle>
						<h2 className=" text-start">{title}</h2>
					</CardTitle>
					<div className="w-48">
						<Separator className="bg-primary " />
					</div>
				</CardHeader>
				<CardContent className="space-y-2">
					<h4 className=" text-start">{subTitle}</h4>
					<h6 className="lg:line-clamp-2 line-clamp-3 text-pretty text-start">{description}</h6>
				</CardContent>
			</Card>
		</Link>
	)
}
