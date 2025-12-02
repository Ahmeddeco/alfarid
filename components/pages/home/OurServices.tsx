import { services } from "@/constants/homePage"
import ServiceCard from "./ServiceCard"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OurServices() {
	return (
		<section className="section flex flex-col gap-8 " id="OurServices">
			{/* --------------------------------- title -------------------------------- */}
			<div className="flex flex-col gap-4 items-center justify-center">
				<h2>our services - your growth engine</h2>
				<h6>
					we provide a suite of tailored services designed to amplify your brand&apos;s reach and accelerate your
					business growth
				</h6>
			</div>

			{/* --------------------------------- cards -------------------------------- */}
			<div className="grid lg:grid-cols-3 grid-cols-1 gap-8 ">
				{services.map(({ description, subTitle, title }, index) => (
					<ServiceCard title={title} subTitle={subTitle} description={description} key={index} />
				))}

				{/* ------------------------------ next step ----------------------------- */}
				<Card className="lg:col-span-2 gradient text-neutral-100 relative">
					<CardContent className="flex flex-col gap-4 h-full items-center justify-center ">
						<h2>take the next step toward success</h2>
						<h6 className="text-center ">
							don&apos;t let opportunities pass you by. the digital world is full of potential, and with <br />
							alfarid by your side, you can seize it.
						</h6>
						<Button variant={"black"} size={"wide"} asChild>
							<Link href={"https://wa.me/+201152640142"} target="_blank">
								<Phone />
								contact us now!
							</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
