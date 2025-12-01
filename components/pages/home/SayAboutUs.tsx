"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { sayAboutUs } from "@/constants/homePage"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { QuoteIcon } from "lucide-react"

export default function SayAboutUs() {
	return (
		<Card className="gradient text-neutral-100 h-auto mb-24 ">
			<CardContent className="flex lg:flex-row flex-col lg:items-center lg:justify-between  gap-8 ">
				{/* ----------------------------- title ----------------------------- */}
				<div className="flex flex-col items-start justify-center  h-full gap-4 flex-1">
					<QuoteIcon size={96}/>
					<h2>
						what our clients <br />
						say about us
					</h2>
				</div>

				{/* ------------------------------ Carousel ------------------------------ */}
				<div className="lg:flex-2 flex-1 w-full h-full">
					<Carousel
						plugins={[
							Autoplay({
								delay: 9000,
							}),
						]}
						className=" w-full"
					>
						<CarouselContent>
							{sayAboutUs.map(({ image, job, name, whatSay }) => (
								<CarouselItem key={image} className="h-full w-fit">
									<Card className=" h-full w-full ">
										<CardHeader>
											<div className="relative size-44 mb-2">
												<Image src={image} alt={name} fill className="object-fill border rounded-2xl" />
											</div>
											<CardTitle>{name}</CardTitle>
											<CardDescription className="line-clamp-1">{job}</CardDescription>
											<div className="w-48 lg:w-96">
												<Separator className="bg-primary" />
											</div>
										</CardHeader>
										<CardContent><h6 className="line-clamp-4">{whatSay}</h6></CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</CardContent>
		</Card>
	)
}
