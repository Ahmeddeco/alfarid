import { isAdmin } from "@/functions/isAdmin"
import { MoreVertical, PhoneOff, PlusCircle, User2 } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import Form from "next/form"
import { Input } from "@/components/ui/input"
import { getAllClientsToClientsPage } from "@/dl/clientsData"
import { deleteClientAction } from "@/actions/clientAction"

export default async function ClientsPage({ searchParams }: { searchParams: Promise<{ page: string; size: string }> }) {
	await isAdmin()

	const { page, size } = await searchParams
	const pageNumber = +page > 1 ? +page : 1
	const pageSize = +size || 10
	const clients = await getAllClientsToClientsPage(pageSize, pageNumber)

	return (
		<ServerPageCard
			icon={PlusCircle}
			title={"all clients"}
			description={"All clients in the database."}
			btnTitle={"add client"}
			href={"/server/clients/add"}
		>
			{!clients?.data.length ? (
				<EmptyCard href={"/server/clients/add"} linkTitle={"add client"} linkIcon={User2} />
			) : (
				<Table>
					{/* ---------------------------- TableHeader ---------------------------- */}
					<TableHeader>
						<TableRow>
							<TableHead>company Logo</TableHead>
							<TableHead>full name</TableHead>
							<TableHead>company Name</TableHead>
							<TableHead>email</TableHead>
							<TableHead>mobile</TableHead>
							<TableHead>address</TableHead>
							<TableHead className="text-right">settings</TableHead>
						</TableRow>
					</TableHeader>
					{/* ----------------------------- TableBody ----------------------------- */}
					<TableBody>
						{clients.data.map(({ country, email, state, id, companyLogo, companyName, fullName, phone }) => (
							<TableRow key={id}>
								<TableCell>
									<Image
										src={companyLogo ?? "/noImage.svg"}
										alt={""}
										width={50}
										height={50}
										className="rounded-lg object-cover aspect-square"
									/>
								</TableCell>
								<TableCell className="capitalize">{fullName}</TableCell>
								<TableCell>{companyName ?? "no company name"}</TableCell>
								<TableCell>{email}</TableCell>
								<TableCell>{phone ?? <PhoneOff />}</TableCell>
								<TableCell className="capitalize">
									{country ?? "no country"} - {state ?? "no state"}
								</TableCell>
								{/* -------------------------------- settings -------------------------------- */}
								<TableCell className="text-right">
									<DropdownMenu>
										<DropdownMenuTrigger>
											<MoreVertical />
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end" className="space-y-2">
											{/* <DropdownMenuItem> */}
											<Button variant={"success"} size={"full"} asChild>
												<Link href={`/server/clients/edit/${id}`}>edit</Link>
											</Button>
											{/* </DropdownMenuItem> */}
											{/* ---------------------------- delete --------------------------- */}
											<DropdownMenuItem asChild>
												<Dialog>
													<DialogTrigger asChild>
														<Button variant={"default"} size={"full"}>
															delete
														</Button>
													</DialogTrigger>
													<DialogContent>
														<DialogHeader>
															<DialogTitle>Are you sure you want to delete this client ?</DialogTitle>
															<DialogDescription>
																This action can not be undone. This will permanently delete this client and remove its
																data from our servers.
															</DialogDescription>
														</DialogHeader>
														<div className="flex items-center justify-between ">
															<Button asChild variant={"success"}>
																<DialogClose>cancel</DialogClose>
															</Button>
															<Form action={deleteClientAction}>
																<Input type="hidden" name="id" value={id} />
																<Button variant={"default"} type="submit">
																	delete
																</Button>
															</Form>
														</div>
													</DialogContent>
												</Dialog>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
					{/* ---------------------------- Pagination ---------------------------- */}
					<TableCaption>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									{/* --------------------------- Previous --------------------------- */}
									{pageNumber > 1 && <PaginationPrevious href={`?size=${pageSize}&page=${pageNumber - 1}`} />}
								</PaginationItem>
								{/* ------------------------- PaginationLink ------------------------ */}
								{Array.from({ length: clients.totalPages ?? 1 }).map((_, index) => (
									<PaginationItem key={index}>
										<PaginationLink href={`?size=${pageSize}&page=${index + 1}`} isActive={pageNumber === index + 1}>
											{index + 1}
										</PaginationLink>
									</PaginationItem>
								))}
								<PaginationItem>
									{/* ----------------------------- Next ----------------------------- */}
									{pageNumber < clients.totalPages && (
										<PaginationNext href={`?size=${pageSize}&page=${pageNumber + 1}`} />
									)}
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</TableCaption>
				</Table>
			)}
		</ServerPageCard>
	)
}
