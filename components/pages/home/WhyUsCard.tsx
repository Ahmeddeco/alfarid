import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

type Props = {
	title: string
	description: string
}
export default function WhyUsCard({ title, description }: Props) {
	return (
		<Card className="lg:h-56 h-fit ">
			<CardContent className="flex flex-col gap-4">
				<Award />
				<h4 className="text-start">{title}</h4>
				<h6 className="text-start ">{description}</h6>
			</CardContent>
		</Card>
	)
}
