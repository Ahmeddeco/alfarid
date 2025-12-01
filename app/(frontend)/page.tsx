import ContactUs from "@/components/pages/home/ContactUs"
import Hero from "@/components/pages/home/Hero"
import OurServices from "@/components/pages/home/OurServices"
import WhyUs from "@/components/pages/home/WhyUs"

export default function HomePage() {
	return (
		<>
			<Hero />
			<OurServices />
			<WhyUs />
			<ContactUs />
		</>
	)
}
