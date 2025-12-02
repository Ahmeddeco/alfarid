import Logo from "./Logo"
import { socials } from "@/constants/nav"
import Link from "next/link"
import React from "react"

export default function Footer() {
	return (
		<footer className="px-4  min-h-48 h-auto bg-foreground text-background">
			<div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between justify-center  gap-4 py-8">
				{/* -------------------------------- Logo -------------------------------- */}
				<div className="flex flex-col gap-4 lg:w-xs w-full lg:justify-start justify-center ">
					<Logo />
					<h6 className="text-pretty lg:text-start text-center">
						Unlock your business&apos;s full potential. With our expertise and your vision, the possibilities are
						endless. Reach out today and let&apos;s start building a brighter,more profitable future for your business.
					</h6>
				</div>

				{/* ------------------------------ social media ------------------------------ */}
				<div className="w-xs flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<h4 className="lg:text-start text-center">get in touch</h4>
						<h6 className="lg:text-start text-center">25 Talaat Harb.st, Shebeen El-Kom, Menofia Governorate 32111</h6>
						<h6 className="lg:text-start text-center">+20 100 644 6008</h6>
					</div>
					<div className="flex flex-col lg:justify-start justify-center gap-2">
						<h4 className="lg:text-start text-center">social media</h4>
						<nav className="flex items-center lg:justify-start justify-center gap-4">
							{socials.map(({ href, icon }) => (
								<Link href={href} key={href} target="_blank" className="hover:text-primary ease-in-out duration-500">
									{React.createElement(icon, { size: 24 })}
								</Link>
							))}
						</nav>
					</div>
				</div>
			</div>
		</footer>
	)
}
