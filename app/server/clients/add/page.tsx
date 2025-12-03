import AddUser from "@/components/forms/AddClient"
import { CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"

export default function AddUserPage() {
	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"Add client"}
			description={"Add a client to the database."}
			btnTitle={"back"}
			href="/server/clients"
		>
			<AddUser />
		</ServerPageCard>
	)
}
