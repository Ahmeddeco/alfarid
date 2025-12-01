import Image from "next/image"
import WhyUsCard from "./WhyUsCard"

export default function WhyUs() {
	return (
		<section className="section flex flex-col items-center  gap-8">
			<h2>why alfarid is the right choice for your business?</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full ">
				{/* ------------------------------ top image ------------------------------ */}
				<div className="row-span-2 h-full relative aspect-square lg:aspect-auto ">
					<Image src={"/WhyUsTop.webp"} alt={"Why Us"} fill className="object-fill rounded-2xl border" />
				</div>
				<WhyUsCard
					title={"we deliver results that matter"}
					description={
						"Our primary goal is to increase your sales and trow your business, We use proven strategies and innovative tactics to deliver results that make a real difference."
					}
				/>
				<WhyUsCard
					title={"customized strategies for your needs"}
					description={
						"We understand that no two businesses are the same, That's why we tailor our services to fit your specific goals, ensuring maximum impact and success."
					}
				/>
				<WhyUsCard
					title={"expert team dedicated to your success"}
					description={
						"Our team is made up of seasoned professionals who are experts in their fields. We're passionate about what we do, and it shows in the results we achieve for our clients."
					}
				/>
				<WhyUsCard
					title={"transparent and honest communication"}
					description={
						"We believe in building strong relationships through trust and transparency. You'll always know what we're doing, why we're doing, why we're doing it, and how it's benefiting your business."
					}
				/>
				<WhyUsCard
					title={"your success is our mission"}
					description={
						"We're not just service providers, we're partners in your journey. We're committed to helping you achieve your goals and will go the extra mile to ensure your satisfaction."
					}
				/>
				<div className=" h-full relative aspect-video lg:aspect-auto ">
					<Image src={"/WhyUsBottom.webp"} alt={"Why Us"} fill className=" object-fill  rounded-2xl border" />
				</div>
			</div>
		</section>
	)
}
