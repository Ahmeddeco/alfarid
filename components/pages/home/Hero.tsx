import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import client1 from "@/public/home/client1.webp"
import client2 from "@/public/home/client2.webp"
import client3 from "@/public/home/client3.webp"
import client4 from "@/public/home/client4.webp"

export default function Hero() {
	return (
		<section className=" section flex flex-col gap-16 lg:h-[80vh] h-auto pt-32 " id="Hero">
			<div className="flex flex-col items-center text-center gap-4">
				<h4>your digital success, guaranteed.</h4>
				<h1>boost sales, build brand, drive results.</h1>
			</div>
			<div className="flex lg:flex-row items-center flex-col lg:gap-24 gap-4 h-full">
				{/* ------------------------------ image ----------------------------- */}
				<div className="lg:w-1/2 w-full  h-full aspect-square  relative">
					<Image src={"/home/hero.webp"} alt={"hero"} fill className="object-contain" />
				</div>
				{/* ---------------------------- paragraph --------------------------- */}
				<div className="lg:w-1/2 w-full  h-auto flex flex-col gap-16 ">
					{/* ------------------------------ title ----------------------------- */}
					<div className="flex flex-col items-center lg:items-start gap-4">
						<h4>at alfarid</h4>
						<h6 className="lg:w-xl w-full text-center text-balance lg:text-start">
							We don&apos;t just offer services, we create solutions that drive growth, increase sales, and transform
							your digital presence
						</h6>
						<h6 className="lg:w-xl w-full text-center text-balance lg:text-start">
							We&apos;re passionate about turning your vision into reality and ensuting your success in the digital
							landscape.
						</h6>
						<div className="flex lg:flex-row flex-col gap-4 ">
							<Button>contact us now</Button>
							<Button variant={"outline"}>view services</Button>
						</div>
					</div>
					{/* ---------------------------- trusted --------------------------- */}
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-4">
							<h6 className="w-fit whitespace-nowrap">trusted by over 100+ businesses</h6>
							<Separator className="flex-1" />
						</div>
						{/* ----------------------- customers logos ---------------------- */}
						<div className="grid lg:grid-cols-4 gap-4 grid-cols-2">
							<Image
								src={client1}
								alt={"client"}
								className="object-contain dark:bg-transparent bg-foreground rounded-lg "
							/>
							<Image
								src={client2}
								alt={"client"}
								className="object-contain dark:bg-transparent bg-foreground rounded-lg "
							/>
							<Image
								src={client3}
								alt={"client"}
								className="object-contain dark:bg-transparent bg-foreground rounded-lg "
							/>
							<Image
								src={client4}
								alt={"client"}
								className="object-contain dark:bg-transparent bg-foreground rounded-lg "
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
