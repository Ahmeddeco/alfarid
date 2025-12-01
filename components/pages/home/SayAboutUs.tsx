"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RiDoubleQuotesL } from "react-icons/ri"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { sayAboutUs } from "@/constants/homePage"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function SayAboutUs() {
	return (
		<Card className="gradient text-neutral-100 h-auto mb-24 ">
			<CardContent className="flex lg:flex-row flex-col items-center justify-between h-full">
				{/* ----------------------------- title ----------------------------- */}
				<div className="flex flex-col items-start justify-center  h-full gap-4 flex-1">
					<RiDoubleQuotesL className="text-9xl " />
					<h2>
						what our clients <br />
						say about us
					</h2>
				</div>

				{/* ------------------------------ Carousel ------------------------------ */}
				{/* TODO FIX CAROUSEL IN MOBILE */}
				<div className="lg:flex-2 flex-1 w-sm  h-full 0">
					<Carousel
						plugins={[
							Autoplay({
								delay: 9000,
							}),
						]}
						className=" w-fit"
					>
						<CarouselContent>
							{sayAboutUs.map(({ image, job, name, whatSay }) => (
								<CarouselItem key={image} className="h-full w-fit">
									<Card className=" h-full lg:w-full w-sm">
										<CardHeader className="space-y-2">
											<div className="relative size-44">
												<Image src={image} alt={name} fill className="object-fill border rounded-2xl" />
											</div>
											<CardTitle>{name}</CardTitle>
											<CardDescription>{job}</CardDescription>
											<div className="w-6">
												<Separator className="bg-primary" />
											</div>
										</CardHeader>
										<CardContent>{whatSay}</CardContent>
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
