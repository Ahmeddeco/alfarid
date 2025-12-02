import ServicesCard from "@/components/pages/services/ServicesCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"
import Link from "next/link"
import ourServicesImage from "@/public/services/ourServices.webp"
import Image from "next/image"

export default function ServicesPage() {
	return (
		<section className="section flex flex-col lg:items-center  gap-16 min-h-[80vh] h-auto pt-32">
			{/* ------------------------------- title ------------------------------ */}
			<div className="flex flex-col gap-4">
				<h1 className="text-center">
					our services - designed to boost your <br />
					sales and grow your brand
				</h1>
				<h5 className="text-center">
					we provide a full spectrum of digital services tailored to meet your unique needs and objectives.
				</h5>
				<div className="relative lg:w-6xl w-full aspect-video">
					<Image src={ourServicesImage} alt={"our services"} fill />
				</div>
			</div>
			{/* --------------------------- digital marketing -------------------------- */}
			<ServicesCard
				career={"digital marketing"}
				mainTitle={"attract, engage, convert"}
				underImage={
					"Don't just take our word for it experience a surge in high quality leads and watch your conversion rates soar."
				}
				image={"/services/digitalMarketing.webp"}
				imageFirst={true}
				points={[
					{ title: "get found online", description: "Increase your visibility with our expert SEO strategies." },
					{
						title: "engage your  audience",
						description: "Captivate potential customers with targeted email marketing and compelling PPC campaigns.",
					},
					{
						title: "drive sales",
						description: "turn website visitors into paying customers with data driven tactics that work.",
					},
				]}
			/>

			{/* ----------------------- performance marketing ---------------------- */}
			<ServicesCard
				career={"performance marketing"}
				mainTitle={"invest wisely, reap the rewards"}
				underImage={"Say goodbye to wasted budgets and hello to effective, results oriented marketing."}
				image={"/services/performanceMarketing.webp"}
				imageFirst={false}
				points={[
					{
						title: "maximize ROI",
						description:
							"Every dollar counts. We optimize your marketing spend to deliver the highest possible return.",
					},
					{
						title: "measurable outcomes",
						description: "Clear, tranparent reporting lets your see the impact of your investment.",
					},
					{
						title: "stategic growth",
						description: "Focus on campaigns that deliver real results and contribute to your bottom line.",
					},
				]}
			/>

			{/* ---------------------- social media marketing ---------------------- */}
			<ServicesCard
				career={"social media marketing"}
				mainTitle={"build a loyal community"}
				underImage={"Let us help you create a vibrant social presence that drives real business results."}
				image={"/services/socialMedia.webp"}
				imageFirst={true}
				points={[
					{ title: "stand out", description: "Cut through the noise with content that grabs attention and resonates." },
					{
						title: "grow your following",
						description: "Increase your reach on platforms like Instagram, Facebook, and LinkedIn",
					},
					{
						title: "boost engagement",
						description: "Foster meaningful interactions that turn followers into brand advocates.",
					},
				]}
			/>

			{/* --------------------- web design & development --------------------- */}
			<ServicesCard
				career={"web design & development"}
				mainTitle={"your digital storefront reimagined"}
				underImage={"transform your website into a powerful tool that not only looks good but sells effectively."}
				image={"/services/websiteDevelopment.webp"}
				imageFirst={false}
				points={[
					{
						title: "first impressions matter",
						description: "Wow your visitors with a stunning, user friendly website.",
					},
					{
						title: "mobile optimization",
						description: "Ensure seamless experiernces across all devices.",
					},
					{
						title: "conversion Focus",
						description: "Design with the customer juourney in mind to maximize sales.",
					},
				]}
			/>

			{/* -------------------------- e-commerce solutions -------------------------- */}
			<ServicesCard
				career={"e-commerce solutions"}
				mainTitle={"skyrocket your online sales"}
				underImage={"Unlock your online store's full potential and watch your revenue grow."}
				image={"/services/ecommerce.webp"}
				imageFirst={true}
				points={[
					{
						title: "user experience excellence",
						description: "Simplify shopping with intuitive navigation and checkout processes.",
					},
					{
						title: "sales optimization",
						description: "Implement strategies that increase average order value and customer lifetime value.",
					},
					{
						title: "customer retention",
						description: "Keep them coming back with personalized experiences and loyalty programs.",
					},
				]}
			/>

			{/* ------------------------ graphic design & branding ----------------------- */}
			<ServicesCard
				career={"graphic design & branding"}
				mainTitle={"make a lasting impact"}
				underImage={"Elevate your brand with visuals that speak volumes."}
				image={"/services/branding.webp"}
				imageFirst={false}
				points={[
					{
						title: "brand identity",
						description: "Create a cohesive look that reflects your values and appeals to your target market.",
					},
					{
						title: "memorable visuals",
						description: "Stand out with striking designs that leave a lasting impression.",
					},
					{
						title: "consistency across channels",
						description: "Ensure your brand is instantly recognizable wherever customers find you.",
					},
				]}
			/>

			<ServicesCard
				career={"content writing & marketing"}
				mainTitle={"communicate, persuade, sell"}
				underImage={"Let our words be the catalyst for your business growth."}
				image={"/services/contentWrithng.webp"}
				imageFirst={true}
				points={[
					{
						title: "engaging copy",
						description: "Capture attention with storytelling that resonates.",
					},
					{
						title: "SEO optimization",
						description: "Improve your search rankings with content that satisfies both readers and algorithms.",
					},
					{
						title: "drive action",
						description: "Persuade your audience to take the next step with compelling calls to action.",
					},
				]}
			/>

			<Card className="w-full gradient text-neutral-100 relative">
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
		</section>
	)
}
