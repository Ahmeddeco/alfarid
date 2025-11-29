import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "./Logo"
import FrontNavigation from "./FrontNavigation"
import { ThemeButton } from "../theme/ThemeButton"
import Search from "./Search"
import UserButton from "@/components/auth/UserButton"

export default function MobileMenu() {
	return (
		<>
			<Sheet>
				<SheetTrigger>
					<Menu />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader className="border-b shadow-md">
						<SheetTitle>
							<Logo />
						</SheetTitle>
					</SheetHeader>
					<nav className="flex flex-col items-center gap-8 p-4 h-fit">
						<FrontNavigation />
					</nav>
					<SheetFooter className="flex-row items-center justify-between border-t shadow-md">
						<UserButton />
						<Search />
						<ThemeButton />
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</>
	)
}
