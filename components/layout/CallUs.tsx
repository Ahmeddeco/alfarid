import Link from "next/link"
import { Button } from "../ui/button"
import { Phone } from "lucide-react"

export default function CallUs() {
	return (
		<Button asChild variant={"ghost"} size={"icon"}>
			<Link href={"https://wa.me/+201152640142"} target="_blank">
				<Phone className="size-6" />
			</Link>
		</Button>
	)
}
