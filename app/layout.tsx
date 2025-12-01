import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import localFont from "next/font/local"
import { Toaster } from "@/components/ui/sonner"
import { CircleAlert, CircleCheckBig, CircleX } from "lucide-react"

const playPen = localFont({
	src: "../public/PlaypenSansArabic.ttf",
})

export const metadata: Metadata = {
	title: "Alfarid | Digital Marketing Agency",
	description:
		"We don't just offer services, We create solutions that drive growth, increase sales and transform your digital presence.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${playPen.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						{children}
					<Toaster
						theme="system"
						richColors
						duration={5000}
						icons={{
							success: <CircleCheckBig />,
							warning: <CircleAlert />,
							error: <CircleX />,
						}}
						/>
				</ThemeProvider>
			</body>
		</html>
	)
}
