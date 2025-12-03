import { CircleChevronLeft, UserRoundX } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import EditClient from "@/components/forms/EditClient"
import { getOneClient } from "@/dl/clientsData"

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const client = await getOneClient(id)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit client"}
			description={"edit a client to the database."}
			btnTitle={"back"}
			href="/server/clients"
		>
			{!client?.data ? (
				<EmptyCard href={"/server/clients"} linkTitle={"no client found"} linkIcon={UserRoundX} />
			) : (
				<EditClient data={client.data} />
			)}
		</ServerPageCard>
	)
}
