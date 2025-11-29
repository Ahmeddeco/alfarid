import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
	return (
		<div className="h-dvh flex flex-col items-center justify-center gap-4 ">
			<h2>Not Found</h2>
			<h6>Could not find requested resource</h6>
			<Button asChild>
				<Link href="/">Return Home</Link>
			</Button>
		</div>
	)
}
