import Image from "next/image"
import { Card, CardContent, CardFooter } from "../ui/card"
import { $Enums } from "@prisma/client"

type Props = {
	data:
		| {
				id: string
				seller: {
					name: string | null
				}
				factory: {
					name: string
				}
				title: string
				category: $Enums.Category
				price: number
				discount: number
				quantity: number
				mainImage: string
				style: {
					title: string
				}
		  }
		| undefined
}

export default function ProductCard({ data }: Props) {
	return (
		<Card className="px-0 pt-0 w-sm ">
			<CardContent className="relative aspect-square w-full">
				<Image src={data?.mainImage ?? "/icons/noImage.svg"} alt={data?.title ?? "OurProducts"} fill className="object-cover rounded-t-lg" />
			</CardContent>
			<CardFooter className="flex flex-col items-start gap-1">
				<h4>{data?.title}</h4>
				<h6 className="text-primary">{data?.factory.name}</h6>
			</CardFooter>
		</Card>
	)
}
