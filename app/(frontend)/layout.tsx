import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className=" container mx-auto px-6 min-h-dvh h-auto">{children}</main>
			<Footer />
		</>
	)
}
