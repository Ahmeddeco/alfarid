import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { auth } from "@/auth"
import Image from "next/image"
import SignOut from "./SignOut"
import SignIn from "./SignIn"

export default async function UserButton() {
	const session = await auth()
	const user = session?.user

	return (
		<>
			{user ? (
				<DropdownMenu>
					<DropdownMenuTrigger>
						<div className="size-8 relative rounded-full">
							<Image
								src={user.image ?? "/icons/noImage.svg"}
								alt={"user"}
								fill
								className="rounded-full object-cover"
							/>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>
							<div className="w-full aspect-square relative rounded-xl">
								<Image
									src={user.image ?? "/icons/noImage.svg"}
									alt={"user"}
									fill
									className="rounded-xl object-cover"
								/>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>{user.name}</DropdownMenuItem>
						<DropdownMenuItem>{user.email}</DropdownMenuItem>
						<DropdownMenuItem>
							<SignOut />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			) : (
				<SignIn />
			)}
		</>
	)
}
