import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowBigRight } from "lucide-react"
import Image from "next/image"

type Props = {
	career: string
	mainTitle: string
	underImage: string
	image: string
	imageFirst: boolean
	points: {
		title: string
		description: string
	}[]
}
export default function ServicesCard({ career, image, mainTitle, points, underImage, imageFirst = false }: Props) {
	return (
		<div
			className={`flex ${
				imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
			} flex-col items-center lg:justify-between justify-center gap-8 min-h-[60vh]`}
		>
			{/* -------------------------------- title ------------------------------- */}
			<div className="flex flex-col gap-4 lg:w-1/2 w-full">
				<h4 className="text-start uppercase tracking-widest">{career}</h4>
				<h2 className="text-start">{mainTitle}</h2>
				<div className="w-3xs">
					<Separator className="bg-primary" />
				</div>
				{/* ----------------------------- points ----------------------------- */}
				<div className="flex flex-col gap-4">
					{points.map(({ title, description }, index) => (
						<div className="flex gap-2" key={index}>
							<ArrowBigRight className="lg:block hidden text-primary" />
							<div className="flex flex-col gap-2">
								<h4 className="text-start">{title}</h4>
								<h6 className="text-balance text-start">{description}</h6>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* -------------------------------- image ------------------------------- */}
			<div className="flex flex-col items-center justify-center h-full min-h-36 lg:w-1/2 w-full aspect-square  ">
				<div className="aspect-square h-full relative ">
					<Image src={image} alt={career} fill className="object-cover" />
				</div>
				<Card className="lg:w-lg w-full">
					<CardContent>{underImage}</CardContent>
				</Card>
			</div>
		</div>
	)
}
