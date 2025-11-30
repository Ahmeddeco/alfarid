import UserButton from "@/components/auth/UserButton"
import { ThemeButton } from "../theme/ThemeButton"
import FrontNavigation from "./FrontNavigation"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import CallUs from "./CallUs"

export default function Header() {
	return (
		<header className="fixed inset-0 h-12 lg:h-14 border bg-foreground/95 text-background flex items-center justify-between px-8 z-50 shadow-md container mx-auto rounded-full my-4  ">
			<Logo />
			<nav className="hidden lg:flex items-center gap-6">
				<FrontNavigation />
			</nav>
			<div className="hidden lg:flex items-center gap-4">
				<CallUs />
				<ThemeButton />
				<UserButton />
			</div>
			<div className="lg:hidden block">
				<MobileMenu />
			</div>
		</header>
	)
}
